import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import GroupOfCompanies from './components/GroupOfCompanies';
import Advantage from './components/Advantage';
import CorporateInfo from './components/CorporateInfo';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('olynto-theme');

      if (savedTheme === 'dark') {
        return 'dark';
      }

      return 'light';
    } catch (error) {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('olynto-theme', theme);
    } catch (error) {
      // localStorage may be unavailable; theme still works normally
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        transition:
          'background-color 300ms ease, color 300ms ease',
      }}
    >
      <Navbar
        theme={theme}
        onThemeToggle={toggleTheme}
      />

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