import React from 'react';
import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to={`/`}>
            <div className="flex items-center space-x-2">
              <img src='./logo.jpg' className="h-10 w-10 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Fund Genius</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;