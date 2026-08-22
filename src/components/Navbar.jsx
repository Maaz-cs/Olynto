import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  // White + Gold is the default theme.
  const [theme, setTheme] = useState('light');

  /* =========================================================
     THEME INITIALIZATION
     ========================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem('olynto-theme');

    const initialTheme =
      savedTheme === 'dark' ? 'dark' : 'light';

    setTheme(initialTheme);

    document.documentElement.setAttribute(
      'data-theme',
      initialTheme
    );
  }, []);

  /* =========================================================
     SCROLL HANDLER
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById('hero-section');

      const heroHeight =
        hero?.offsetHeight || window.innerHeight;

      setScrolled(window.scrollY > 20);

      setIsHeroSection(
        window.scrollY < heroHeight - 80
      );
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     MOBILE MENU BODY LOCK
     ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* =========================================================
     THEME TOGGLE
     ========================================================= */

  const toggleTheme = () => {
    const nextTheme =
      theme === 'light'
        ? 'dark'
        : 'light';

    setTheme(nextTheme);

    document.documentElement.setAttribute(
      'data-theme',
      nextTheme
    );

    localStorage.setItem(
      'olynto-theme',
      nextTheme
    );
  };

  /* =========================================================
     NAVIGATION LINKS
     ========================================================= */

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

  /* =========================================================
     NAVBAR APPEARANCE
     ========================================================= */

  const heroNavbar =
    isHeroSection && !mobileOpen;

  const navClass = [
    'navbar',

    scrolled
      ? (
          heroNavbar
            ? 'navbar--scrolled'
            : 'navbar--light'
        )
      : (
          heroNavbar
            ? 'navbar--transparent'
            : 'navbar--light'
        ),

    theme === 'dark'
      ? 'navbar--theme-dark'
      : 'navbar--theme-light',
  ].join(' ');

  return (
    <>
      {/* =====================================================
          NAVBAR
         ===================================================== */}

      <header className={navClass}>
        <div className="container">

          <div className="navbar__inner">

            {/* =================================================
                LOGO
               ================================================= */}

            <a
              href="#"
              className="navbar__logo"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <div
                className="navbar__logo-img-wrap"
                style={
                  !heroNavbar
                    ? {
                        background: 'transparent',
                        borderColor:
                          'rgba(30, 122, 86, 0.25)',
                      }
                    : {}
                }
              >
                <img
                  src="/olynto1%20Logo.jpg"
                  alt="Olynto LLP"
                  className="navbar__logo-img"
                />
              </div>

              <div className="navbar__logo-text">

                <span
                  className={
                    `navbar__logo-name${
                      !heroNavbar
                        ? ' navbar__logo-name--dark'
                        : ''
                    }`
                  }
                >
                  OLYNTO
                </span>

                <span
                  className={
                    `navbar__logo-llp${
                      !heroNavbar
                        ? ' navbar__logo-llp--dark'
                        : ''
                    }`
                  }
                >
                  LLP
                </span>

              </div>
            </a>

            {/* =================================================
                DESKTOP LINKS
               ================================================= */}

            <nav aria-label="Main navigation">
              <ul
                className="navbar__links"
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  gap: '4px',
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={
                        `navbar__link${
                          !heroNavbar
                            ? ' navbar__link--dark'
                            : ''
                        }`
                      }
                      onClick={() =>
                        setMobileOpen(false)
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* =================================================
                RIGHT SIDE CONTROLS
               ================================================= */}

            <div className="navbar__actions">

              {/* =================================================
                  THEME SWITCH
                 ================================================= */}

              <button
                type="button"
                className="navbar__theme-toggle"
                onClick={toggleTheme}
                aria-label={
                  theme === 'light'
                    ? 'Switch to dark mode'
                    : 'Switch to light mode'
                }
                title={
                  theme === 'light'
                    ? 'Switch to dark mode'
                    : 'Switch to light mode'
                }
              >
                <span className="navbar__theme-toggle-track">
                  <span className="navbar__theme-toggle-thumb">
                    {theme === 'light' ? (
                      <Sun size={14} />
                    ) : (
                      <Moon size={14} />
                    )}
                  </span>
                </span>
              </button>

              {/* =================================================
                  CORPORATE FILE
                 ================================================= */}

              <a
                href="#corporate-info"
                className={
                  `navbar__cta${
                    !heroNavbar
                      ? ' navbar__cta--dark'
                      : ''
                  }`
                }
                id="navbar-cta-desktop"
              >
                Corporate File
                <ArrowUpRight size={13} />
              </a>

              {/* =================================================
                  MOBILE MENU BUTTON
                 ================================================= */}

              <button
                type="button"
                className={
                  `navbar__hamburger${
                    !heroNavbar
                      ? ' navbar__hamburger--dark'
                      : ''
                  }`
                }
                onClick={() =>
                  setMobileOpen(
                    (value) => !value
                  )
                }
                aria-label={
                  mobileOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
                aria-expanded={mobileOpen}
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

      {/* =======================================================
          DESKTOP RESPONSIVE RULES
         ======================================================= */}

      <style>{`
        @media (min-width: 1024px) {
          #navbar-cta-desktop {
            display: inline-flex !important;
          }

          .navbar__hamburger {
            display: none !important;
          }

          .navbar__theme-toggle {
            display: flex !important;
          }
        }

        @media (max-width: 1023px) {
          #navbar-cta-desktop {
            display: none !important;
          }

          .navbar__theme-toggle {
            display: flex !important;
          }
        }
      `}</style>

      {/* =======================================================
          MOBILE MENU
         ======================================================= */}

      <nav
        className={
          `navbar__mobile-menu${
            mobileOpen
              ? ' is-open'
              : ''
          }`
        }
        aria-label="Mobile navigation"
      >
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <span>
              {link.name}
            </span>

            <span className="navbar__mobile-link-num">
              {String(index + 1).padStart(2, '0')}
            </span>
          </a>
        ))}

        <a
          href="#corporate-info"
          className="navbar__mobile-cta"
          onClick={() =>
            setMobileOpen(false)
          }
        >
          Corporate File
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile theme switch */}
        <button
          type="button"
          className="navbar__mobile-theme"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <>
              <Moon size={16} />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <Sun size={16} />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </nav>
    </>
  );
}