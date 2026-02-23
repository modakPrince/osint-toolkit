import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_domain_recon():
    response = client.get("/api/intelligence/domain-recon?domain=example.com")
    assert response.status_code == 200
    assert "domain" in response.json()

def test_ip_geolocation():
    response = client.get("/api/intelligence/ip-geolocation?ip=8.8.8.8")
    assert response.status_code == 200
    assert "location" in response.json()

def test_email_lookup():
    response = client.get("/api/intelligence/email-lookup?email=test@example.com")
    assert response.status_code == 200
    assert "email" in response.json()

def test_social_media_profiling():
    response = client.get("/api/intelligence/social-media-profiling?username=testuser")
    assert response.status_code == 200
    assert "profiles" in response.json()