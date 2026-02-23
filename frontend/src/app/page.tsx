import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to the OSINT Toolkit</h1>
                <p>Your one-stop solution for open-source intelligence and digital forensics.</p>
                <Dashboard />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;