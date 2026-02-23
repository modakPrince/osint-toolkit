from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import re

router = APIRouter()

class EmailLookupRequest(BaseModel):
    email: str

class EmailLookupResponse(BaseModel):
    valid: bool
    domain: str
    provider: str

@router.post("/email-lookup", response_model=EmailLookupResponse)
async def email_lookup(request: EmailLookupRequest):
    email = request.email
    if not validate_email(email):
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    domain = email.split('@')[-1]
    provider = get_email_provider(domain)
    
    return EmailLookupResponse(valid=True, domain=domain, provider=provider)

def validate_email(email: str) -> bool:
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_regex, email) is not None

def get_email_provider(domain: str) -> str:
    # Placeholder for actual provider lookup logic
    return "Provider for " + domain