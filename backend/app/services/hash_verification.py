from hashlib import sha256

def verify_hash(file_path: str, expected_hash: str) -> bool:
    """Verify the SHA-256 hash of a file against an expected hash."""
    hasher = sha256()
    
    try:
        with open(file_path, 'rb') as f:
            # Read the file in chunks to avoid using too much memory
            for chunk in iter(lambda: f.read(4096), b""):
                hasher.update(chunk)
    except FileNotFoundError:
        return False
    
    # Compare the computed hash with the expected hash
    return hasher.hexdigest() == expected_hash.lower()