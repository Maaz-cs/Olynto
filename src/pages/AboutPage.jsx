import React from 'react';

import AboutVideoHero from '../components/about/AboutVideoHero';
import About from '../components/about/About';
import VisionMission from '../components/vision-mission/VisionMission';
import CoreValues from '../components/home/CoreValues';

export default function AboutPage() {
  return (
    <main>
      <AboutVideoHero />
      <About />
      <VisionMission />
      <CoreValues />
    </main>
  );
}