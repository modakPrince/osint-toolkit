import React, { useState } from 'react';

const HashVerificationPage = () => {
    const [hashInput, setHashInput] = useState('');
    const [result, setResult] = useState(null);

    const handleHashChange = (e) => {
        setHashInput(e.target.value);
    };

    const verifyHash = async () => {
        // Call the backend API to verify the hash
        const response = await fetch('/api/verify-hash', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hash: hashInput }),
        });

        const data = await response.json();
        setResult(data);
    };

    return (
        <div className="hash-verification">
            <h1>Hash Verification</h1>
            <input
                type="text"
                value={hashInput}
                onChange={handleHashChange}
                placeholder="Enter hash to verify"
            />
            <button onClick={verifyHash}>Verify Hash</button>
            {result && (
                <div className="result">
                    <h2>Verification Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default HashVerificationPage;