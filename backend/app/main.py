from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import intelligence, forensics

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(intelligence.router, prefix="/api/intelligence", tags=["Intelligence"])
app.include_router(forensics.router, prefix="/api/forensics", tags=["Forensics"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the OSINT Toolkit API"}