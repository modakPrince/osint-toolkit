import React from 'react';
import ModuleCard from './ModuleCard';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1 className="text-2xl font-bold mb-4">OSINT Toolkit Dashboard</h1>
            <p className="mb-6">Welcome to the OSINT Toolkit. Here you can explore various intelligence and digital forensics modules.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ModuleCard title="Domain Recon" description="Perform domain lookups and gather information." link="/core-intelligence/domain-recon" />
                <ModuleCard title="IP Geolocation" description="Find geolocation data for IP addresses." link="/core-intelligence/ip-geolocation" />
                <ModuleCard title="Email Lookup" description="Check email-related information." link="/core-intelligence/email-lookup" />
                <ModuleCard title="Social Media Profiling" description="Check username availability across platforms." link="/core-intelligence/social-media-profiling" />
                <ModuleCard title="Metadata Extraction" description="Upload images and extract metadata." link="/digital-forensics/metadata-extraction" />
                <ModuleCard title="File Analysis" description="Analyze files for hidden data." link="/digital-forensics/file-analysis" />
                <ModuleCard title="Hash Verification" description="Verify file hashes." link="/digital-forensics/hash-verification" />
                <ModuleCard title="Network Traffic" description="Analyze network traffic data." link="/digital-forensics/network-traffic" />
            </div>
        </div>
    );
};

export default Dashboard;