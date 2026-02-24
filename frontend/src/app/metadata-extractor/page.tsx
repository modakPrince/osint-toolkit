'use client';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/SearchBar';
import ResultsPanel from '@/components/ResultsPanel';

export default function MetadataExtractorPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  const handleSearch = async (value: string) => {
    setLoading(true);
    setError(null);
    setResults(null);
    // TODO: Phase 2 — call backend API (file upload)
    setTimeout(() => { setLoading(false); }, 1000); // placeholder
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          icon="🖼️"
          title="Metadata Extractor"
          description="Extract hidden EXIF data from images — camera model, GPS coordinates, timestamps and more."
        />
        <SearchBar placeholder="Enter image URL or upload a file..." onSearch={handleSearch} loading={loading} />
        <ResultsPanel loading={loading} error={error} hasResults={!!results}>
          <pre className="text-sm text-slate-300">{JSON.stringify(results, null, 2)}</pre>
        </ResultsPanel>
      </div>
    </div>
  );
}