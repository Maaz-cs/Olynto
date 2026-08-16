import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Layers, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const statsRef = useRef(null);

  // Reveal on mount
  useEffect(() => {
    const el = statsRef.current;
    if (el) {
      const items = el.querySelectorAll('.hero__stat');
      items.forEach((item, i) => {
        item.style.transitionDelay = `${0.55 + i * 0.1}s`;
      });
    }
  }, []);

  const stats = [
    {
      label: 'Operating Model',
      icon: <Layers size={14} />,
      value: 'House-of-Brands',
      sub: 'One parent, multiple ventures',
    },
    {
      label: 'Portfolio',
      icon: <Compass size={14} />,
      value: '3 Ventures',
      sub: 'Active & in development',
    },
    {
      label: 'Incorporated',
      icon: <ShieldCheck size={14} />,
      value: '5 Dec 2025',
      sub: 'LLP Act, 2008 · Karnataka',
    },
  ];

  const sectors = ['Agriculture', 'Commerce', 'Education', 'Technology'];

  return (
    <section id="hero-section" className="hero">
      {/* Background layers */}
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__content">
        <div className="container">
          <div style={{ maxWidth: '840px' }}>

            {/* Badge */}
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Founder-Led Business Group &nbsp;·&nbsp; Karnataka, India
            </div>

            {/* Main headline */}
            <h1 className="hero__headline">
              Building{' '}
              <span className="hero__headline-accent">Ventures</span>
              <br />
              That Last.
            </h1>

            {/* Tagline */}
            <p className="hero__tagline">
              "Innovating Today. Empowering Tomorrow."
            </p>

            {/* Sector pills */}
            <div className="hero__sectors">
              {sectors.map((s, i) => (
                <span key={i} className="hero__sector-pill">
                  <span className="hero__sector-pill-icon" />
                  {s}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="hero__cta-group">
              <a href="#ventures" className="btn-hero-primary">
                Explore Our Ventures
                <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-hero-secondary">
                Enterprise Overview
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero__stats" ref={statsRef}>
              {stats.map((s, i) => (
                <div key={i} className="hero__stat">
                  <div className="hero__stat-label">
                    {s.icon}
                    {s.label}
                  </div>
                  <div className="hero__stat-value">{s.value}</div>
                  <div className="hero__stat-sub">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <ChevronDown size={14} style={{ marginTop: 4, opacity: 0.5 }} />
      </div>
    </section>
  );
}
