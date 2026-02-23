import React, { useState } from 'react';

const MetadataExtractionPage = () => {
    const [file, setFile] = useState(null);
    const [metadata, setMetadata] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            setError('Please upload a file.');
            return;
        }
        setError('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/metadata-extraction', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to extract metadata');
            }
            const data = await response.json();
            setMetadata(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Metadata Extraction</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Extract Metadata</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {metadata && (
                <div>
                    <h2>Extracted Metadata</h2>
                    <pre>{JSON.stringify(metadata, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default MetadataExtractionPage;