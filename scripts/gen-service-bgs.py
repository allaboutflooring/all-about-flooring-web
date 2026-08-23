"""
Generates the eight service-card background textures.

These sit behind a ~72% dark overlay on hover, so they carry material and
tone rather than detail. Each is procedural and seeded, so re-running the
script reproduces the identical set.

    python3 scripts/gen-service-bgs.py
"""
import numpy as np
from PIL import Image, ImageFilter
import os, math

W, H = 1000, 760
OUT = 'public/img/services/bg'
os.makedirs(OUT, exist_ok=True)


def rng(seed):
    return np.random.default_rng(seed)


def grain(w, h, r, scale_x=140, scale_y=3, octaves=4):
    """Anisotropic fractal noise — long in x, tight in y, like wood figure."""
    acc = np.zeros((h, w), np.float32)
    amp = 1.0
    for o in range(octaves):
        sx = max(2, int(scale_x / (2 ** o)))
        sy = max(2, int(scale_y / (2 ** o)))
        small = r.random((max(2, h // sy), max(2, w // sx))).astype(np.float32)
        up = np.array(Image.fromarray((small * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC), np.float32) / 255
        acc += up * amp
        amp *= 0.5
    return (acc - acc.min()) / (np.ptp(acc) + 1e-6)


def hex2rgb(c):
    c = c.lstrip('#')
    return np.array([int(c[i:i + 2], 16) for i in (0, 2, 4)], np.float32)


def planks(seed, tones, plank_h=118, strength=0.30, stagger=3, gloss=0.0):
    r = rng(seed)
    img = np.zeros((H, W, 3), np.float32)
    g = grain(W, H, r, 170, 3, 5)
    y = 0
    row = 0
    while y < H:
        base = hex2rgb(tones[r.integers(0, len(tones))])
        band = slice(y, min(H, y + plank_h))
        seg = np.ones((band.stop - band.start, W, 1), np.float32) * base
        gg = g[band][:, :, None]
        seg *= (1 - strength * 0.5) + strength * gg
        # plank end joints, staggered per row
        off = int((row % stagger) * W / stagger)
        for x in range(off, W + 400, 380):
            if 0 <= x < W:
                seg[:, max(0, x - 2):x + 2] *= 0.72
        seg[:3] *= 0.66            # top shadow line
        seg[-3:] *= 0.86           # bottom highlight
        img[band] = seg
        y += plank_h
        row += 1
    if gloss:
        yy = np.linspace(0, 1, H)[:, None]
        xx = np.linspace(0, 1, W)[None, :]
        sheen = np.exp(-((xx - 0.35 - 0.2 * yy) ** 2) / 0.05) * gloss
        img += sheen[:, :, None] * 255
    return img


def tiles(seed, tone, grout, tw=250, th=250, offset=0.5, veined=False):
    r = rng(seed)
    img = np.ones((H, W, 3), np.float32) * hex2rgb(grout)
    base = hex2rgb(tone)
    g = grain(W, H, r, 60, 60, 5) if veined else grain(W, H, r, 40, 40, 3)
    rows = H // th + 2
    for j in range(rows):
        shift = int((j % 2) * tw * offset)
        for i in range(-1, W // tw + 2):
            x0, y0 = i * tw + shift + 4, j * th + 4
            x1, y1 = x0 + tw - 8, y0 + th - 8
            x0c, y0c = max(0, x0), max(0, y0)
            x1c, y1c = min(W, x1), min(H, y1)
            if x1c <= x0c or y1c <= y0c:
                continue
            tile = np.ones((y1c - y0c, x1c - x0c, 1), np.float32) * base
            gg = g[y0c:y1c, x0c:x1c][:, :, None]
            tile *= 0.86 + 0.28 * gg
            tile *= 1.0 + 0.05 * r.normal()
            img[y0c:y1c, x0c:x1c] = tile
    return img


def herringbone(seed, tones, L=300, T=76):
    r = rng(seed)
    img = np.ones((H, W, 3), np.float32) * hex2rgb('#2c2119')
    canvas = Image.fromarray(img.astype(np.uint8))
    from PIL import ImageDraw
    d = ImageDraw.Draw(canvas)
    g = grain(W, H, r, 150, 3, 4)
    step = int(L / math.sqrt(2))
    for j in range(-2, H // step + 3):
        for i in range(-2, W // step + 3):
            cx, cy = i * step, j * step
            for k, ang in enumerate((45, -45)):
                tone = tones[r.integers(0, len(tones))]
                a = math.radians(ang)
                ox = 0 if k == 0 else step // 2
                pts = []
                for dx, dy in ((0, 0), (L, 0), (L, T), (0, T)):
                    pts.append((cx + ox + dx * math.cos(a) - dy * math.sin(a),
                                cy + ox + dx * math.sin(a) + dy * math.cos(a)))
                d.polygon(pts, fill=tone, outline='#20180f')
    out = np.array(canvas, np.float32)
    out *= (0.82 + 0.30 * g[:, :, None])
    return out


def marble(seed, base, vein, freq=0.004):
    r = rng(seed)
    n = grain(W, H, r, 220, 190, 6)
    v = np.abs(np.sin((n * 9 + np.linspace(0, 6, W)[None, :] * 0.6) * math.pi))
    v = np.clip((0.30 - v) * 5, 0, 1)
    img = np.ones((H, W, 3), np.float32) * hex2rgb(base)
    img = img * (1 - v[:, :, None]) + hex2rgb(vein) * v[:, :, None]
    img *= 0.90 + 0.18 * n[:, :, None]
    return img


def finish(arr, name, blur=0.6):
    a = np.clip(arr, 0, 255).astype(np.uint8)
    im = Image.fromarray(a).filter(ImageFilter.GaussianBlur(blur))
    im.save(f'{OUT}/{name}.jpg', quality=82, optimize=True)
    im.save(f'{OUT}/{name}.webp', quality=80, method=6)
    return os.path.getsize(f'{OUT}/{name}.webp')


JOBS = [
    ('lvp',        lambda: planks(11, ['#B58A5E', '#A87C50', '#C29A6E', '#9E7448'], 104, strength=.34, gloss=.05)),
    ('laminate',   lambda: planks(22, ['#C9A575', '#BC9765', '#D3B085', '#B48C5C'], 118, strength=.30)),
    ('hardwood',   lambda: planks(33, ['#8A5A32', '#7B4E2A', '#96663A', '#714828'], 132, strength=.38)),
    ('engineered', lambda: planks(44, ['#A57A4E', '#966C42', '#B0855A', '#8C6238'], 168, strength=.32)),
    ('refinishing',lambda: planks(55, ['#D8BE96', '#CBAF86', '#E2C9A4', '#C2A379'], 126, strength=.26)),
    ('sanding',    lambda: planks(66, ['#B98F5E', '#AA8152', '#C69B6A'], 122, strength=.28, gloss=.16)),
    ('tile',       lambda: tiles(77, '#CFCAC1', '#9A948B', 300, 240, .5, veined=True)),
    ('bathroom',   lambda: tiles(88, '#E2E0DA', '#A9A49B', 170, 110, .5)),
]

print(f'{"file":<14} {"webp":>8}')
for name, fn in JOBS:
    kb = finish(fn(), name) // 1024
    print(f'  {name:<12} {kb:>5} KB')
