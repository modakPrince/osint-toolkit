import React from 'react';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About OSINT Toolkit</h1>
            <p>
                The OSINT Toolkit is designed to provide users with a comprehensive set of tools for open-source intelligence gathering and digital forensics. 
                Our goal is to empower individuals and organizations to conduct thorough investigations and analyses using publicly available information.
            </p>
            <h2>Core Features</h2>
            <ul>
                <li>Core Intelligence Modules: Tools for domain reconnaissance, IP geolocation, email lookups, and social media profiling.</li>
                <li>Digital Forensics Modules: Capabilities for metadata extraction, file analysis, hash verification, and network traffic analysis.</li>
                <li>User-Friendly Interface: An intuitive design that makes it easy to navigate and utilize the toolkit's features.</li>
            </ul>
            <h2>Our Mission</h2>
            <p>
                We aim to provide a reliable and efficient toolkit for OSINT and digital forensics, helping users to uncover insights and make informed decisions based on data.
            </p>
        </div>
    );
};

export default AboutPage;