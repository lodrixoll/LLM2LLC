import React from 'react';
import Navbar from '../components/Navbar';

const Features = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="container mx-auto text-center py-8 mt-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                <ul className="text-lg text-gray-700 space-y-4">
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> General Ledger & Expense Tracking</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> File Storage & Record Keeping</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> Get EIN & Business Banking Account</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> Task Manager & Compliance</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> 24/7 customer service</li>
                </ul>
            </div>
        </div>
    );
};

export default Features;