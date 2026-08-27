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
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const isContactPage =
    window.location.pathname === '/contact-us';

  return (
    <>
      {!introComplete && !isContactPage && (
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

        {isContactPage ? (
          <main>
            <ContactUs />
          </main>
        ) : (
          <main>
            <Hero />
            <About />
            <VisionMission />
            <CoreValues />
            <GroupOfCompanies />
            <Advantage />
          </main>
        )}

        <Footer />
      </div>
    </>
  );
}