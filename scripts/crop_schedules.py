import os
from PIL import Image, ImageChops

def crop_image(input_path, output_path, padding=20):
    img = Image.open(input_path).convert("RGB")
    # Compare against white background
    bg = Image.new("RGB", img.size, (255, 255, 255))
    diff = ImageChops.difference(img, bg)
    bbox = diff.getbbox()
    if bbox:
        # Add slight padding around the content without going out of bounds
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(img.size[0], bbox[2] + padding)
        bottom = min(img.size[1], bbox[3] + padding)
        cropped = img.crop((left, top, right, bottom))
        print(f"Original {input_path} size: {img.size} -> Bbox: {bbox} -> Cropped size: {cropped.size}")
        cropped.save(output_path, "PNG", quality=100)
    else:
        print(f"No bbox found for {input_path}")

os.makedirs("public/images/schedule", exist_ok=True)
crop_image("public/images/schedule/complete_schedule.png", "public/images/schedule/complete_schedule_cropped.png", padding=15)
crop_image("public/images/schedule/day1_schedule.png", "public/images/schedule/day1_schedule_cropped.png", padding=15)
crop_image("public/images/schedule/day2_schedule.png", "public/images/schedule/day2_schedule_cropped.png", padding=15)

# Also overwrite complete_schedule.png and trs-dsai-2026-schedule.png with the cropped version
crop_image("public/images/schedule/complete_schedule.png", "public/images/schedule/complete_schedule.png", padding=15)
crop_image("public/images/schedule/day1_schedule.png", "public/images/schedule/day1_schedule.png", padding=15)
crop_image("public/images/schedule/day2_schedule.png", "public/images/schedule/day2_schedule.png", padding=15)
crop_image("public/images/schedule/complete_schedule.png", "public/images/schedule/trs-dsai-2026-schedule.png", padding=15)
print("Cropping complete!")
