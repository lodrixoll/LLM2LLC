import React from 'react';
import Navbar from '../components/Navbar';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        const result = await signIn('google', { callbackUrl: '/dashboard' });
        if (result?.url) {
            router.push(result.url);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-mint-start to-mint-end text-center py-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="container mx-auto text-center flex-grow flex flex-col justify-center px-4">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Register</h1>
                <p className="text-xl text-gray-700 mb-6">Create your account to get started.</p>
                <form className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-500 text-gray-700" type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-500 text-gray-700" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-500 text-gray-700" type="password" placeholder="Password" />
                    </div>
                    <div className="mb-8">
                        <button className="bg-mint-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-mint-600 transition duration-300 w-full" type="submit">Register</button>
                    </div>
                    <div className="mb-4">
                        <button className="bg-white text-gray-700 py-3 px-6 rounded-lg text-lg hover:bg-gray-100 transition duration-300 w-full flex items-center justify-center border border-gray-300" type="button" onClick={handleGoogleSignIn}>
                            <FaGoogle className="mr-2" /> Sign up with Google
                        </button>
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