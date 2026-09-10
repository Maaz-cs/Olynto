import React, { useEffect, useRef } from 'react';
import Text3DFlip from "@/components/ui/text-3d-flip";
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
      hero.style.setProperty(
        '--hero-mouse-x',
        '0px'
      );

      hero.style.setProperty(
        '--hero-mouse-y',
        '0px'
      );
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
      description:
        'Building practical businesses around agriculture.',
      icon: <Sprout size={17} />,
    },
    {
      id: '02',
      name: 'Commerce',
      description:
        'Creating focused ventures for modern commerce.',
      icon: <ShoppingBag size={17} />,
    },
    {
      id: '03',
      name: 'Education',
      description:
        'Developing opportunities through education.',
      icon: <GraduationCap size={17} />,
    },
    {
      id: '04',
      name: 'Technology',
      description:
        'Building technology-led solutions for tomorrow.',
      icon: <Cpu size={17} />,
    },
  ];

  return (
    <section
      id="hero-section"
      className="hero hero--cinematic"
      ref={heroRef}
    >
      {/* =====================================================
          BACKGROUND VIDEO
          ===================================================== */}

      <div
        className="hero__cinematic-media"
        aria-hidden="true"
      >
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

      {/* Cinematic effects */}
      <div className="hero__cinematic-noise" />

      <div className="hero__cinematic-grid" />

      <div className="hero__cinematic-glow hero__cinematic-glow--one" />

      <div className="hero__cinematic-glow hero__cinematic-glow--two" />

      

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="hero__cinematic-content">
        <div className="container">

          {/* =================================================
              EYEBROW
              ================================================= */}

          <div className="hero__cinematic-eyebrow">
            <span className="hero__cinematic-eyebrow-line" />

            <span>
              OLYNTO LLP
            </span>

            <span className="hero__cinematic-eyebrow-dot" />
          </div>

          {/* =================================================
              MAIN HEADLINE
              ================================================= */}

          <div className="hero__cinematic-heading">

            <div className="hero__heading-small">
              We build
            </div>

          <Text3DFlip
  className="venture-hero-title"
  textClassName="venture-hero-title__text"
  flipTextClassName="venture-hero-title__text"
  rotateDirection="top"
  staggerDuration={0.03}
  staggerFrom="first"
  transition={{
    type: "spring",
    damping: 25,
    stiffness: 160,
  }}
>
  VENTURE{"\n"}THAT LAST
</Text3DFlip>

            <div className="hero__heading-mark">
              <span />
              <span />
              <span />
            </div>

          </div>

          {/* =================================================
              LOWER CONTENT
              ================================================= */}

          <div className="hero__cinematic-bottom">

            {/* -----------------------------------------------
                DESCRIPTION
                ----------------------------------------------- */}

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

              {/* Actions */}

              <div className="hero__cinematic-actions">

                <a
                  href="/ventures"
                  className="hero__cinematic-primary"
                >
                  <span>
                    Explore Our Ventures
                  </span>

                  <ArrowRight size={16} />
                </a>

                <a
                  href="/about"
                  className="hero__cinematic-secondary"
                >
                  <span>
                    Enterprise Overview
                  </span>

                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>

            

          </div>

          {/* =================================================
              BOTTOM METRICS
              ================================================= */}

          <div className="hero__cinematic-metrics">

            {/* Incorporated */}

            <div className="hero__metric">

              <span className="hero__metric-icon">
                <ShieldCheck size={14} />
              </span>

            </div>

            <div className="hero__metric-divider" />

            {/* Operating model */}

            <div className="hero__metric">

              <span className="hero__metric-label">
                OPERATING MODEL
              </span>

              <span className="hero__metric-value">
                HOUSE-OF-BRANDS
              </span>

            </div>

            <div className="hero__metric-divider" />

            {/* Sectors */}

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

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <a
        href="/about"
        className="hero__cinematic-scroll"
        aria-label="Go to About"
      >
        <span>
          Explore About
        </span>

        <span className="hero__cinematic-scroll-line" />

        <ArrowRight
          size={13}
          className="hero__cinematic-scroll-arrow"
        />
      </a>

    </section>
  );
}