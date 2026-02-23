import React from 'react';
import Link from 'next/link';

const CoreIntelligencePage = () => {
    return (
        <div>
            <h1>Core Intelligence Modules</h1>
            <p>Explore our core intelligence modules designed for various OSINT tasks.</p>
            <ul>
                <li>
                    <Link href="/core-intelligence/domain-recon">Domain Recon</Link>
                </li>
                <li>
                    <Link href="/core-intelligence/ip-geolocation">IP Geolocation</Link>
                </li>
                <li>
                    <Link href="/core-intelligence/email-lookup">Email Lookup</Link>
                </li>
                <li>
                    <Link href="/core-intelligence/social-media-profiling">Social Media Profiling</Link>
                </li>
            </ul>
        </div>
    );
};

export default CoreIntelligencePage;