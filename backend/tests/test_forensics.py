import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_metadata_extraction():
    response = client.post("/api/forensics/metadata-extraction", files={"file": ("test_image.jpg", open("tests/test_image.jpg", "rb"))})
    assert response.status_code == 200
    assert "metadata" in response.json()

def test_file_analysis():
    response = client.post("/api/forensics/file-analysis", files={"file": ("test_file.txt", open("tests/test_file.txt", "rb"))})
    assert response.status_code == 200
    assert "analysis" in response.json()

def test_hash_verification():
    response = client.post("/api/forensics/hash-verification", json={"hash": "d41d8cd98f00b204e9800998ecf8427e", "file": ("test_file.txt", open("tests/test_file.txt", "rb"))})
    assert response.status_code == 200
    assert response.json()["verified"] is True

def test_network_traffic():
    response = client.post("/api/forensics/network-traffic", json={"traffic_data": "sample network traffic data"})
    assert response.status_code == 200
    assert "analysis" in response.json()