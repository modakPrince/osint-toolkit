'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Dashboard', href: '/' },
  {
    label: 'Intelligence', children: [
      { label: 'Breach Checker', href: '/breach-checker' },
      { label: 'WHOIS & DNS', href: '/whois-dns' },
      { label: 'Subdomain Finder', href: '/subdomain-finder' },
      { label: 'Username Enum', href: '/username-enum' },
      { label: 'IP Intelligence', href: '/ip-intelligence' },
      { label: 'Tech Stack', href: '/tech-stack' },
    ],
  },
  {
    label: 'Forensics', children: [
      { label: 'Metadata Extractor', href: '/metadata-extractor' },
      { label: 'Email Forensics', href: '/email-forensics' },
      { label: 'Wordlist Generator', href: '/wordlist-gen' },
    ],
  },
  {
    label: 'Platform', children: [
      { label: 'OSINT Wiki', href: '/wiki' },
      { label: 'Case Manager', href: '/case-manager' },
      { label: 'Threat Map', href: '/threat-map' },
    ],
  },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center h-16 gap-8">
        <Link href="/" className="text-xl font-black text-blue-500 tracking-tight">
          OSINT<span className="text-white">Toolkit</span>
        </Link>

        <div className="flex items-center gap-1 ml-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                  {link.label} ▾
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-slate-900 border border-slate-800 rounded-lg py-2 min-w-[200px] shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === child.href
                            ? 'text-blue-400 bg-slate-800'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={`px-3 py-2 text-sm transition-colors ${
                  pathname === link.href ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}