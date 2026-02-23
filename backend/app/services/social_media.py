from fastapi import APIRouter, HTTPException
from typing import List, Dict
import requests

router = APIRouter()

@router.get("/social-media/profiles/{username}", response_model=Dict[str, List[str]])
async def get_social_media_profiles(username: str):
    platforms = ["facebook", "twitter", "instagram", "linkedin", "tiktok"]
    available_profiles = {}

    for platform in platforms:
        # Simulated API call to check username availability
        response = requests.get(f"https://api.example.com/check_username/{platform}/{username}")
        if response.status_code == 200:
            available_profiles[platform] = response.json().get("available", False)

    return available_profiles