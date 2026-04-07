import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#2a2a3a]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight"
          >
            SB
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-[#8b8aa0] hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Resume Download */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/data/Shivani_resume (1).pdf"
              download="Shivani_Kumari_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#8b8aa0] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#2a2a3a] py-4 bg-[#0a0a0f]/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-[#8b8aa0] hover:text-white py-3 px-2 text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/data/Shivani_resume (1).pdf"
                download="Shivani_Kumari_Resume.pdf"
                className="flex items-center gap-2 mt-2 px-3 py-2 text-sm font-medium rounded-lg border border-violet-500/50 text-violet-300 w-fit"
              >
                <Download size={14} />
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
