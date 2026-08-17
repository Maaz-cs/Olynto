import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Compass,
  ShieldCheck,
  Sprout,
  ShoppingBag,
  GraduationCap,
  Cpu,
} from 'lucide-react';

export default function Hero() {
  const statsRef = useRef(null);

  // Reveal stats on mount
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

  const sectors = [
    'Agriculture',
    'Commerce',
    'Education',
    'Technology',
  ];

  const ventureNodes = [
    {
      id: '01',
      name: 'Agriculture',
      icon: <Sprout size={17} />,
      position: 'hero__ecosystem-node--agriculture',
    },
    {
      id: '02',
      name: 'Commerce',
      icon: <ShoppingBag size={17} />,
      position: 'hero__ecosystem-node--commerce',
    },
    {
      id: '03',
      name: 'Education',
      icon: <GraduationCap size={17} />,
      position: 'hero__ecosystem-node--education',
    },
    {
      id: '04',
      name: 'Technology',
      icon: <Cpu size={17} />,
      position: 'hero__ecosystem-node--technology',
    },
  ];

  return (
    <section id="hero-section" className="hero">

      {/* =========================================================
          BACKGROUND LAYERS
      ========================================================= */}
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="hero__content">

        <div className="container">

          <div className="hero__layout">

            {/* =====================================================
                LEFT SIDE — MAIN CONTENT
            ===================================================== */}
            <div className="hero__main">

              {/* Badge */}
              <div className="hero__badge">
                <span className="hero__badge-dot" />

                Founder-Led Business Group
                &nbsp;·&nbsp;
                Karnataka, India
              </div>

              {/* Main headline */}
              <h1 className="hero__headline">
                Building{' '}
                <span className="hero__headline-accent">
                  Ventures
                </span>
                <br />
                That Last.
              </h1>

              {/* Tagline */}
              <p className="hero__tagline">
                "Innovating Today. Empowering Tomorrow."
              </p>

              {/* Sector pills */}
              <div className="hero__sectors">
                {sectors.map((sector, index) => (
                  <span
                    key={index}
                    className="hero__sector-pill"
                  >
                    <span className="hero__sector-pill-icon" />
                    {sector}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="hero__cta-group">

                <a
                  href="#ventures"
                  className="btn-hero-primary"
                >
                  Explore Our Ventures
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#about"
                  className="btn-hero-secondary"
                >
                  Enterprise Overview
                </a>

              </div>

              {/* Stats */}
              <div
                className="hero__stats"
                ref={statsRef}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="hero__stat"
                  >

                    <div className="hero__stat-label">
                      {stat.icon}
                      {stat.label}
                    </div>

                    <div className="hero__stat-value">
                      {stat.value}
                    </div>

                    <div className="hero__stat-sub">
                      {stat.sub}
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* =====================================================
                RIGHT SIDE — OLYNTO VENTURE ECOSYSTEM
            ===================================================== */}
            <div className="hero__ecosystem">

              {/* Small heading */}
              <div className="hero__ecosystem-label">
                <span className="hero__ecosystem-label-line" />
                One Group · Multiple Ventures
              </div>

              {/* Ecosystem visual */}
              <div className="hero__ecosystem-visual">

                {/* Connecting lines */}
                <div className="hero__ecosystem-line hero__ecosystem-line--vertical" />

                <div className="hero__ecosystem-line hero__ecosystem-line--left" />

                <div className="hero__ecosystem-line hero__ecosystem-line--right" />

                <div className="hero__ecosystem-line hero__ecosystem-line--bottom" />

                {/* Decorative rings */}
                <div className="hero__ecosystem-ring hero__ecosystem-ring--outer" />
                <div className="hero__ecosystem-ring hero__ecosystem-ring--inner" />

                {/* Central Olynto node */}
                <div className="hero__ecosystem-center">

                  <div className="hero__ecosystem-center-glow" />

                  <div className="hero__ecosystem-center-inner">
                    <span className="hero__ecosystem-center-mark">
                      O
                    </span>

                    <span className="hero__ecosystem-center-name">
                      OLYNTO
                    </span>

                    <span className="hero__ecosystem-center-sub">
                      LLP
                    </span>
                  </div>

                </div>

                {/* Venture nodes */}
                {ventureNodes.map((node) => (
                  <div
                    key={node.id}
                    className={`hero__ecosystem-node ${node.position}`}
                  >

                    <div className="hero__ecosystem-node-icon">
                      {node.icon}
                    </div>

                    <div className="hero__ecosystem-node-content">

                      <span className="hero__ecosystem-node-id">
                        {node.id}
                      </span>

                      <span className="hero__ecosystem-node-name">
                        {node.name}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

              {/* Bottom description */}
              <div className="hero__ecosystem-caption">
                <span className="hero__ecosystem-caption-dot" />

                <span>
                  A unified group building focused businesses
                  across essential sectors.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <div className="hero__scroll-hint">

        <div className="hero__scroll-line" />

        <ChevronDown
          size={14}
          style={{
            marginTop: 4,
            opacity: 0.5,
          }}
        />

      </div>

    </section>
  );
}