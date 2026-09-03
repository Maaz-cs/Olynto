import React, { useState } from 'react';

import Navbar from './components/layout/Navbar';
import LogoIntro from './components/home/LogoIntro';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import VenturesPage from './pages/VenturesPage';
import OurTeam from './pages/OurTeam';

import Footer from './components/layout/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('olynto-intro-complete') === 'true';
  });

  const currentPath = window.location.pathname;

  const isAboutPage = currentPath === '/about';
  const isContactPage = currentPath === '/contact-us';
  const isCareersPage = currentPath === '/careers';
  const isVenturesPage = currentPath === '/ventures';
  const isOurTeamPage = currentPath === '/our-team';

  const isInternalPage =
    isAboutPage ||
    isContactPage ||
    isCareersPage ||
    isVenturesPage ||
    isOurTeamPage;

  return (
    <>
      {!introComplete && !isInternalPage && (
        <LogoIntro
          onComplete={() => {
            setIntroComplete(true);
            sessionStorage.setItem(
              'olynto-intro-complete',
              'true'
            );
          }}
        />
      )}

      <div
        style={{
          minHeight: '100vh',
          background: 'var(--bg)',
          color: 'var(--text)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Navbar />

        {isAboutPage ? (
          <AboutPage />
        ) : isContactPage ? (
          <ContactPage />
        ) : isCareersPage ? (
          <CareersPage />
        ) : isVenturesPage ? (
          <VenturesPage />
        ) : isOurTeamPage ? (
          <OurTeam />
        ) : (
          <Home />
        )}

        <Footer />
      </div>
    </>
  );
}