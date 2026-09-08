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
  const sweepRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;

    if (!intro) return;

    document.body.classList.add('logo-intro-active');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let completed = false;

    const finishIntro = () => {
      if (completed) return;

      completed = true;

      gsap.set(intro, {
        pointerEvents: 'none',
      });

      document.body.classList.remove(
        'logo-intro-active'
      );

      onComplete?.();
    };

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          [
            logoRef.current,
            brandRef.current,
            taglineRef.current,
            progressRef.current,
          ],
          {
            opacity: 1,
          }
        );

        gsap.set(logoRef.current, {
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        });

        gsap.set(
          [
            logoGlowRef.current,
            burstRef.current,
            raysRef.current,
          ],
          {
            opacity: 0,
          }
        );

        gsap.delayedCall(0.9, finishIntro);
        return;
      }

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.86,
        y: 10,
        clipPath: 'inset(100% 0% 0% 0%)',
        filter:
          'brightness(0.55) saturate(0.65)',
      });

      gsap.set(logoGlowRef.current, {
        opacity: 0,
        scale: 0.72,
      });

      gsap.set(brandRef.current, {
        opacity: 0,
        y: 20,
        letterSpacing: '0.30em',
      });

      gsap.set(taglineRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(burstRef.current, {
        opacity: 0,
        scale: 0.25,
      });

      gsap.set(raysRef.current.children, {
        opacity: 0,
        scaleY: 0.15,
      });

      gsap.set(sweepRef.current, {
        xPercent: -130,
        opacity: 0,
      });

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      const timeline = gsap.timeline();

      timeline
        .to(burstRef.current, {
          opacity: 0.8,
          scale: 1,
          duration: 0.65,
          ease: 'power3.out',
        })
        .to(
          raysRef.current.children,
          {
            opacity: 0.52,
            scaleY: 1,
            duration: 0.62,
            stagger: 0.018,
            ease: 'power3.out',
          },
          '<0.05'
        )
        .to(
          burstRef.current,
          {
            opacity: 0.06,
            scale: 1.32,
            duration: 0.95,
            ease: 'power2.out',
          },
          '<0.15'
        )
        .to(
          raysRef.current.children,
          {
            opacity: 0,
            scaleY: 1.45,
            duration: 0.75,
            stagger: 0.012,
            ease: 'power2.out',
          },
          '<0.1'
        )
        .to(
          logoGlowRef.current,
          {
            opacity: 0.9,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter:
              'brightness(1) saturate(1)',
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.52'
        )
        .to(
          logoRef.current,
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.15,
            ease: 'power2.inOut',
          },
          '-=0.95'
        )
        .to(
          sweepRef.current,
          {
            opacity: 0.85,
            xPercent: 130,
            duration: 1.15,
            ease: 'power2.inOut',
          },
          '-=0.88'
        )
        .to(
          brandRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: '0.18em',
            duration: 0.72,
            ease: 'power3.out',
          },
          '-=0.38'
        )
        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            ease: 'power2.out',
          },
          '-=0.35'
        )
        .to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 0.85,
            ease: 'power2.inOut',
          },
          '-=0.25'
        )
        .to(
          logoGlowRef.current,
          {
            opacity: 0.48,
            scale: 1.04,
            duration: 1.1,
            ease: 'sine.inOut',
          },
          '-=0.1'
        );

      gsap.to(logoGlowRef.current, {
        opacity: 0.58,
        scale: 1.045,
        duration: 1.5,
        delay: 3.15,
        repeat: 1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      timeline.call(
        () => {
          gsap.to(intro, {
            opacity: 0,
            scale: 1.012,
            duration: 0.72,
            ease: 'power2.inOut',
            onComplete: finishIntro,
          });
        },
        null,
        '+=0.65'
      );
    }, introRef);

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
      <div className="logo-intro__background" />
      <div className="logo-intro__vignette" />
      <div className="logo-intro__ambient-glow" />

      <div
        className="logo-intro__particles"
        aria-hidden="true"
      >
        {Array.from({ length: 34 }).map(
          (_, index) => (
            <span
              key={index}
              className="logo-intro__particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${Math.random() * 3}s`,
                '--size': `${1 + Math.random() * 1.5}px`,
              }}
            />
          )
        )}
      </div>

      <div className="logo-intro__content">
        <div
          ref={burstRef}
          className="logo-intro__burst"
          aria-hidden="true"
        />

        <div
          ref={raysRef}
          className="logo-intro__rays"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map(
            (_, index) => (
              <span
                key={index}
                style={{
                  transform: `
                    translateX(-50%)
                    rotate(${index * 22.5}deg)
                  `,
                }}
              />
            )
          )}
        </div>

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

          <div
            ref={sweepRef}
            className="logo-intro__logo-sweep"
            aria-hidden="true"
          />
        </div>

        <div
          ref={brandRef}
          className="logo-intro__brand"
        >
          <span />
          <h1>OLYNTO</h1>
          <small>LLP</small>
          <span />
        </div>

        <p
          ref={taglineRef}
          className="logo-intro__tagline"
        >
          Innovating Today. Empowering Tomorrow.
        </p>

        <div
          ref={progressRef}
          className="logo-intro__progress"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}