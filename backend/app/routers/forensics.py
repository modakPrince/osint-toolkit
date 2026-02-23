from fastapi import APIRouter, UploadFile, File
from typing import List
from app.services import metadata_extraction, file_analysis, hash_verification, network_traffic

router = APIRouter()

@router.post("/metadata-extraction/")
async def extract_metadata(file: UploadFile = File(...)):
    return await metadata_extraction.extract_metadata(file)

@router.post("/file-analysis/")
async def analyze_file(file: UploadFile = File(...)):
    return await file_analysis.analyze_file(file)

@router.post("/hash-verification/")
async def verify_hash(file: UploadFile = File(...), expected_hash: str):
    return await hash_verification.verify_hash(file, expected_hash)

@router.post("/network-traffic/")
async def analyze_network_traffic(file: UploadFile = File(...)):
    return await network_traffic.analyze_traffic(file)