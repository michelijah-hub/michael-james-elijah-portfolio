import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Brand title, single text element */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4-6 nav links, 1-2 word labels, single line */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium text-slate-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 relative hover:text-white whitespace-nowrap ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700/80 transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Email Me</span>
          </a>

          <a
            href="#projects"
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            View Projects
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-slate-800 px-4 py-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs text-blue-400 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
