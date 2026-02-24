'use client';
import { useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  buttonText?: string;
  onSearch: (value: string) => void;
  loading?: boolean;
}

export default function SearchBar({ placeholder, buttonText = 'Analyze', onSearch, loading = false }: SearchBarProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-2xl mx-auto mb-10">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-slate-950 border border-slate-700 px-4 py-3 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-semibold text-white transition-colors"
      >
        {loading ? 'Scanning...' : buttonText}
      </button>
    </form>
  );
}