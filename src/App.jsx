import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVideoHero from './components/AboutVideoHero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import GroupOfCompanies from './components/GroupOfCompanies';
import Advantage from './components/Advantage';
import LogoIntro from './components/LogoIntro';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import Footer from './components/Footer';
import VenturesPage from './components/VenturesPage';

export default function App() {
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('olynto-intro-complete') === 'true';
  });

  const currentPath = window.location.pathname;

  const isHomePage =
    currentPath === '/' ||
    currentPath === '';

  const isAboutPage =
    currentPath === '/about';

  const isContactPage =
    currentPath === '/contact-us';

  const isCareersPage =
    currentPath === '/careers';

  const isVenturesPage =
    currentPath === '/ventures';

  const isInternalPage =
    currentPath === '/about' ||
    currentPath === '/contact-us' ||
    currentPath === '/careers' ||
    currentPath === '/ventures';

  return (
    <>
      {/* Intro animation only on homepage */}
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

        {/* =================================================
            PAGE CONTENT
           ================================================= */}

        {isAboutPage ? (
          <main>
            <AboutVideoHero />
            <About />
            <VisionMission />
            <CoreValues />
          </main>
        ) : isContactPage ? (
          <main>
            <ContactUs />
          </main>
        ) : isCareersPage ? (
          <main>
            <Careers />
          </main>
        ) : isVenturesPage ? (
          <main>
            <VenturesPage />
          </main>
        ) : (
          <main>
            <Hero />
            <Advantage />
          </main>
        )}

        <Footer />

      </div>
    </>
  );
}