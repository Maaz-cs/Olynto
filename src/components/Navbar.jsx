import React, { useEffect, useState } from 'react';

import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  Search,
  Home,
} from 'lucide-react';

export default function Navbar() {
  /* =========================================================
     CURRENT PAGE
     ========================================================= */

  const currentPath = window.location.pathname;

  const isHomePage =
    currentPath === '/' ||
    currentPath === '';

  const isInternalPage =
    currentPath === '/contact-us' ||
    currentPath === '/careers';

  /* =========================================================
     STATE
     ========================================================= */

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHeroSection, setIsHeroSection] = useState(true);

  // White + Gold is the default theme.
  const [theme, setTheme] = useState('light');

  /* =========================================================
     THEME INITIALIZATION
     ========================================================= */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('olynto-theme');

    const initialTheme =
      savedTheme === 'dark'
        ? 'dark'
        : 'light';

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

      /*
       * Internal pages such as Careers and Contact
       * do not have a hero-section.
       *
       * Therefore, don't allow them to become
       * transparent hero navigation.
       */

      if (isInternalPage) {
        setScrolled(true);
        setIsHeroSection(false);
        return;
      }

      const heroHeight =
        hero?.offsetHeight ||
        window.innerHeight;

      setScrolled(
        window.scrollY > 20
      );

      setIsHeroSection(
        window.scrollY <
          heroHeight - 80
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
  }, [isInternalPage]);

  /* =========================================================
     MOBILE MENU BODY LOCK
     ========================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || searchOpen
        ? 'hidden'
        : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [
    mobileOpen,
    searchOpen,
  ]);

  /* =========================================================
     SEARCH KEYBOARD SHORTCUT
     ========================================================= */

  useEffect(() => {
    const handleKeyboard = (event) => {
      // Ctrl + K / Cmd + K
      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault();

        setSearchOpen(true);
        setMobileOpen(false);

        setTimeout(() => {
          document
            .querySelector(
              '.navbar-search__input'
            )
            ?.focus();
        }, 50);
      }

      // Escape
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyboard
      );
    };
  }, []);

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
      href: '/ventures',
    },
    {
      name: 'The Advantage',
      href: '#advantage',
    },
    {
      name: 'Careers',
      href: '/careers',
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
    },
  ];

  /* =========================================================
     SEARCH DATA
     ========================================================= */

  const searchItems = [
    {
      title: 'About Olynto',
      keywords:
        'about olynto company group enterprise profile house of brands',
      href: '#about',
      type: 'Section',
      number: '01',
    },
    {
      title: 'Vision & Mission',
      keywords:
        'vision mission purpose direction principles',
      href: '#vision-mission',
      type: 'Section',
      number: '02',
    },
    {
      title: 'Core Values',
      keywords:
        'values integrity customer ownership sustainability speed standard',
      href: '#core-values',
      type: 'Section',
      number: '03',
    },
    {
      title: 'Our Ventures',
      keywords:
        'ventures businesses companies agriculture commerce education technology noqkart iam root elevate',
      href: '/ventures',
      type: 'Section',
      number: '04',
    },
    {
      title: 'The Advantage',
      keywords:
        'advantage strategy competitive advantage olynto growth',
      href: '#advantage',
      type: 'Section',
      number: '05',
    },
    {
      title: 'Contact Us',
      keywords:
        'contact enquiry business partnership connect email',
      href: '/contact-us',
      type: 'Page',
      number: '06',
    },
    {
      title: 'Careers',
      keywords:
        'careers jobs employment join us opportunities work openings',
      href: '/careers',
      type: 'Page',
      number: '07',
    },
  ];

  /* =========================================================
     SEARCH RESULTS
     ========================================================= */

  const normalizedQuery =
    searchQuery
      .trim()
      .toLowerCase();

  const filteredSearchItems =
    normalizedQuery.length === 0
      ? searchItems
      : searchItems.filter((item) => {
          const searchableText =
            `${item.title} ${item.keywords}`
              .toLowerCase();

          return searchableText.includes(
            normalizedQuery
          );
        });

  /* =========================================================
     SEARCH NAVIGATION
     ========================================================= */

  const handleSearchNavigation = (
    href
  ) => {
    setSearchOpen(false);
    setSearchQuery('');
    setMobileOpen(false);

    if (href.startsWith('#')) {
      const element =
        document.querySelector(href);

      /*
       * If we are already on an internal page,
       * return to homepage before trying to find
       * the section.
       */

      if (!isHomePage) {
        window.location.href =
          `/${href}`;
        return;
      }

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 50);
      }

      return;
    }

    window.location.href = href;
  };

  /* =========================================================
     NAVBAR APPEARANCE
     ========================================================= */

  /*
   * Internal pages should NEVER use the transparent
   * hero navbar.
   */

  const heroNavbar =
    !isInternalPage &&
    !scrolled &&
    isHeroSection &&
    !mobileOpen &&
    !searchOpen;

  /*
   * Determine text color based on:
   * - homepage hero
   * - internal page
   * - selected theme
   */

  const navbarTextColor =
    heroNavbar
      ? '#ffffff'
      : theme === 'dark'
        ? '#ffffff'
        : '#111111';

  const navClass = [
    'navbar',

    heroNavbar
      ? 'navbar--transparent'
      : 'navbar--scrolled',

    isInternalPage
      ? 'navbar--internal'
      : '',

    theme === 'dark'
      ? 'navbar--theme-dark'
      : 'navbar--theme-light',
  ]
    .filter(Boolean)
    .join(' ');

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
              href="/"
              className="navbar__logo"
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(false);
              }}
            >

              <div
                className="navbar__logo-img-wrap"
              >

                <img
                  src="/olynto1%20Logo.jpg"
                  alt="Olynto LLP"
                  className="navbar__logo-img"
                />

              </div>

              <div className="navbar__logo-text">

                <span
                  className="navbar__logo-name"
                  style={{
                    color:
                      navbarTextColor,
                  }}
                >
                  OLYNTO
                </span>

                <span
                  className="navbar__logo-llp"
                  style={{
                    color:
                      navbarTextColor,
                  }}
                >
                  LLP
                </span>

              </div>

            </a>

            {/* =================================================
                DESKTOP LINKS
               ================================================= */}

            <nav
              aria-label="Main navigation"
            >

              <ul
                className="navbar__links"
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  gap: '4px',
                }}
              >

                {navLinks.map(
                  (link) => (

                    <li
                      key={link.href}
                    >

                      <a
                        href={link.href}
                        className="navbar__link"
                        style={{
                          color:
                            navbarTextColor,
                        }}
                        onClick={() =>
                          setMobileOpen(
                            false
                          )
                        }
                      >
                        {link.name}
                      </a>

                    </li>

                  )
                )}

              </ul>

            </nav>

            {/* =================================================
                RIGHT SIDE CONTROLS
               ================================================= */}

            <div className="navbar__actions">

              {/* =================================================
                  HOME ICON
                 ================================================= */}

              {!isHomePage && (
  <a
    href="/"
    className="navbar__home-button"
    aria-label="Home"
    title="Home"
    onClick={() => {
      setMobileOpen(false);
      setSearchOpen(false);
    }}
    style={{
      color: theme === 'dark' ? '#ffffff' : '#111111',
    }}
  >
    <Home size={18}
    strokeWidth={2}
     />
  </a>
)}

              {/* =================================================
                  SEARCH
                 ================================================= */}

              <button
                type="button"
                className="navbar__search-button"
                style={{
                  color:
                    navbarTextColor,
                }}
                onClick={() => {
                  setSearchOpen(true);
                  setMobileOpen(false);

                  setTimeout(() => {
                    document
                      .querySelector(
                        '.navbar-search__input'
                      )
                      ?.focus();
                  }, 50);
                }}
                aria-label="Search"
                title="Search"
              >
                <Search size={18} />
              </button>

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
                  MOBILE MENU BUTTON
                 ================================================= */}

              <button
                type="button"
                className="navbar__hamburger"
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
                aria-expanded={
                  mobileOpen
                }
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

          .navbar__hamburger {
            display: none !important;
          }

          .navbar__theme-toggle {
            display: flex !important;
          }

          .navbar__search-button {
            display: flex !important;
          }

        }

        @media (max-width: 1023px) {

          .navbar__theme-toggle {
            display: flex !important;
          }

          .navbar__search-button {
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

        {/* Home only on internal pages */}

        {!isHomePage && (
          <a
            href="/"
            className="navbar__mobile-link"
            onClick={() =>
              setMobileOpen(false)
            }
          >

            <span className="navbar__mobile-link-num">
              <Home size={15} />
            </span>

          </a>
        )}

        {navLinks.map(
          (link, index) => (

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
                {String(index + 1).padStart(
                  2,
                  '0'
                )}
              </span>

            </a>

          )
        )}

        {/* Mobile search */}

        <button
          type="button"
          className="navbar__mobile-search"
          onClick={() => {
            setSearchOpen(true);
            setMobileOpen(false);

            setTimeout(() => {
              document
                .querySelector(
                  '.navbar-search__input'
                )
                ?.focus();
            }, 50);
          }}
        >

          <Search size={16} />

          <span>
            Search
          </span>

        </button>

        {/* Mobile theme switch */}

        <button
          type="button"
          className="navbar__mobile-theme"
          onClick={toggleTheme}
        >

          {theme === 'light' ? (
            <>
              <Moon size={16} />
              <span>
                Dark Mode
              </span>
            </>
          ) : (
            <>
              <Sun size={16} />
              <span>
                Light Mode
              </span>
            </>
          )}

        </button>

      </nav>

      {/* =======================================================
          SEARCH OVERLAY
         ======================================================= */}

      {searchOpen && (

        <div
          className="navbar-search"
          role="dialog"
          aria-modal="true"
          aria-label="Search Olynto"
        >

          <div className="navbar-search__backdrop" />

          <div className="navbar-search__panel">

            {/* Search header */}

            <div className="navbar-search__header">

              <div className="navbar-search__brand">

                <Search size={19} />

                <span>
                  SEARCH OLYNTO
                </span>

              </div>

              <button
                type="button"
                className="navbar-search__close"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                aria-label="Close search"
              >
                <X size={20} />
              </button>

            </div>

            {/* Search input */}

            <div className="navbar-search__input-wrap">

              <Search size={22} />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="What are you looking for?"
                className="navbar-search__input"
                autoComplete="off"
              />

              <kbd>
                ESC
              </kbd>

            </div>

            {/* Results */}

            <div className="navbar-search__results">

              {normalizedQuery.length === 0 && (
                <div className="navbar-search__label">
                  QUICK LINKS
                </div>
              )}

              {normalizedQuery.length > 0 &&
                filteredSearchItems.length > 0 && (
                  <div className="navbar-search__label">
                    SEARCH RESULTS
                  </div>
                )}

              {filteredSearchItems.map(
                (item) => (

                  <button
                    key={item.href}
                    type="button"
                    className="navbar-search__result"
                    onClick={() =>
                      handleSearchNavigation(
                        item.href
                      )
                    }
                  >

                    <span className="navbar-search__result-number">
                      {item.number}
                    </span>

                    <span className="navbar-search__result-content">

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.type}
                      </small>

                    </span>

                    <ArrowUpRight
                      size={17}
                      className="navbar-search__result-arrow"
                    />

                  </button>

                )
              )}

              {normalizedQuery.length > 0 &&
                filteredSearchItems.length === 0 && (

                  <div className="navbar-search__empty">

                    <Search size={28} />

                    <h3>
                      No results found
                    </h3>

                    <p>
                      Try searching for About,
                      Mission, Values,
                      Ventures, Advantage,
                      Careers, or Contact.
                    </p>

                  </div>

                )}

            </div>

            {/* Footer */}

            <div className="navbar-search__footer">

              <span>
                Search across Olynto
              </span>

              <span>
                <kbd>CTRL</kbd>
                <kbd>K</kbd>
                to open
              </span>

            </div>

          </div>

        </div>

      )}

    </>
  );
}