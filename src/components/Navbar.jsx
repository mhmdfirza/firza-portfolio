import { useState } from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="font-mono font-semibold text-lg tracking-tight">
          <span className="text-accent">&lt;</span>Dev<span className="text-accent">/&gt;</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-white/70 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Nav (compact) */}
        <div className="md:hidden flex gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs text-white/50 hover:text-accent transition-colors"
              title={link.label}
            >
              {link.label.charAt(0)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
