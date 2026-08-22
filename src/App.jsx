import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import GroupOfCompanies from './components/GroupOfCompanies';
import Advantage from './components/Advantage';
import CorporateInfo from './components/CorporateInfo';
import LogoIntro from './components/LogoIntro';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
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

        <main>
          <Hero />
          <About />
          <VisionMission />
          <CoreValues />
          <GroupOfCompanies />
          <Advantage />
        </main>

        <CorporateInfo />
      </div>
    </>
  );
}