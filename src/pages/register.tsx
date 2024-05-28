import React from 'react';
import Navbar from '../components/Navbar';

const Register = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="container mx-auto text-center flex-grow flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Register</h1>
                <p className="text-xl text-gray-700 mb-6">Create your account to get started.</p>
                <form className="w-full max-w-md mx-auto">
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg" type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg" type="password" placeholder="Password" />
                    </div>
                    <div className="mb-8">
                        <button className="bg-mint-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-mint-600 transition duration-300" type="submit">Register</button>
                    </div>
                </form>
            </div>
            <footer className="mt-auto py-4 w-full">
                <div className="container mx-auto text-center">
                    <span className="text-gray-700">© 2023 LLM2LLC. All rights reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Register;