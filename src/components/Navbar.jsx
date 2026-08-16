import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero-section')?.offsetHeight || window.innerHeight;
      setScrolled(window.scrollY > 20);
      setIsHeroSection(window.scrollY < heroHeight - 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'About',          href: '#about' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Core Values',    href: '#core-values' },
    { name: 'Our Ventures',   href: '#ventures' },
    { name: 'The Advantage',  href: '#advantage' },
    { name: 'Corporate Info', href: '#corporate-info' },
  ];

  const isDark = isHeroSection && !mobileOpen;
  const navClass = [
    'navbar',
    scrolled
      ? (isDark ? 'navbar--scrolled' : 'navbar--light')
      : (isDark ? 'navbar--transparent' : 'navbar--light'),
  ].join(' ');

  return (
    <>
      <header className={navClass}>
        <div className="container">
          <div className="navbar__inner">

            {/* Brand */}
            <a href="#" className="navbar__logo" onClick={() => setMobileOpen(false)}>
              <div className="navbar__logo-img-wrap" style={!isDark ? { background:'transparent', borderColor:'rgba(30,122,86,0.25)' } : {}}>
                <img src="/logo.jpeg" alt="Olynto LLP" className="navbar__logo-img" />
              </div>
              <div className="navbar__logo-text">
                <span className={`navbar__logo-name${!isDark ? ' navbar__logo-name--dark' : ''}`}>
                  OLYNT0
                </span>
                <span className={`navbar__logo-llp${!isDark ? ' navbar__logo-llp--dark' : ''}`}>
                  LLP
                </span>
              </div>
            </a>

            {/* Desktop links */}
            <nav aria-label="Main navigation">
              <ul className="navbar__links" style={{ listStyle: 'none', display:'flex', gap: '4px' }}>
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className={`navbar__link${!isDark ? ' navbar__link--dark' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA + Hamburger */}
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <a
                href="#corporate-info"
                className={`navbar__cta${!isDark ? ' navbar__cta--dark' : ''}`}
                style={{ display:'none' }}
                id="navbar-cta-desktop"
              >
                Corporate File <ArrowUpRight size={13} />
              </a>

              <button
                className={`navbar__hamburger${!isDark ? ' navbar__hamburger--dark' : ''}`}
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop CTA — injected via CSS media query trick */}
      <style>{`
        @media (min-width: 1024px) {
          #navbar-cta-desktop { display: inline-flex !important; }
          .navbar__hamburger   { display: none !important; }
        }
      `}</style>

      {/* Mobile overlay */}
      <nav className={`navbar__mobile-menu${mobileOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            <span>{link.name}</span>
            <span className="navbar__mobile-link-num">0{i + 1}</span>
          </a>
        ))}
        <a
          href="#corporate-info"
          className="navbar__mobile-cta"
          onClick={() => setMobileOpen(false)}
        >
          Corporate File <ArrowUpRight size={14} />
        </a>
      </nav>
    </>
  );
}
