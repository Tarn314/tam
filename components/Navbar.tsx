import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, LogOut, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.rooms, path: '/rooms' },
    { name: t.nav.booking, path: '/booking' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-neutral-900/95 backdrop-blur-sm border-b border-gold-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-serif text-2xl font-bold tracking-wider text-gold-500 group-hover:text-gold-400 transition-colors">
              RICHCHOI
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">{t.nav.subtitle}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase font-medium transition-colors ${
                  isActive(link.path) ? 'text-gold-400' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 border border-neutral-700 rounded hover:border-gold-500 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-wider"
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'VI' : 'EN'}</span>
            </button>

            {user ? (
              <div className="flex items-center space-x-4 pl-4 border-l border-neutral-700">
                <span className="text-sm text-gold-200 hidden lg:inline">{t.nav.welcome}, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors"
                  title={t.nav.logout}
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-white text-sm uppercase tracking-wider font-semibold transition-colors duration-300"
              >
                {t.nav.login}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 border border-neutral-700 rounded text-xs font-bold uppercase tracking-wider text-gold-500"
            >
              <span>{language === 'en' ? 'VI' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gold-500 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-neutral-800 text-gold-400'
                    : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-800 mt-4">
              {user ? (
                <div className="flex items-center justify-between px-3">
                  <span className="text-gold-200">{user.name}</span>
                  <button onClick={logout} className="text-neutral-400">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center w-full px-4 py-3 bg-gold-600 text-white uppercase tracking-wider font-semibold"
                >
                  {t.nav.login}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;