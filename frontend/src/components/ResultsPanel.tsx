interface ResultsPanelProps {
  loading: boolean;
  error: string | null;
  hasResults: boolean;
  children: React.ReactNode;
}

export default function ResultsPanel({ loading, error, hasResults, children }: ResultsPanelProps) {
  if (loading) {
    return (
      <div className="min-h-[300px] border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 bg-slate-950/50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-400 text-sm">Running analysis...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[200px] border border-red-900 rounded-xl flex items-center justify-center bg-red-950/20 p-6">
        <div className="text-center">
          <p className="text-red-400 font-semibold text-lg">⚠ Analysis Failed</p>
          <p className="text-red-300/70 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!hasResults) {
    return (
      <div className="min-h-[300px] border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center">
        <span className="text-slate-600 italic text-sm">Enter a target above and click Analyze to begin.</span>
      </div>
    );
  }

  return (
    <div className="border border-slate-800 rounded-xl bg-slate-950/50 p-6">
      {children}
    </div>
  );
}