from fastapi import APIRouter
import requests

router = APIRouter()

@router.get("/ip-geolocation/{ip_address}")
async def get_ip_geolocation(ip_address: str):
    response = requests.get(f"https://ipapi.co/{ip_address}/json/")
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Unable to retrieve geolocation data"}