'use client';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/SearchBar';
import ResultsPanel from '@/components/ResultsPanel';

export default function AboutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  const handleSearch = async (value: string) => {
    setLoading(true);
    setError(null);
    setResults(null);
    setTimeout(() => { setLoading(false); }, 1000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          icon="ℹ️"
          title="About"
          description="Learn about the OSINT Toolkit project, its purpose and the team behind it."
        />
        <SearchBar placeholder="Search documentation..." onSearch={handleSearch} loading={loading} />
        <ResultsPanel loading={loading} error={error} hasResults={!!results}>
          <pre className="text-sm text-slate-300">{JSON.stringify(results, null, 2)}</pre>
        </ResultsPanel>
      </div>
    </div>
  );
}