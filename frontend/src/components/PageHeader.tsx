interface PageHeaderProps {
  title: string;
  description: string;
  icon: string;
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <header className="mb-12 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h1 className="text-4xl font-black uppercase tracking-tight text-white">
        {title}
      </h1>
      <p className="text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">{description}</p>
    </header>
  );
}