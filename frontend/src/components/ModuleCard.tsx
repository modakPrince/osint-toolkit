import Link from 'next/link';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: 'intelligence' | 'forensics' | 'platform';
}

const categoryColors = {
  intelligence: 'border-blue-500/50 hover:border-blue-400',
  forensics: 'border-red-500/50 hover:border-red-400',
  platform: 'border-green-500/50 hover:border-green-400',
};

export default function ModuleCard({ title, description, href, icon, category }: ModuleCardProps) {
  return (
    <Link href={href} className={`group block p-6 bg-slate-900/60 border rounded-xl transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/5 ${categoryColors[category]}`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mt-2 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}