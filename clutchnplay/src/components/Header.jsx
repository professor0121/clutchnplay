'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Gamepad2, Bell, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

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
                    
                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</Link>
                        <Link href="/games" className="text-gray-300 hover:text-white transition-colors">Games</Link>
                        <Link href="/leaderboard" className="text-gray-300 hover:text-white transition-colors">Leaderboard</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                    </div>
                    
                    {/* Desktop Icons / CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-white p-2">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                            Join Now
                        </button>
                    </div>

                    {/* Mobile menu button and notification */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button className="text-gray-300 hover:text-white p-2">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        <Link 
                            href="/tournaments" 
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Tournaments
                        </Link>
                        <Link 
                            href="/games" 
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Games
                        </Link>
                        <Link 
                            href="/leaderboard" 
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Leaderboard
                        </Link>
                        <Link 
                            href="/about" 
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            className="block text-gray-300 hover:text-white transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                        <button 
                            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold mt-4"
                            onClick={closeMobileMenu}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;