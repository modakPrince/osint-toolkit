from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()

@router.get("/domain-recon/{domain_name}")
async def domain_recon(domain_name: str):
    try:
        # Example API call to a domain information service
        response = requests.get(f"https://api.example.com/domain/{domain_name}")
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as http_err:
        raise HTTPException(status_code=response.status_code, detail=str(http_err))
    except Exception as err:
        raise HTTPException(status_code=500, detail=str(err))