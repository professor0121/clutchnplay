'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, Bell } from 'lucide-react';

const Header = () => {
    return (
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/home">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">GameArena</span>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</Link>
                        <Link href="#games" className="text-gray-300 hover:text-white transition-colors">Games</Link>
                        <Link href="#leaderboard" className="text-gray-300 hover:text-white transition-colors">Leaderboard</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contect Us</Link>
                    </div>

                    {/* Icons / CTA */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-white p-2">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
