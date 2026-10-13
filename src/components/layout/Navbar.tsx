import React, { useState, useEffect } from 'react';
import { FileDown, FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'How I Build', href: '#specializations', id: 'specializations' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-sm shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-[#080b12] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-cyan-400 text-sm group-hover:scale-110 transition-transform">
                MA
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
              Mohamed Aashik I
            </span>
            <span className="text-[11px] font-mono text-cyan-400/90 hidden sm:block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Center Recruiter Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 text-[11px] font-medium">Open to Opportunities</span>
          <span className="text-slate-600">·</span>
          <span className="text-cyan-400 font-mono text-[11px]">2026 CSBS Grad</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/70 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10 shadow-sm border border-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Contact */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            View Resume
          </button>
          <a
            href={personalInfo.resumeFilePath}
            download={personalInfo.resumeFileName}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Download PDF directly"
          >
            <FileDown className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1"
            aria-label="View Resume"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d15]/95 border-b border-slate-800 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300">Open to Opportunities · 2026 Grad</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume?.();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>
              <a
                href={personalInfo.resumeFilePath}
                download={personalInfo.resumeFileName}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 flex items-center justify-center"
                title="Download PDF"
              >
                <FileDown className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 rounded-xl text-xs font-semibold bg-slate-900/60 border border-slate-800 text-slate-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
