# OSINT Toolkit

## Overview
The OSINT Toolkit is a comprehensive web application designed for Open Source Intelligence (OSINT) gathering and digital forensics. It provides various modules that allow users to perform intelligence gathering, analyze digital evidence, and extract valuable information from various sources.

## Project Structure
The project is divided into two main parts: the frontend and the backend.

### Frontend
The frontend is built using Next.js and includes the following key components:
- **Core Intelligence Modules**: 
  - Domain Recon
  - IP Geolocation
  - Email Lookup
  - Social Media Profiling
- **Digital Forensics Modules**: 
  - Metadata Extraction
  - File Analysis
  - Hash Verification
  - Network Traffic Analysis
- **Showcase**: A page to demonstrate the toolkit's features.
- **About**: Information about the project.
- **Contact**: A form for user inquiries.

### Backend
The backend is built using FastAPI and includes:
- **Routers**: For handling requests related to intelligence and forensics.
- **Services**: Implementing the core functionality for each module.
- **Models**: Defining data schemas for requests and responses.
- **Utilities**: Helper functions for various tasks.

## Getting Started

### Prerequisites
- Node.js and npm installed for the frontend.
- Python and FastAPI installed for the backend.
- Docker and Docker Compose for containerization.

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd osint-toolkit
   ```

2. **Frontend Setup**
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the development server:
     ```
     npm run dev
     ```

3. **Backend Setup**
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Start the FastAPI server:
     ```
     uvicorn app.main:app --reload
     ```

4. **Docker Setup**
   - To run the application using Docker, execute:
     ```
     docker-compose up
     ```

## Usage
Once both the frontend and backend are running, you can access the OSINT Toolkit through your web browser at `http://localhost:3000`. Explore the various modules to gather intelligence and perform digital forensics.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.