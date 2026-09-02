import React from 'react';

export default function AboutVideoHero() {
  return (
    <section className="about-video-hero">
      {/* Background video */}
      <video
        className="about-video-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/about-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark cinematic overlay */}
      <div className="about-video-hero__overlay" />

      {/* Subtle gold atmosphere */}
      <div className="about-video-hero__glow" />

      {/* Content */}
      <div className="container about-video-hero__content">
        <div className="about-video-hero__eyebrow">
          <span />
          01 / Enterprise Profile
        </div>

        <h1 className="about-video-hero__title">
          ABOUT
          <span>OLYNTO</span>
        </h1>

        <div className="about-video-hero__line" />

        <p className="about-video-hero__subtitle">
          Building businesses that solve real problems
          and create lasting impact.
        </p>

        <div className="about-video-hero__meta">
          <span>FOUNDER LED</span>
          <span>MULTIPLE VENTURES</span>
          <span>BUILT TO LAST</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="about-video-hero__scroll">
        <span>EXPLORE</span>
        <span className="about-video-hero__scroll-line" />
      </div>

      <style>{`
        .about-video-hero {
          position: relative;
          min-height: 760px;
          height: min(88vh, 900px);
          overflow: hidden;
          background: #050505;
          color: #fff;
          display: flex;
          align-items: center;
        }

        .about-video-hero__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          pointer-events: none;
        }

        .about-video-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.68) 42%,
              rgba(0, 0, 0, 0.42) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.42) 0%,
              transparent 40%,
              rgba(0, 0, 0, 0.72) 100%
            );
        }

        .about-video-hero__glow {
          position: absolute;
          z-index: 2;

          width: 520px;
          height: 520px;

          right: 8%;
          top: 50%;

          transform: translateY(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(198, 161, 91, 0.12),
              transparent 68%
            );

          filter: blur(20px);

          pointer-events: none;

          animation:
            aboutVideoGlow
            8s
            ease-in-out
            infinite;
        }

        .about-video-hero__content {
          position: relative;
          z-index: 3;

          width: 100%;
          padding-top: 110px;
          padding-bottom: 80px;
        }

        .about-video-hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;

          margin-bottom: 30px;

          color: var(--gold-light);

          font-family: var(--font-heading);

          font-size: 0.68rem;
          font-weight: 700;

          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .about-video-hero__eyebrow span {
          width: 46px;
          height: 1px;

          background:
            var(--gold-light);
        }

        .about-video-hero__title {
          display: flex;
          flex-direction: column;

          margin: 0;

          font-family: var(--font-heading);

          font-size:
            clamp(4.5rem, 10vw, 10rem);

          font-weight: 500;

          line-height: 0.82;

          letter-spacing: -0.055em;

          text-transform: uppercase;

          max-width: 900px;
        }

        .about-video-hero__title span {
          color: var(--gold-light);
        }

        .about-video-hero__line {
          width: 110px;
          height: 1px;

          margin:
            38px 0 28px;

          background:
            linear-gradient(
              90deg,
              var(--gold-light),
              transparent
            );
        }

        .about-video-hero__subtitle {
          max-width: 540px;

          margin: 0;

          color:
            rgba(255, 255, 255, 0.72);

          font-size: 1rem;

          line-height: 1.8;
        }

        .about-video-hero__meta {
          display: flex;
          flex-wrap: wrap;

          gap: 10px 28px;

          margin-top: 36px;
        }

        .about-video-hero__meta span {
          position: relative;

          color:
            rgba(255, 255, 255, 0.68);

          font-family:
            var(--font-heading);

          font-size: 0.63rem;

          font-weight: 700;

          letter-spacing: 0.11em;
        }

        .about-video-hero__meta span:not(:last-child)::after {
          content: '';

          position: absolute;

          width: 3px;
          height: 3px;

          right: -16px;
          top: 50%;

          transform: translateY(-50%);

          border-radius: 50%;

          background:
            var(--gold-light);
        }

        .about-video-hero__scroll {
          position: absolute;

          z-index: 4;

          right: 42px;
          bottom: 38px;

          display: flex;
          align-items: center;
          gap: 12px;

          color:
            rgba(255, 255, 255, 0.58);

          font-family:
            var(--font-heading);

          font-size: 0.6rem;

          font-weight: 700;

          letter-spacing: 0.12em;

          writing-mode: vertical-rl;
        }

        .about-video-hero__scroll-line {
          width: 1px;
          height: 55px;

          background:
            linear-gradient(
              to bottom,
              var(--gold-light),
              transparent
            );

          animation:
            aboutVideoScroll
            2.2s
            ease-in-out
            infinite;
        }

        @keyframes aboutVideoGlow {
          0%,
          100% {
            opacity: 0.35;
            transform:
              translateY(-50%)
              scale(0.92);
          }

          50% {
            opacity: 0.75;
            transform:
              translateY(-50%)
              scale(1.08);
          }
        }

        @keyframes aboutVideoScroll {
          0% {
            opacity: 0.2;
            transform: scaleY(0.55);
            transform-origin: top;
          }

          50% {
            opacity: 1;
            transform: scaleY(1);
            transform-origin: top;
          }

          100% {
            opacity: 0.2;
            transform: scaleY(0.55);
            transform-origin: bottom;
          }
        }

        @media (max-width: 767px) {
          .about-video-hero {
            min-height: 680px;
            height: 82vh;
          }

          .about-video-hero__overlay {
            background:
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.84),
                rgba(0, 0, 0, 0.58)
              ),
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.38),
                rgba(0, 0, 0, 0.76)
              );
          }

          .about-video-hero__content {
            padding-top: 120px;
            padding-bottom: 70px;
          }

          .about-video-hero__title {
            font-size:
              clamp(3.8rem, 17vw, 6rem);
          }

          .about-video-hero__subtitle {
            max-width: 90%;
            font-size: 0.88rem;
          }

          .about-video-hero__meta {
            gap: 9px 20px;
          }

          .about-video-hero__meta span {
            font-size: 0.55rem;
          }

          .about-video-hero__scroll {
            right: 18px;
            bottom: 24px;
          }

          .about-video-hero__glow {
            width: 300px;
            height: 300px;

            right: -25%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-video-hero__glow,
          .about-video-hero__scroll-line {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}