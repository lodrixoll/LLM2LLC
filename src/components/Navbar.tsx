import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-10">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a className="text-2xl font-bold text-gray-900" href="#">LLM2LLC</a>
                <div className="space-x-4">
                    <Link href="/" passHref>
                        <span className="text-gray-700 hover:text-gray-900">Home</span>
                    </Link>
                    <Link href="/features" passHref>
                        <span className="text-gray-700 hover:text-gray-900">Features</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="text-gray-700 hover:text-gray-900">Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;