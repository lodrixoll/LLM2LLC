import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="container mx-auto text-center flex-grow flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">LLM2LLC</h1>
                <p className="text-xl text-gray-700 mb-6">AI solution for LLC formation and small business growth.</p>
                <hr className="w-1/2 border-gray-300 my-4 mx-auto" />
                <p className="text-lg text-gray-700 mb-8">Built for Founders, Consultants, & Entrepreneurs.</p>
                <div className="space-x-4 mb-8">
                    <Link href="/register" passHref>
                        <span className="bg-mint-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-mint-600 transition duration-300" role="button">Get Started</span>
                    </Link>
                    <a className="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg text-lg hover:bg-gray-300 transition duration-300" href="#" role="button">Learn More</a>
                </div>
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