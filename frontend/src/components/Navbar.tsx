import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    OSINT Toolkit
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/core-intelligence" className="text-gray-300 hover:text-white">Core Intelligence</Link>
                    </li>
                    <li>
                        <Link href="/digital-forensics" className="text-gray-300 hover:text-white">Digital Forensics</Link>
                    </li>
                    <li>
                        <Link href="/showcase" className="text-gray-300 hover:text-white">Showcase</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;