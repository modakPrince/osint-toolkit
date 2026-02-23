from pydantic import BaseModel
from typing import List, Optional

class DomainReconRequest(BaseModel):
    domain: str

class DomainReconResponse(BaseModel):
    ip_addresses: List[str]
    registrar: str
    creation_date: str
    expiration_date: str

class IPGeolocationRequest(BaseModel):
    ip: str

class IPGeolocationResponse(BaseModel):
    country: str
    region: str
    city: str
    latitude: float
    longitude: float

class EmailLookupRequest(BaseModel):
    email: str

class EmailLookupResponse(BaseModel):
    domain: str
    is_valid: bool
    provider: Optional[str]

class SocialMediaProfileRequest(BaseModel):
    username: str

class SocialMediaProfileResponse(BaseModel):
    platforms: List[str]

class MetadataExtractionRequest(BaseModel):
    file: bytes

class MetadataExtractionResponse(BaseModel):
    metadata: dict

class FileAnalysisRequest(BaseModel):
    file: bytes

class FileAnalysisResponse(BaseModel):
    analysis_results: dict

class HashVerificationRequest(BaseModel):
    file: bytes
    expected_hash: str

class HashVerificationResponse(BaseModel):
    is_valid: bool

class NetworkTrafficRequest(BaseModel):
    file: bytes

class NetworkTrafficResponse(BaseModel):
    traffic_data: List[dict]