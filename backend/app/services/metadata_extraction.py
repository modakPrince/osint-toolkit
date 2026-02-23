from typing import Any, Dict
from fastapi import UploadFile, File
from PIL import Image
import piexif

async def extract_metadata(file: UploadFile = File(...)) -> Dict[str, Any]:
    if not file.filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        return {"error": "Unsupported file type. Please upload a JPG or PNG image."}

    image = Image.open(file.file)
    exif_data = {}

    if 'exif' in image.info:
        exif_data = piexif.load(image.info['exif'])

    metadata = {
        "filename": file.filename,
        "format": image.format,
        "mode": image.mode,
        "size": image.size,
        "exif": exif_data
    }

    return metadata