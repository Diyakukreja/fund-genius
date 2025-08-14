import React, { useState } from 'react';
import { TrendingUp, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src='./logo.jpg' className="rounded-3xl h-11 w-11 text-blue-400" />
              <span className="text-xl font-bold">Fund Genius</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner in financial markets. Get real-time data, expert analysis, and make informed investment decisions with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <a href='https://www.facebook.com/people/Fund-Genius/100091962750770/?mibextid=LQQJ4d'><Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href='https://www.threads.com/@fundgenius'><Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a><Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href='https://www.youtube.com/@FundGenius'><Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
              <a href='https://www.instagram.com/fundgenius'><Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Markets</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">US Markets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Global Markets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commodities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Currencies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Crypto</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Subscribe to the Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest market updates and financial news delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contact Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Fund Genius. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;