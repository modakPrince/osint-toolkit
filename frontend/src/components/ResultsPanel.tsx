import React from 'react';

interface ResultsPanelProps {
  results: any[]; // Replace 'any' with a more specific type based on your data structure
  loading: boolean;
  error: string | null;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ results, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="results-panel">
      {results.length === 0 ? (
        <div>No results found.</div>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{JSON.stringify(result)}</li> // Customize rendering of each result as needed
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsPanel;