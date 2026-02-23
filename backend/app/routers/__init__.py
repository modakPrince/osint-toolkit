from fastapi import APIRouter

router = APIRouter()

# Include intelligence and forensics routers
from .intelligence import router as intelligence_router
from .forensics import router as forensics_router

router.include_router(intelligence_router, prefix="/intelligence", tags=["Intelligence"])
router.include_router(forensics_router, prefix="/forensics", tags=["Forensics"])