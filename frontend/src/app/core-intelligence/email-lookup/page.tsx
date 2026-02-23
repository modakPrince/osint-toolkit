import React, { useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import ResultsPanel from '../../../components/ResultsPanel';

const EmailLookupPage = () => {
    const [email, setEmail] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = async () => {
        // Call the API to perform the email lookup
        const response = await fetch(`/api/email-lookup?email=${email}`);
        const data = await response.json();
        setResults(data);
    };

    return (
        <div className="email-lookup-page">
            <h1>Email Lookup</h1>
            <SearchBar 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                onSearch={handleSearch} 
                placeholder="Enter email address" 
            />
            {results && <ResultsPanel results={results} />}
        </div>
    );
};

export default EmailLookupPage;