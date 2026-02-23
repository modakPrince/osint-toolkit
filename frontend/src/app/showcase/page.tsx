import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleCard from '../../components/ModuleCard';

const ShowcasePage = () => {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">OSINT Toolkit Showcase</h1>
                <p className="mb-4">
                    Welcome to the OSINT Toolkit Showcase! Here, you can explore the various features and capabilities of our toolkit designed for open-source intelligence and digital forensics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ModuleCard title="Core Intelligence Modules" description="Explore our core intelligence modules for domain recon, IP geolocation, email lookup, and social media profiling." />
                    <ModuleCard title="Digital Forensics Modules" description="Dive into our digital forensics modules for metadata extraction, file analysis, hash verification, and network traffic analysis." />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ShowcasePage;