import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import GroupOfCompanies from './components/GroupOfCompanies';
import Advantage from './components/Advantage';
import CorporateInfo from './components/CorporateInfo';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'var(--font-body)' }}>
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
  );
}
