'use client';

import React from 'react';
import { Gamepad2 } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">GameArena</span>
            </div>
            <p className="text-gray-400">The ultimate eSports tournament platform for competitive gaming.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Games</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Free Fire</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">BGMI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">COD Mobile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Valorant</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Forums</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Leaderboards</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GameArena. All rights reserved. Made for gamers, by gamers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
