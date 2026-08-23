"""
Prepares the portfolio photography.

Each source is exported at two widths in JPEG. Then `npm run media`
writes the matching WebP (and WebM for any MP4). Never ship a raster
without a .webp sibling.

    python3 scripts/prep-work-photos.py
"""
from PIL import Image, ImageOps
import os

SRC = '/mnt/user-data/uploads'
OUT = 'public/img/work'
os.makedirs(OUT, exist_ok=True)

JOBS = [
    ('kitchen-backsplash-subway',   '00553b90-af8e-48b6-a844-2e6fd2ba5688.png'),
    ('checkerboard-open-plan',      'ChatGPT_Image_Aug_18__2026__05_14_24_PM.png'),
    ('wood-look-plank-tile',        'ChatGPT_Image_Aug_18__2026__08_13_41_PM.png'),
    ('tub-surround-vertical-tile',  'image00017.jpeg'),
    ('corner-shower-marble',        'image00016.jpeg'),
    ('dark-kitchen-bronze-glass',   'WhatsApp_Image_2023-12-27_at_00_28_53.jpeg'),
]

print(f'{"slug":<30} {"source":>10} {"webp 1200":>11} {"webp 800":>10}')
for slug, fname in JOBS:
    im = Image.open(os.path.join(SRC, fname))
    im = ImageOps.exif_transpose(im).convert('RGB')
    src_kb = os.path.getsize(os.path.join(SRC, fname)) // 1024
    sizes = {}
    for w in (1200, 800):
        h = round(im.height * w / im.width)
        r = im.resize((w, h), Image.LANCZOS)
        r.save(f'{OUT}/{slug}-{w}.webp', quality=82, method=6)
        r.save(f'{OUT}/{slug}-{w}.jpg', quality=84, optimize=True, progressive=True)
        sizes[w] = os.path.getsize(f'{OUT}/{slug}-{w}.webp') // 1024
    print(f'{slug:<30} {src_kb:>8} KB {sizes[1200]:>9} KB {sizes[800]:>8} KB')
