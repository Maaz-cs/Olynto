import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LogoIntro({ onComplete }) {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const logoGlowRef = useRef(null);
  const burstRef = useRef(null);
  const raysRef = useRef(null);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;

    if (!intro) return;

    document.body.classList.add('logo-intro-active');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      /* =====================================================
         REDUCED MOTION
         ===================================================== */

      if (reducedMotion) {
        gsap.set(logoRef.current, {
          opacity: 1,
          scale: 1,
        });

        gsap.set(brandRef.current, {
          opacity: 1,
          y: 0,
        });

        gsap.set(taglineRef.current, {
          opacity: 1,
          y: 0,
        });

        gsap.delayedCall(1.2, finishIntro);

        return;
      }

      /* =====================================================
         INITIAL STATES
         ===================================================== */

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.82,
        filter:
          'brightness(0.35) saturate(0.7)',
      });

      gsap.set(logoGlowRef.current, {
        opacity: 0,
        scale: 0.6,
      });

      gsap.set(brandRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(taglineRef.current, {
        opacity: 0,
        y: 10,
      });

      gsap.set(burstRef.current, {
        opacity: 0,
        scale: 0.15,
      });

      gsap.set(raysRef.current.children, {
        opacity: 0,
        scaleY: 0,
      });

      /* =====================================================
         CENTRAL LIGHT BURST
         ===================================================== */

      gsap.to(burstRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: 'power3.out',
      });

      /* =====================================================
         GOLD LIGHT RAYS
         ===================================================== */

      gsap.to(raysRef.current.children, {
        opacity: 0.9,
        scaleY: 1,
        duration: 0.5,
        stagger: 0.025,
        ease: 'power3.out',
      });

      gsap.to(raysRef.current.children, {
        opacity: 0,
        scaleY: 1.8,
        duration: 0.75,
        delay: 0.25,
        stagger: 0.018,
        ease: 'power2.out',
      });

      /* =====================================================
         LOGO REVEAL
         ===================================================== */

      gsap.to(logoGlowRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        delay: 0.25,
        ease: 'power3.out',
      });

      gsap.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        filter:
          'brightness(1) saturate(1)',
        duration: 1.4,
        delay: 0.35,
        ease: 'power3.out',
      });

      /* =====================================================
         MOVING GOLD LIGHT SWEEP
         ===================================================== */

      gsap.fromTo(
        logoRef.current,
        {
          clipPath:
            'inset(100% 0% 0% 0%)',
        },
        {
          clipPath:
            'inset(0% 0% 0% 0%)',
          duration: 1.55,
          delay: 0.4,
          ease: 'power2.inOut',
        }
      );

      /* =====================================================
         BRAND NAME
         ===================================================== */

      gsap.to(brandRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 1.95,
        ease: 'power3.out',
      });

      /* =====================================================
         TAGLINE
         ===================================================== */

      gsap.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 2.25,
        ease: 'power2.out',
      });

      /* =====================================================
         SUBTLE LOGO PULSE
         ===================================================== */

      gsap.to(logoGlowRef.current, {
        opacity: 0.72,
        scale: 1.05,
        duration: 1.4,
        delay: 2.35,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
      });

      /* =====================================================
         EXIT
         ===================================================== */

      gsap.delayedCall(4.35, () => {
        gsap.to(intro, {
          opacity: 0,
          scale: 1.015,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: finishIntro,
        });
      });
    }, introRef);

    function finishIntro() {
      document.body.classList.remove(
        'logo-intro-active'
      );

      onComplete?.();
    }

    return () => {
      ctx.revert();

      document.body.classList.remove(
        'logo-intro-active'
      );
    };
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className="logo-intro"
      aria-label="Olynto LLP introduction"
    >
      {/* =====================================================
          BACKGROUND
         ===================================================== */}

      <div className="logo-intro__background" />

      <div className="logo-intro__vignette" />

      <div className="logo-intro__ambient-glow" />

      {/* =====================================================
          PARTICLES
         ===================================================== */}

      <div className="logo-intro__particles">
        {Array.from({ length: 65 }).map(
          (_, index) => (
            <span
              key={index}
              className="logo-intro__particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 3}s`,
                '--size': `${1 + Math.random() * 2}px`,
              }}
            />
          )
        )}
      </div>

      {/* =====================================================
          CENTER CONTENT
         ===================================================== */}

      <div className="logo-intro__content">

        {/* Central burst */}
        <div
          ref={burstRef}
          className="logo-intro__burst"
        />

        {/* Radial light rays */}
        <div
          ref={raysRef}
          className="logo-intro__rays"
        >
          {Array.from({ length: 20 }).map(
            (_, index) => (
              <span
                key={index}
                style={{
                  transform: `
                    rotate(${index * 18}deg)
                  `,
                }}
              />
            )
          )}
        </div>

        {/* =================================================
            ACTUAL OLYNTO LOGO
           ================================================= */}

        <div className="logo-intro__logo-wrap">

          <div
            ref={logoGlowRef}
            className="logo-intro__logo-glow"
          />

          <img
            ref={logoRef}
            src="/olynto1%20Logo.jpg"
            alt="Olynto LLP emblem"
            className="logo-intro__logo"
          />

        </div>

        {/* =================================================
            COMPANY NAME
           ================================================= */}

        <div
          ref={brandRef}
          className="logo-intro__brand"
        >
          <span />

          <h1>OLYNTO</h1>

          <small>LLP</small>

          <span />
        </div>

        {/* =================================================
            TAGLINE
           ================================================= */}

        <p
          ref={taglineRef}
          className="logo-intro__tagline"
        >
          Innovating Today. Empowering Tomorrow.
        </p>

      </div>
    </div>
  );
}