import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  ShoppingBag,
  GraduationCap,
  Cpu,
  ShieldCheck,
} from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty(
        '--hero-mouse-x',
        `${x * 16}px`
      );

      hero.style.setProperty(
        '--hero-mouse-y',
        `${y * 12}px`
      );
    };

    const resetPointer = () => {
      hero.style.setProperty('--hero-mouse-x', '0px');
      hero.style.setProperty('--hero-mouse-y', '0px');
    };

    hero.addEventListener(
      'pointermove',
      handlePointerMove,
      { passive: true }
    );

    hero.addEventListener(
      'pointerleave',
      resetPointer
    );

    return () => {
      hero.removeEventListener(
        'pointermove',
        handlePointerMove
      );

      hero.removeEventListener(
        'pointerleave',
        resetPointer
      );
    };
  }, []);

  const ventures = [
    {
      id: '01',
      name: 'Agriculture',
      description: 'Building practical businesses around agriculture.',
      icon: <Sprout size={17} />,
    },
    {
      id: '02',
      name: 'Commerce',
      description: 'Creating focused ventures for modern commerce.',
      icon: <ShoppingBag size={17} />,
    },
    {
      id: '03',
      name: 'Education',
      description: 'Developing opportunities through education.',
      icon: <GraduationCap size={17} />,
    },
    {
      id: '04',
      name: 'Technology',
      description: 'Building technology-led solutions for tomorrow.',
      icon: <Cpu size={17} />,
    },
  ];

  return (
    <section
      id="hero-section"
      className="hero hero--cinematic"
      ref={heroRef}
    >
      {/* Background */}
      <div className="hero__cinematic-media" aria-hidden="true">
  <video
    className="hero__cinematic-video"
    src="/hero.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    onError={(event) => {
      event.currentTarget.style.display = 'none';
    }}
  />

  <div className="hero__cinematic-video-overlay" />
</div>

      <div className="hero__cinematic-noise" />

      <div className="hero__cinematic-grid" />

      <div className="hero__cinematic-glow hero__cinematic-glow--one" />
      <div className="hero__cinematic-glow hero__cinematic-glow--two" />

      {/* Decorative vertical line */}
      <div className="hero__side-line hero__side-line--left" />
      <div className="hero__side-line hero__side-line--right" />

      {/* Main content */}
      <div className="hero__cinematic-content">
        <div className="container">

          {/* Top eyebrow */}
          <div className="hero__cinematic-eyebrow">
            <span className="hero__cinematic-eyebrow-line" />

            <span>
              OLYNTO LLP
            </span>

            <span className="hero__cinematic-eyebrow-dot" />

            <span>
              KARNATAKA · INDIA
            </span>
          </div>

          {/* Main headline */}
          <div className="hero__cinematic-heading">

            <div className="hero__heading-small">
              We build
            </div>

            <h1>
              <span className="hero__heading-line">
                Ventures
              </span>

              <span className="hero__heading-line hero__heading-line--accent">
                That Last.
              </span>
            </h1>

            <div className="hero__heading-mark">
              <span />
              <span />
              <span />
            </div>

          </div>

          {/* Supporting content */}
          <div className="hero__cinematic-bottom">

            <div className="hero__cinematic-description">

              <p className="hero__cinematic-tagline">
                Innovating Today.
                <br />
                Empowering Tomorrow.
              </p>

              <p className="hero__cinematic-copy">
                Olynto is a founder-led business group
                building focused ventures across essential
                sectors — with a long-term vision for
                sustainable growth.
              </p>

              <div className="hero__cinematic-actions">

                <a
                  href="#ventures"
                  className="hero__cinematic-primary"
                >
                  <span>
                    Explore Our Ventures
                  </span>

                  <ArrowRight size={16} />
                </a>

                <a
                  href="#about"
                  className="hero__cinematic-secondary"
                >
                  <span>
                    Enterprise Overview
                  </span>

                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>

            {/* Venture panel */}
            <div className="hero__venture-panel">

              <div className="hero__venture-panel-header">

                <div>
                  <span className="hero__venture-panel-kicker">
                    Our Ecosystem
                  </span>

                  <span className="hero__venture-panel-title">
                    One Group · Multiple Ventures
                  </span>
                </div>

                <span className="hero__venture-panel-count">
                  04
                </span>

              </div>

              <div className="hero__venture-list">

                {ventures.map((venture) => (
                  <a
                    href="#ventures"
                    className="hero__venture-item"
                    key={venture.id}
                  >

                    <div className="hero__venture-number">
                      {venture.id}
                    </div>

                    <div className="hero__venture-icon">
                      {venture.icon}
                    </div>

                    <div className="hero__venture-content">

                      <span className="hero__venture-name">
                        {venture.name}
                      </span>

                      <span className="hero__venture-description">
                        {venture.description}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={15}
                      className="hero__venture-arrow"
                    />

                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom metrics */}
          <div className="hero__cinematic-metrics">

            <div className="hero__metric">

              <span className="hero__metric-icon">
                <ShieldCheck size={14} />
              </span>

              <div>
                <span className="hero__metric-label">
                  Incorporated
                </span>

                <span className="hero__metric-value">
                  05 DEC 2025
                </span>
              </div>

            </div>

            <div className="hero__metric-divider" />

            <div className="hero__metric">

              <span className="hero__metric-label">
                OPERATING MODEL
              </span>

              <span className="hero__metric-value">
                HOUSE-OF-BRANDS
              </span>

            </div>

            <div className="hero__metric-divider" />

            <div className="hero__metric">

              <span className="hero__metric-label">
                SECTORS
              </span>

              <span className="hero__metric-value">
                AGRICULTURE · COMMERCE · EDUCATION · TECHNOLOGY
              </span>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero__cinematic-scroll"
        aria-label="Scroll to explore"
      >
        <span>Scroll to explore</span>

        <span className="hero__cinematic-scroll-line" />

        <ArrowRight
          size={13}
          className="hero__cinematic-scroll-arrow"
        />
      </a>

    </section>
  );
}