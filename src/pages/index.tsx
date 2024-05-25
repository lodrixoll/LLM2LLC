import React from 'react';



const Home = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <nav className="w-full">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <a className="text-2xl font-bold text-gray-900" href="#">LLM2LLC</a>
                    <div className="space-x-4">
                        <a className="text-gray-700 hover:text-gray-900" href="#">Home</a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">Features</a>
                        <a className="text-gray-700 hover:text-gray-900" href="#">Contact</a>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto text-center flex-grow flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">LLM2LLC</h1>
                <p className="text-xl text-gray-700 mb-6">AI solution for LLC formation and small business growth.</p>
                <hr className="w-1/2 border-gray-300 my-4 mx-auto" />
                <p className="text-lg text-gray-700 mb-8">Built for Founders, Consultants, & Entrepreneurs.</p>
                <div className="space-x-4 mb-8">
                    <a className="bg-mint-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-mint-600 transition duration-300" href="#" role="button">Get Started</a>
                    <a className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg hover:bg-gray-300 transition duration-300" href="#" role="button">Learn More</a>
                </div>
            </div>

            <div className="container mx-auto text-center py-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                <ul className="text-lg text-gray-700 space-y-4">
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> General Ledger & Expense Tracking</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> File Storage & Record Keeping</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> Get EIN & Business Banking Account</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> Task Manager & Compliance</li>
                    <li><i className="fas fa-check text-gray-700 mr-2"></i> 24/7 customer service</li>
                </ul>
            </div>

            <footer className="mt-auto py-4 w-full">
                <div className="container mx-auto text-center">
                    <span className="text-gray-700">© 2023 LLM2LLC. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );

};



export default Home;