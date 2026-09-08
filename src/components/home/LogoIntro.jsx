import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import OlyntoLogo from '../logo/OlyntoLogo';

const LOGO_SRC = '/olynto1%20Logo.jpg';

export default function LogoIntro({ onComplete }) {
  const rootRef = useRef(null);
  const logoStageRef = useRef(null);
  const finalLogoRef = useRef(null);

  const goldLineRef = useRef(null);
  const wordmarkRef = useRef(null);
  const llpRef = useRef(null);
  const taglineRef = useRef(null);

  const pieceRefs = useRef({
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
    center: null,
  });

  useEffect(() => {
    const root = rootRef.current;
    const logoStage = logoStageRef.current;

    if (!root || !logoStage) return;

    const pieces = pieceRefs.current;

    const ctx = gsap.context(() => {
      const outerPieces = [
        pieces.topLeft,
        pieces.topRight,
        pieces.bottomLeft,
        pieces.bottomRight,
      ].filter(Boolean);

      /*
       * =========================================
       * INITIAL STATE
       * =========================================
       */

      gsap.set(outerPieces, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        transformOrigin: '50% 50%',
      });

      if (pieces.center) {
        gsap.set(pieces.center, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          transformOrigin: '50% 50%',
        });
      }

      gsap.set(finalLogoRef.current, {
        opacity: 0,
      });

      gsap.set(goldLineRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: 'center center',
      });

      gsap.set(wordmarkRef.current, {
        opacity: 0,
        y: 18,
      });

      gsap.set(llpRef.current, {
        opacity: 0,
        y: 12,
      });

      gsap.set(taglineRef.current, {
        opacity: 0,
        y: 10,
      });

      /*
       * =========================================
       * MAIN TIMELINE
       * =========================================
       */

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
        },
      });

      /*
       * =========================================
       * 1. LOGO APPEARS
       * =========================================
       */

      tl.fromTo(
        logoStage,
        {
          opacity: 0,
          scale: 0.94,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
        }
      );

      /*
       * Short cinematic hold
       */

      tl.to({}, {
        duration: 0.20,
      });

      /*
       * =========================================
       * 2. BREAK APART
       * =========================================
       *
       * Top-left     -> left / upward
       * Top-right    -> right / upward
       * Bottom-left  -> left / downward
       * Bottom-right -> right / downward
       */

      tl.to(
        pieces.topLeft,
        {
          x: -78,
          y: -52,
          rotation: -8,
          duration: 0.48,
          ease: 'power3.out',
        },
        'break'
      );

      tl.to(
        pieces.topRight,
        {
          x: 78,
          y: -52,
          rotation: 8,
          duration: 0.48,
          ease: 'power3.out',
        },
        'break+=0.03'
      );

      tl.to(
        pieces.bottomLeft,
        {
          x: -78,
          y: 52,
          rotation: 8,
          duration: 0.48,
          ease: 'power3.out',
        },
        'break+=0.06'
      );

      tl.to(
        pieces.bottomRight,
        {
          x: 78,
          y: 52,
          rotation: -8,
          duration: 0.48,
          ease: 'power3.out',
        },
        'break+=0.09'
      );

      /*
       * Center prepares for final lock
       */

      tl.to(
        pieces.center,
        {
          scale: 0.72,
          opacity: 0.35,
          duration: 0.35,
          ease: 'power2.inOut',
        },
        'break+=0.08'
      );

      /*
       * Short separation hold
       */

      tl.to({}, {
        duration: 0.18,
      });

      /*
       * =========================================
       * 3. OUTER PIECES REASSEMBLE
       * =========================================
       */

      tl.to(
        pieces.topLeft,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.62,
          ease: 'power3.inOut',
        },
        'assemble'
      );

      tl.to(
        pieces.topRight,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.62,
          ease: 'power3.inOut',
        },
        'assemble+=0.07'
      );

      tl.to(
        pieces.bottomLeft,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.62,
          ease: 'power3.inOut',
        },
        'assemble+=0.14'
      );

      tl.to(
        pieces.bottomRight,
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.62,
          ease: 'power3.inOut',
        },
        'assemble+=0.21'
      );

      /*
       * =========================================
       * 4. CENTER 360° FINAL LOCK
       * =========================================
       *
       * Exactly one complete rotation.
       */

      tl.to(
        pieces.center,
        {
          x: 0,
          y: 0,
          rotation: 360,
          scale: 1.06,
          opacity: 1,
          duration: 0.72,
          ease: 'power3.out',
        },
        'assemble+=0.38'
      );

      /*
       * Precise final settle
       */

      tl.to(
        pieces.center,
        {
          x: 0,
          y: 0,
          rotation: 360,
          scale: 1,
          duration: 0.16,
          ease: 'power2.out',
        }
      );

      /*
       * =========================================
       * 5. ORIGINAL LOGO LOCK
       * =========================================
       *
       * The untouched original artwork becomes
       * visible once the pieces have assembled.
       */

      tl.to(
        finalLogoRef.current,
        {
          opacity: 1,
          duration: 0.12,
          ease: 'power2.out',
        }
      );

      /*
       * =========================================
       * 6. GOLD LINE
       * =========================================
       */

      tl.to(
        goldLineRef.current,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.35,
          ease: 'power3.out',
        },
        '+=0.04'
      );

      /*
       * =========================================
       * 7. OLYNTO
       * =========================================
       */

      tl.to(
        wordmarkRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.40,
          ease: 'power3.out',
        },
        '-=0.12'
      );

      /*
       * =========================================
       * 8. LLP
       * =========================================
       */

      tl.to(
        llpRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.30,
          ease: 'power3.out',
        },
        '-=0.16'
      );

      /*
       * =========================================
       * 9. TAGLINE
       * =========================================
       */

      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
        },
        '-=0.08'
      );

      /*
       * =========================================
       * 10. FINAL HOLD
       * =========================================
       */

      tl.to({}, {
        duration: 0.65,
      });

      /*
       * =========================================
       * 11. FADE TO HERO
       * =========================================
       */

      tl.to(root, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) {
            onComplete();
          }
        },
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="olynto-intro"
    >
      <div className="olynto-intro-inner">

        {/* =====================================
            LOGO
        ====================================== */}

        <div
          ref={logoStageRef}
          className="olynto-intro-logo-stage"
        >
          <OlyntoLogo pieceRefs={pieceRefs} />

          {/* Exact original logo */}
          <img
            ref={finalLogoRef}
            src={LOGO_SRC}
            alt=""
            className="olynto-intro-final-logo"
            draggable="false"
          />
        </div>

        {/* =====================================
            GOLD DIVIDER
        ====================================== */}

        <div
          ref={goldLineRef}
          className="olynto-intro-gold-line"
        />

        {/* =====================================
            WORDMARK
        ====================================== */}

        <div
          ref={wordmarkRef}
          className="olynto-intro-wordmark"
        >
          OLYNTO
        </div>

        {/* =====================================
            LLP
        ====================================== */}

        <div
          ref={llpRef}
          className="olynto-intro-llp"
        >
          LLP
        </div>

        {/* =====================================
            TAGLINE
        ====================================== */}

        <div
          ref={taglineRef}
          className="olynto-intro-tagline"
        >
          Innovating Today. Empowering Tomorrow.
        </div>

      </div>

      {/* =======================================
          INTRO STYLES
      ======================================== */}

      <style>{`
        .olynto-intro {
          position: fixed;
          inset: 0;
          z-index: 99999;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.025) 0%,
              rgba(0, 0, 0, 0) 42%
            ),
            #050505;

          pointer-events: none;
        }

        .olynto-intro-inner {
          width: min(90vw, 700px);

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;
        }

        /* ---------------------------------------
           LOGO STAGE
        --------------------------------------- */

        .olynto-intro-logo-stage {
          position: relative;

          width: 270px;
          height: 270px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }

        .olynto-intro-logo-stage svg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: visible;
        }

        .olynto-logo-piece {
          transform-box: fill-box;
          transform-origin: center;

          will-change:
            transform,
            opacity;
        }

        /* ---------------------------------------
           FINAL ORIGINAL LOGO
        --------------------------------------- */

        .olynto-intro-final-logo {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: contain;

          display: block;

          pointer-events: none;
          user-select: none;
        }

        /* ---------------------------------------
           GOLD LINE
        --------------------------------------- */

        .olynto-intro-gold-line {
          width: 52px;
          height: 1px;

          margin-top: 22px;
          margin-bottom: 24px;

          background: linear-gradient(
            90deg,
            rgba(214, 177, 84, 0),
            rgba(214, 177, 84, 0.95),
            rgba(214, 177, 84, 0)
          );

          opacity: 0;

          transform-origin: center center;

          will-change:
            transform,
            opacity;
        }

        /* ---------------------------------------
           OLYNTO
        --------------------------------------- */

        .olynto-intro-wordmark {
          margin-top: 0;

          font-family:
            Inter,
            Helvetica Neue,
            Arial,
            sans-serif;

          font-size: clamp(28px, 4vw, 42px);

          font-weight: 500;

          letter-spacing: 0.32em;

          line-height: 1;

          color: #f5f5f5;

          padding-left: 0.32em;

          white-space: nowrap;

          will-change:
            transform,
            opacity;
        }

        /* ---------------------------------------
           LLP
        --------------------------------------- */

        .olynto-intro-llp {
          margin-top: 10px;

          font-family:
            Inter,
            Helvetica Neue,
            Arial,
            sans-serif;

          font-size: 12px;

          font-weight: 500;

          letter-spacing: 0.42em;

          line-height: 1;

          color: rgba(214, 177, 84, 0.9);

          padding-left: 0.42em;

          white-space: nowrap;

          will-change:
            transform,
            opacity;
        }

        /* ---------------------------------------
           TAGLINE
        --------------------------------------- */

        .olynto-intro-tagline {
          margin-top: 18px;

          font-family:
            Inter,
            Helvetica Neue,
            Arial,
            sans-serif;

          font-size: 12px;

          font-weight: 400;

          letter-spacing: 0.12em;

          line-height: 1.5;

          color: rgba(245, 245, 245, 0.58);

          white-space: nowrap;

          will-change:
            transform,
            opacity;
        }

        /* ---------------------------------------
           MOBILE
        --------------------------------------- */

        @media (max-width: 600px) {
          .olynto-intro-logo-stage {
            width: 220px;
            height: 220px;
          }

          .olynto-intro-gold-line {
            width: 44px;

            margin-top: 18px;
            margin-bottom: 20px;
          }

          .olynto-intro-wordmark {
            font-size: 25px;

            letter-spacing: 0.28em;

            padding-left: 0.28em;
          }

          .olynto-intro-llp {
            font-size: 10px;
          }

          .olynto-intro-tagline {
            max-width: 85vw;

            white-space: normal;

            font-size: 10px;

            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </div>
  );
}