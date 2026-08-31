import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
  const [introComplete, setIntroComplete] = useState(false);

  const currentPath = window.location.pathname;

  const isHomePage =
    currentPath === '/' ||
    currentPath === '';

  const isContactPage =
    currentPath === '/contact-us';

  const isCareersPage =
    currentPath === '/careers';

  const isVenturesPage =
    currentPath === '/ventures';

  const isInternalPage =
    currentPath === '/contact-us' ||
  currentPath === '/careers' ||
  currentPath === '/ventures';

  return (
    <>
      {/* Intro animation only on homepage */}
      {!introComplete && !isInternalPage && (
        <LogoIntro
          onComplete={() => setIntroComplete(true)}
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

        {isContactPage ? (
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
    <About />
    <VisionMission />
    <CoreValues />
    <Advantage />
  </main>
)}

        <Footer />

      </div>
    </>
  );
}