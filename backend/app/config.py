from pydantic import BaseSettings

class Settings(BaseSettings):
    # FastAPI application settings
    APP_NAME: str = "OSINT Toolkit"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    DATABASE_URL: str = "sqlite:///./test.db"  # Example database URL
    SECRET_KEY: str = "your_secret_key"  # Replace with a secure key

    class Config:
        env_file = ".env"

settings = Settings()