import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Catalog', href: '#catalog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-2xl shadow-lg shadow-black z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-4 pb-1">
          <div className="flex items-center space-x-3 relative">
            {/* <div className="bg-gradient-to-r from-blue-800 to-orange-500 p-2 rounded-lg">
              <Palette className="h-8 w-8 text-white" />
            </div> */}
            <div className=''>
              <h1 className="text-2xl font-bold text-gray-900 font-dancing ml-8 lg:ml-0 ">Shree Radha Krishna</h1>
              <img src="/assets/images/logo2.png" alt="" className='h-20  w-48 absolute -top-2 lg:-left-9' />
              <p className="text-xs  text-gray-600 mt-2 ml-8 lg:ml-0">Interior "N" Exterior Painting Group</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/admin"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/admin"
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;