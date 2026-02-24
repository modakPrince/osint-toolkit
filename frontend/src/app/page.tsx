import ModuleCard from '@/components/ModuleCard';

const modules = [
  { title: 'Breach Checker', description: 'Check if an email has been compromised in known data breaches.', href: '/breach-checker', icon: '🔓', category: 'intelligence' as const },
  { title: 'WHOIS & DNS', description: 'Lookup domain registration, ownership and DNS records.', href: '/whois-dns', icon: '🌐', category: 'intelligence' as const },
  { title: 'Subdomain Finder', description: 'Discover hidden subdomains of a target domain.', href: '/subdomain-finder', icon: '🔍', category: 'intelligence' as const },
  { title: 'Username Enumeration', description: 'Search a username across 50+ social platforms.', href: '/username-enum', icon: '👤', category: 'intelligence' as const },
  { title: 'IP Intelligence', description: 'Geolocate an IP address and identify its ISP/org.', href: '/ip-intelligence', icon: '📍', category: 'intelligence' as const },
  { title: 'Tech Stack Profiler', description: 'Detect frameworks, CDNs and servers behind a website.', href: '/tech-stack', icon: '⚙️', category: 'intelligence' as const },
  { title: 'Metadata Extractor', description: 'Extract hidden EXIF data from uploaded images.', href: '/metadata-extractor', icon: '🖼️', category: 'forensics' as const },
  { title: 'Email Forensics', description: 'Trace email origins by analyzing raw headers.', href: '/email-forensics', icon: '📧', category: 'forensics' as const },
  { title: 'Wordlist Generator', description: 'Generate custom probable-password lists from profile data.', href: '/wordlist-gen', icon: '📝', category: 'forensics' as const },
  { title: 'OSINT Wiki', description: 'Curated directory of OSINT tools and resources.', href: '/wiki', icon: '📚', category: 'platform' as const },
  { title: 'Case Manager', description: 'Save and export investigation results as reports.', href: '/case-manager', icon: '🗂️', category: 'platform' as const },
  { title: 'Threat Map', description: 'Live visualization of global cyber threat activity.', href: '/threat-map', icon: '🗺️', category: 'platform' as const },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tight">
            <span className="text-blue-500">OSINT</span> Toolkit
          </h1>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            A unified open-source intelligence platform for reconnaissance, digital forensics, and threat analysis.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">Core Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.filter(m => m.category === 'intelligence').map(m => <ModuleCard key={m.href} {...m} />)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-6">Digital Forensics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.filter(m => m.category === 'forensics').map(m => <ModuleCard key={m.href} {...m} />)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-6">Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.filter(m => m.category === 'platform').map(m => <ModuleCard key={m.href} {...m} />)}
          </div>
        </section>
      </div>
    </div>
  );
}