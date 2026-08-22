import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from 'lucide-react';

export default function Navbar({
  theme,
  onThemeToggle,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Vision & Mission',
      href: '#vision-mission',
    },
    {
      name: 'Core Values',
      href: '#core-values',
    },
    {
      name: 'Our Ventures',
      href: '#ventures',
    },
    {
      name: 'The Advantage',
      href: '#advantage',
    },
    {
      name: 'Corporate Info',
      href: '#corporate-info',
    },
  ];

  const isDark = theme === 'dark';

  const navClass = [
    'navbar',
    scrolled
      ? 'navbar--scrolled'
      : 'navbar--transparent',
  ].join(' ');

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleThemeToggle = () => {
    if (typeof onThemeToggle === 'function') {
      onThemeToggle();
    }
  };

  return (
    <>
      {/* ============================================================
          NAVBAR
          ============================================================ */}

      <header className={navClass}>
        <div className="container">
          <div className="navbar__inner">

            {/* Brand */}

            <a
              href="#"
              className="navbar__logo"
              onClick={closeMobileMenu}
              aria-label="Olynto LLP home"
            >
              <div className="navbar__logo-img-wrap">
                <img
                  src="/olynto%20Logo.jpg"
                  alt="Olynto LLP"
                  className="navbar__logo-img"
                />
              </div>

              <div className="navbar__logo-text">
                <span className="navbar__logo-name">
                  OLYNTO
                </span>

                <span className="navbar__logo-llp">
                  LLP
                </span>
              </div>
            </a>


            {/* Desktop Navigation */}

            <nav aria-label="Main navigation">
              <ul className="navbar__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="navbar__link"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>


            {/* Actions */}

            <div
              className="navbar__actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >

              {/* Theme Toggle */}

              <button
                type="button"
                className="theme-toggle"
                onClick={handleThemeToggle}
                aria-label={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                title={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
              >
                <span className="theme-toggle__track">
                  <span
                    className={
                      `theme-toggle__thumb${isDark
                        ? ' theme-toggle__thumb--dark'
                        : ''
                      }`
                    }
                  >
                    {isDark ? (
                      <Moon
                        size={13}
                        strokeWidth={2.2}
                      />
                    ) : (
                      <Sun
                        size={13}
                        strokeWidth={2.2}
                      />
                    )}
                  </span>
                </span>
              </button>


              {/* Corporate CTA */}

              <a
                href="#corporate-info"
                className="navbar__cta"
                id="navbar-cta-desktop"
                onClick={closeMobileMenu}
              >
                Corporate File
                <ArrowUpRight size={13} />
              </a>


              {/* Mobile Menu Button */}

              <button
                type="button"
                className="navbar__hamburger"
                onClick={() =>
                  setMobileOpen(
                    (currentValue) =>
                      !currentValue
                  )
                }
                aria-label={
                  mobileOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>
          </div>
        </div>
      </header>


      {/* ============================================================
          MOBILE NAVIGATION
          ============================================================ */}

      <nav
        id="mobile-navigation"
        className={
          `navbar__mobile-menu${mobileOpen ? ' is-open' : ''
          }`
        }
        aria-label="Mobile navigation"
      >

        {/* Mobile appearance control */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px 16px',
            borderBottom:
              '1px solid var(--gold-border)',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
            }}
          >
            Appearance
          </span>

          <button
            type="button"
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label={
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            <span className="theme-toggle__track">
              <span
                className={
                  `theme-toggle__thumb${isDark
                    ? ' theme-toggle__thumb--dark'
                    : ''
                  }`
                }
              >
                {isDark ? (
                  <Moon
                    size={12}
                    strokeWidth={2.2}
                  />
                ) : (
                  <Sun
                    size={12}
                    strokeWidth={2.2}
                  />
                )}
              </span>
            </span>
          </button>
        </div>


        {/* Mobile links */}

        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMobileMenu}
          >
            <span>
              {link.name}
            </span>

            <span className="navbar__mobile-link-num">
              {String(index + 1).padStart(2, '0')}
            </span>
          </a>
        ))}


        {/* Mobile CTA */}

        <a
          href="#corporate-info"
          className="navbar__mobile-cta"
          onClick={closeMobileMenu}
        >
          Corporate File
          <ArrowUpRight size={14} />
        </a>

      </nav>
    </>
  );
}