import os
import pypdfium2 as pdfium
from PIL import Image, ImageChops

def render_and_crop(pdf_path, out_png, scale=4, padding=16):
    print(f"Opening {pdf_path}...")
    pdf = pdfium.PdfDocument(pdf_path)
    page = pdf[0]
    # Render at high resolution (scale 4 = ~288 DPI)
    bitmap = page.render(scale=scale)
    pil_image = bitmap.to_pil().convert("RGB")
    
    # Calculate bounding box of non-white pixels
    bg = Image.new("RGB", pil_image.size, (255, 255, 255))
    diff = ImageChops.difference(pil_image, bg)
    bbox = diff.getbbox()
    
    if bbox:
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(pil_image.size[0], bbox[2] + padding)
        bottom = min(pil_image.size[1], bbox[3] + padding)
        cropped = pil_image.crop((left, top, right, bottom))
        print(f"Rendered {pdf_path}: {pil_image.size} -> Cropped: {cropped.size} (Bbox: {bbox})")
        cropped.save(out_png, "PNG", quality=100)
    else:
        print(f"Warning: No bbox detected, saving uncropped {out_png}")
        pil_image.save(out_png, "PNG", quality=100)

os.makedirs("public/images/schedule", exist_ok=True)

# 1. Complete schedule
render_and_crop("Schedule_pdfs/complete_schedule.pdf", "public/images/schedule/complete_schedule.png", scale=4, padding=20)
# Duplicate to legacy file name for compatibility
import shutil
shutil.copy("public/images/schedule/complete_schedule.png", "public/images/schedule/trs-dsai-2026-schedule.png")

# 2. Day 1 schedule
render_and_crop("Schedule_pdfs/day1_schedule.pdf", "public/images/schedule/day1_schedule.png", scale=4, padding=20)

# 3. Day 2 schedule
render_and_crop("Schedule_pdfs/day2_schedule.pdf", "public/images/schedule/day2_schedule.png", scale=4, padding=20)

print("HD rendering and cropping completed successfully!")
