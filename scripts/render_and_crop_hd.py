import os
import shutil
import pypdfium2 as pdfium
from PIL import Image, ImageOps

os.makedirs("public/images/schedule", exist_ok=True)
os.makedirs("Schedule_pdfs", exist_ok=True)

pdf = pdfium.PdfDocument("Booklet final draft.pdf")

# 1. Complete schedule (page 33, index 32)
print("Rendering Complete Schedule (Page 33)...")
p33 = pdf[32].render(scale=4).to_pil().convert("RGB").rotate(270, expand=True)
c33 = p33.crop((77, 382, 3293, 2145))
c33_padded = ImageOps.expand(c33, border=16, fill="white")
c33_padded.save("public/images/schedule/complete_schedule.png", "PNG", quality=100)
shutil.copy("public/images/schedule/complete_schedule.png", "public/images/schedule/trs-dsai-2026-schedule.png")

doc_comp = pdfium.PdfDocument.new()
doc_comp.import_pages(pdf, [32])
doc_comp[0].set_rotation(270)
doc_comp.save("Schedule_pdfs/complete_schedule.pdf")

# 2. Day 1 schedule (page 34, index 33)
print("Rendering Day 1 Schedule (Page 34)...")
p34 = pdf[33].render(scale=4).to_pil().convert("RGB")
c34 = p34.crop((153, 321, 2247, 2667))
c34_padded = ImageOps.expand(c34, border=16, fill="white")
c34_padded.save("public/images/schedule/day1_schedule.png", "PNG", quality=100)

doc_d1 = pdfium.PdfDocument.new()
doc_d1.import_pages(pdf, [33])
doc_d1.save("Schedule_pdfs/day1_schedule.pdf")

# 3. Day 2 schedule (page 35, index 34)
print("Rendering Day 2 Schedule (Page 35)...")
p35 = pdf[34].render(scale=4).to_pil().convert("RGB")
c35 = p35.crop((153, 330, 2247, 2412))
c35_padded = ImageOps.expand(c35, border=16, fill="white")
c35_padded.save("public/images/schedule/day2_schedule.png", "PNG", quality=100)

doc_d2 = pdfium.PdfDocument.new()
doc_d2.import_pages(pdf, [34])
doc_d2.save("Schedule_pdfs/day2_schedule.pdf")

print("HD rendering and cropping completed successfully from Booklet final draft.pdf!")
