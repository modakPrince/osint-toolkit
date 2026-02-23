import React from 'react';
import Link from 'next/link';

const DigitalForensicsPage = () => {
    return (
        <div>
            <h1>Digital Forensics Modules</h1>
            <p>Explore our digital forensics tools designed to assist in various forensic investigations.</p>
            <ul>
                <li>
                    <Link href="/digital-forensics/metadata-extraction">
                        Metadata Extraction
                    </Link>
                </li>
                <li>
                    <Link href="/digital-forensics/file-analysis">
                        File Analysis
                    </Link>
                </li>
                <li>
                    <Link href="/digital-forensics/hash-verification">
                        Hash Verification
                    </Link>
                </li>
                <li>
                    <Link href="/digital-forensics/network-traffic">
                        Network Traffic Analysis
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DigitalForensicsPage;