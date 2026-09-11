import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  MapPin,
  ShoppingBag,
  Sprout,
} from 'lucide-react';


/* =========================================================
   OLYNTO LLP
   THE OLYNTO GROUP OF COMPANIES
   OPERATING PORTFOLIO
========================================================= */

const companies = [
  {
    number: '01',
    name: 'NoQkart',
    category: 'Hyperlocal Commerce & Booking',
    shortCategory: 'COMMERCE',

    tagline:
      'Skip the queue. Book, order, arrive — instantly.',

    description:
      "NoQkart is Olynto's hyperlocal booking and ordering platform, built to remove the single most common friction point in local commerce: the wait. It connects nearby customers directly to local businesses — from food and retail to services — for real-time ordering, booking, and queue-free fulfillment, starting with a phased city rollout in Belagavi, Karnataka.",

    points: [
      'A mobile-first platform (React Native) with a live, real-time backend, built for speed and reliability at the neighbourhood level.',
      'Launching zone-by-zone rather than city-wide, so every launch market gets a genuinely reliable, well-serviced experience before the next one opens.',
      'Built and led by a dedicated in-house engineering and execution team under Olynto LLP.',
    ],

    location:
      'Belagavi, Karnataka',

    icon:
      ShoppingBag,

    logo:
      null,
  },

  {
    number: '02',
    name: 'I AM ROOT™',
    category:
      'Organic Agriculture & Natural Products',

    shortCategory:
      'AGRICULTURE',

    tagline:
      'From root to shelf — nothing added, nothing lost.',

    description:
      "I AM ROOT™ is Olynto's agriculture and natural-products venture, born from the group's original grounding in organic farming. It develops and markets natural, minimally processed agricultural products — beginning with moringa — for customers who want traceable, honestly sourced food and wellness products rather than mass-processed alternatives. The venture is built for international reach from day one, holding an Import Export Code (IEC) that makes it export-ready, not just export-aspirational.",

    points: [
      'Products developed and sourced with full traceability from farm to finished product.',
      'Export-ready from inception — I AM ROOT™ holds a registered IEC, enabling direct entry into international markets alongside domestic retail.',
      'Built to global quality and packaging standards so the same product line can serve both Indian consumers and overseas buyers.',
      "The commercial proof point for Olynto's broader ambition in organic and export-grade agriculture.",
    ],

    location:
      'India',

    icon:
      Sprout,

    logo:
      '/images/ventures/i-am-root.jpeg',
  },

  {
    number: '03',
    name: 'Olynto Elevate',
    category:
      'Education & Skill Development',

    shortCategory:
      'EDUCATION',

    tagline:
      'Placement-ready skills, not just certificates.',

    description:
      "Olynto Elevate is Olynto's education and skill-development arm, built specifically to close the gap between engineering degrees and industry-ready technical skills. Rather than generic training content, Elevate runs hands-on, cohort-based workshops — its inaugural programme, launched with AITM, focused on AI-powered web development — designed around what employers are actually hiring for.",

    points: [
      'Curriculum built around live, portfolio-worthy projects rather than passive lectures.',
      'Designed in partnership with academic institutions to reach engineering students directly on campus.',
      'The first step toward a broader Olynto Elevate programme spanning multiple technical skill tracks.',
    ],

    location:
      'India',

    icon:
      GraduationCap,

    logo:
      '/images/ventures/olynto-elevate.png',
  },
];


/* =========================================================
   COMPONENT
========================================================= */

export default function VenturesSection() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isMoving, setIsMoving] =
    useState(false);

  const [dragStart, setDragStart] =
    useState(null);

  const timerRef =
    useRef(null);


  const activeCompany =
    companies[activeIndex];


  /* =======================================================
     CAROUSEL POSITION
  ======================================================= */

  const getRelativePosition = (index) => {

    let position =
      index - activeIndex;

    if (position > 1) {
      position -= companies.length;
    }

    if (position < -1) {
      position += companies.length;
    }

    return position;
  };


  /* =======================================================
     SELECT COMPANY
  ======================================================= */

  const selectCompany = (index) => {

    if (
      isMoving ||
      index === activeIndex
    ) {
      return;
    }

    setIsMoving(true);

    setActiveIndex(index);

    window.clearTimeout(
      timerRef.current
    );

    timerRef.current =
      window.setTimeout(() => {
        setIsMoving(false);
      }, 680);
  };


  /* =======================================================
     NEXT
  ======================================================= */

  const nextCompany = () => {

    selectCompany(
      (activeIndex + 1) %
      companies.length
    );
  };


  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousCompany = () => {

    selectCompany(
      (activeIndex - 1 + companies.length) %
      companies.length
    );
  };


  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {

    return () => {

      window.clearTimeout(
        timerRef.current
      );

    };

  }, []);


  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (
        event.key === 'ArrowLeft'
      ) {

        event.preventDefault();

        previousCompany();
      }

      if (
        event.key === 'ArrowRight'
      ) {

        event.preventDefault();

        nextCompany();
      }
    };


    window.addEventListener(
      'keydown',
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, [
    activeIndex,
    isMoving,
  ]);


  /* =======================================================
     POINTER / SWIPE
  ======================================================= */

  const handlePointerDown = (
    event
  ) => {

    setDragStart(
      event.clientX
    );
  };


  const handlePointerUp = (
    event
  ) => {

    if (
      dragStart === null
    ) {
      return;
    }

    const distance =
      event.clientX -
      dragStart;

    setDragStart(null);

    if (
      Math.abs(distance) < 45
    ) {
      return;
    }

    if (
      distance < 0
    ) {

      nextCompany();

    } else {

      previousCompany();

    }
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <main className="ventures-modern">

      <style>{`

        /* =====================================================
           OLYNTO VENTURES
        ===================================================== */

        .ventures-modern {

          --vm-bg:
            #070808;

          --vm-panel:
            #101111;

          --vm-white:
            #f5f5f2;

          --vm-muted:
            rgba(245,245,242,.62);

          --vm-soft:
            rgba(245,245,242,.36);

          --vm-line:
            rgba(255,255,255,.11);

          --vm-gold:
            #c8a45c;

          --vm-gold-light:
            #e1c889;

          position:
            relative;

          width:
            100%;

          min-height:
            100vh;

          overflow:
            hidden;

          background:
            var(--vm-bg);

          color:
            var(--vm-white);

        }


        .ventures-modern *,
        .ventures-modern *::before,
        .ventures-modern *::after {

          box-sizing:
            border-box;

        }


        .ventures-modern a {

          color:
            inherit;

          text-decoration:
            none;

        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .vm-container {

          width:
            min(
              1240px,
              calc(100% - 48px)
            );

          margin:
            0 auto;

        }


        /* =====================================================
           HERO
        ===================================================== */

        .vm-hero {

          position:
            relative;

          min-height:
            700px;

          display:
            flex;

          align-items:
            center;

          overflow:
            hidden;

          background:
            #050505;

          border-bottom:
            1px solid
            rgba(255,255,255,.10);

          isolation:
            isolate;

        }


        /* =====================================================
           HERO BACKGROUND
        ===================================================== */

        .vm-hero-background {

          position:
            absolute;

          inset:
            0;

          z-index:
            -3;

          overflow:
            hidden;

        }


        .vm-hero-background img {

          display:
            block;

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          object-position:
            center center;

          filter:
            brightness(.88)
            contrast(1.05);

          transform:
            none;

          transition:
            none;

        }


        /* =====================================================
           HERO OVERLAY
        ===================================================== */

        .vm-hero-overlay {

          position:
            absolute;

          inset:
            0;

          z-index:
            -2;

          pointer-events:
            none;

          background:

            linear-gradient(
              90deg,
              rgba(4,5,5,.78) 0%,
              rgba(4,5,5,.48) 38%,
              rgba(4,5,5,.18) 68%,
              rgba(4,5,5,.08) 100%
            ),

            linear-gradient(
              180deg,
              rgba(4,5,5,.12) 0%,
              rgba(4,5,5,.04) 50%,
              rgba(4,5,5,.38) 100%
            );

        }


        /* =====================================================
           HERO INNER
        ===================================================== */

        .vm-hero-inner {

          position:
            relative;

          z-index:
            5;

          width:
            100%;

          min-height:
            700px;

          display:
            flex;

          align-items:
            center;

          padding:
            105px 0
            75px;

        }


        /* =====================================================
           HERO COPY
        ===================================================== */

        .vm-heading {

          position:
            relative;

          z-index:
            10;

          width:
            min(
              700px,
              60vw
            );

        }


        .vm-eyebrow {

          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          margin-bottom:
            28px;

          color:
            var(--vm-gold-light);

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            .19em;

          text-transform:
            uppercase;

        }


        .vm-eyebrow::before {

          content:
            '';

          width:
            38px;

          height:
            1px;

          background:
            var(--vm-gold);

        }


        .vm-title {

          max-width:
            720px;

          margin:
            0;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size:
            clamp(
              58px,
              6.8vw,
              104px
            );

          font-weight:
            400;

          line-height:
            .84;

          letter-spacing:
            -.065em;

          text-transform:
            uppercase;

        }


        .vm-title span {

          display:
            block;

        }


        .vm-title span:first-child {

          color:
            var(--vm-white);

        }


        .vm-title span:nth-child(2),
        .vm-title span:nth-child(3) {

          color:
            var(--vm-gold-light);

        }


        .vm-hero-line {

          width:
            95px;

          height:
            1px;

          margin-top:
            34px;

          background:
            linear-gradient(
              90deg,
              var(--vm-gold),
              transparent
            );

        }


        .vm-hero-tagline {

          margin:
            22px 0 0;

          color:
            var(--vm-gold-light);

          font-size:
            11px;

          font-weight:
            700;

          letter-spacing:
            .18em;

          text-transform:
            uppercase;

        }


        .vm-description {

          max-width:
            510px;

          margin:
            11px 0 0;

          color:
            rgba(245,245,242,.72);

          font-size:
            14px;

          line-height:
            1.8;

          text-shadow:
            0 2px 18px
            rgba(0,0,0,.55);

        }


        .vm-explore {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            12px;

          margin-top:
            32px;

          color:
            var(--vm-white);

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            .19em;

          text-transform:
            uppercase;

          transition:
            transform .3s ease;

        }


        .vm-explore:hover {

          transform:
            translateX(5px);

        }


        .vm-explore-icon {

          display:
            grid;

          place-items:
            center;

          width:
            46px;

          height:
            46px;

          border:
            1px solid
            var(--vm-gold);

          border-radius:
            50%;

          color:
            var(--vm-gold);

          background:
            rgba(5,5,5,.25);

          backdrop-filter:
            blur(4px);

        }


        .vm-explore:hover
        .vm-explore-icon {

          background:
            var(--vm-gold);

          color:
            #080808;

        }


        /* =====================================================
           VENTURE GROUP
        ===================================================== */

        .vm-group {

          position:
            relative;

          padding:
            82px 0
            125px;

          background:

            radial-gradient(
              circle at 50% 0%,
              rgba(200,164,92,.075),
              transparent 40%
            ),

            #070808;

        }


        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .vm-group-header {

          display:
            grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, .72fr);

          gap:
            60px;

          align-items:
            end;

          margin-bottom:
            34px;

        }


        .vm-group-label {

          color:
            var(--vm-gold);

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            .18em;

          text-transform:
            uppercase;

        }


        .vm-group-title {

          margin:
            10px 0 0;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size:
            clamp(
              43px,
              5vw,
              72px
            );

          font-weight:
            400;

          line-height:
            .88;

          letter-spacing:
            -.055em;

        }


        .vm-group-intro {

          max-width:
            470px;

          margin:
            0;

          color:
            var(--vm-muted);

          font-size:
            13px;

          line-height:
            1.8;

        }



        /* =====================================================
           CAROUSEL BASE
        ===================================================== */

        .vm-carousel {

          position:
            relative;

          width:
            100%;

          height:
            390px;

          overflow:
            visible;

          perspective:
            1400px;

          touch-action:
            pan-y;

        }


        .vm-stage {

          position:
            relative;

          width:
            100%;

          height:
            315px;

          transform-style:
            preserve-3d;

          overflow:
            visible;

        }


        .vm-card {

          position:
            absolute;

          top:
            50%;

          left:
            50%;

          width:
            250px;

          height:
            340px;

          padding:
            24px;

          overflow:
            hidden;

          border:
            1px solid
            rgba(255,255,255,.11);

          border-radius:
            2px;

          background:

            radial-gradient(
              circle at 50% 42%,
              rgba(200,164,92,.055),
              transparent 48%
            ),

            linear-gradient(
              145deg,
              rgba(17,18,18,.98),
              rgba(7,8,8,.98)
            );

          color:
            var(--vm-white);

          cursor:
            pointer;

          transform-style:
            preserve-3d;

          transition:

            transform
            .68s
            cubic-bezier(.16,1,.3,1),

            opacity
            .68s
            cubic-bezier(.16,1,.3,1),

            filter
            .68s
            cubic-bezier(.16,1,.3,1),

            border-color
            .4s ease,

            box-shadow
            .4s ease;

          will-change:
            transform,
            opacity;

        }


        .vm-card::before {

          content:
            '';

          position:
            absolute;

          inset:
            0;

          pointer-events:
            none;

          background:

            radial-gradient(
              circle at 50% 40%,
              rgba(200,164,92,.08),
              transparent 45%
            );

          opacity:
            .9;

        }

        /* =====================================================
           CENTER CARD
        ===================================================== */

        .vm-card--center {

          z-index:
            10;

          transform:

            translate3d(
              -50%,
              -50%,
              80px
            )

            rotateY(0deg)

            rotateZ(0deg)

            scale(1.10);

          border-color:
            var(--vm-gold);

          box-shadow:

            0 24px 70px
            rgba(0,0,0,.68),

            0 0 45px
            rgba(200,164,92,.18);

        }


        /* =====================================================
           LEFT CARD
        ===================================================== */

        .vm-card--left {

          z-index:
            5;

          transform:

            translate3d(
              calc(-50% - 280px),
              -50%,
              -45px
            )

            rotateY(3deg)

            rotateZ(-.2deg)

            scale(.98);

          opacity:
            .76;

          filter:
            brightness(.76);

        }


        /* =====================================================
           RIGHT CARD
        ===================================================== */

        .vm-card--right {

          z-index:
            5;

          transform:

            translate3d(
              calc(-50% + 280px),
              -50%,
              -45px
            )

            rotateY(-3deg)

            rotateZ(.2deg)

            scale(.98);

          opacity:
            .76;

          filter:
            brightness(.76);

        }


        /* =====================================================
           HIDDEN CARD
        ===================================================== */

        .vm-card--hidden {

          z-index:
            0;

          transform:

            translate3d(
              -50%,
              -50%,
              -350px
            )

            scale(.55);

          opacity:
            0;

          pointer-events:
            none;

        }


        .vm-card:hover {

          border-color:
            rgba(200,164,92,.55);

        }


        /* =====================================================
           CARD TOP
        ===================================================== */

        .vm-card-top {

          position:
            relative;

          z-index:
            5;

          display:
            flex;

          align-items:
            flex-start;

          justify-content:
            space-between;

        }


        .vm-card-number {

          color:
            var(--vm-gold-light);

          font-size:
            11px;

          font-weight:
            700;

          letter-spacing:
            .12em;

        }


        .vm-card-icon {

          display:
            grid;

          place-items:
            center;

          width:
            40px;

          height:
            40px;

          border:
            1px solid
            rgba(200,164,92,.32);

          border-radius:
            50%;

          color:
            var(--vm-gold);

        }


        /* =====================================================
           CIRCULAR LOGO
        ===================================================== */

        .vm-card-logo {

          position:
            absolute;

          top:
            47%;

          left:
            50%;

          width:
            132px;

          height:
            132px;

          object-fit:
            cover;

          object-position:
            center;

          transform:
            translate(-50%, -50%);

          padding:
            0;

          border:
            2px solid
            rgba(225,200,137,.88);

          border-radius:
            50%;

          background:
            #f4f4f0;

          box-shadow:

            0 0 0 1px
            rgba(255,255,255,.06),

            0 10px 28px
            rgba(0,0,0,.45);

          opacity:
            1;

          filter:
            none;

          pointer-events:
            none;

          z-index:
            2;

          overflow:
            hidden;

        }


        /* =====================================================
           CENTER LOGO
        ===================================================== */

        .vm-card--center .vm-card-logo {

          width:
            158px;

          height:
            158px;

          top:
            45%;

          border:
            2px solid
            var(--vm-gold-light);

          background:
            #050505;

          box-shadow:

            0 0 0 1px
            rgba(225,200,137,.12),

            0 0 34px
            rgba(200,164,92,.22),

            0 16px 45px
            rgba(0,0,0,.52);

        }


        /* =====================================================
           SIDE LOGOS
        ===================================================== */

        .vm-card--left .vm-card-logo,
        .vm-card--right .vm-card-logo {

          width:
            132px;

          height:
            132px;

          top:
            46%;

          background:
            #f4f4f0;

          opacity:
            .98;

        }


        /* =====================================================
           NOQKART FALLBACK
        ===================================================== */

        .vm-card-logo--fallback {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          flex-direction:
            column;

          gap:
            8px;

          color:
            #111111;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            14px;

          font-weight:
            800;

          letter-spacing:
            -.045em;

        }


        .vm-card--center .vm-card-logo--fallback {

          font-size:
            17px;

        }


        .vm-card--left .vm-card-logo--fallback,
        .vm-card--right .vm-card-logo--fallback {

          font-size:
            13px;

        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .vm-card-content {

          position:
            absolute;

          left:
            24px;

          right:
            24px;

          bottom:
            23px;

          z-index:
            6;

        }


        .vm-card-name {

          color:
            var(--vm-white);

          font-size:
            25px;

          font-weight:
            700;

          line-height:
            1;

          letter-spacing:
            -.045em;

        }


        .vm-card-category {

          max-width:
            205px;

          margin-top:
            11px;

          color:
            rgba(245,245,242,.60);

          font-size:
            9px;

          font-weight:
            600;

          line-height:
            1.5;

          letter-spacing:
            .12em;

          text-transform:
            uppercase;

        }


        .vm-card-line {

          width:
            42px;

          height:
            2px;

          margin-top:
            17px;

          background:
            var(--vm-gold);

        }


        /* =====================================================
           ARROWS
        ===================================================== */

        .vm-arrow {

          position:
            absolute;

          top:
            50%;

          z-index:
            20;

          display:
            grid;

          place-items:
            center;

          width:
            66px;

          height:
            66px;

          border:
            1px solid
            rgba(255,255,255,.22);

          border-radius:
            50%;

          background:
            rgba(7,8,8,.72);

          color:
            var(--vm-white);

          cursor:
            pointer;

          transform:
            translateY(-50%);

          transition:
            background .25s ease,
            border-color .25s ease,
            color .25s ease;

        }


        .vm-arrow:hover {

          background:
            var(--vm-gold);

          border-color:
            var(--vm-gold);

          color:
            #080808;

        }


        .vm-arrow:disabled {

          opacity:
            .55;

          cursor:
            default;

        }


        .vm-arrow--left {

          left:
            -2px;

        }


        .vm-arrow--right {

          right:
            -2px;

        }


        /* =====================================================
           PROGRESS
        ===================================================== */

        .vm-progress {

          position:
            absolute;

          left:
            50%;

          bottom:
            2px;

          width:
            235px;

          display:
            flex;

          align-items:
            center;

          gap:
            15px;

          transform:
            translateX(-50%);

          color:
            rgba(245,245,242,.46);

          font-size:
            11px;

          letter-spacing:
            .12em;

        }


        .vm-progress-track {

          flex:
            1;

          height:
            2px;

          overflow:
            hidden;

          background:
            rgba(255,255,255,.14);

        }


        .vm-progress-fill {

          height:
            100%;

          background:
            var(--vm-gold);

          transition:
            width .5s
            cubic-bezier(.16,1,.3,1);

        }


        /* =====================================================
           COMPANY DETAILS
        ===================================================== */

        .vm-company {

          display:
            grid;

          grid-template-columns:
            1.25fr
            .75fr;

          gap:
            70px;

          padding:
            55px 0 0;

          border-top:
            1px solid
            rgba(255,255,255,.07);

          animation:
            vmCompanyIn
            .55s
            cubic-bezier(.16,1,.3,1);

        }


        @keyframes vmCompanyIn {

          from {

            opacity:
              0;

            transform:
              translateY(15px);

          }

          to {

            opacity:
              1;

            transform:
              translateY(0);

          }

        }


        .vm-company-number {

          color:
            var(--vm-gold);

          font-size:
            10px;

          font-weight:
            700;

          letter-spacing:
            .16em;

        }


        .vm-company-name {

          margin:
            13px 0 0;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size:
            clamp(
              45px,
              5vw,
              72px
            );

          font-weight:
            400;

          line-height:
            .9;

          letter-spacing:
            -.055em;

        }


        .vm-company-category {

          margin-top:
            12px;

          color:
            var(--vm-gold-light);

          font-size:
            15px;

        }


        .vm-company-tagline {

          margin-top:
            14px;

          color:
            var(--vm-white);

          font-size:
            15px;

          font-style:
            italic;

          line-height:
            1.5;

        }


        .vm-company-description {

          max-width:
            720px;

          margin-top:
            22px;

          color:
            var(--vm-muted);

          font-size:
            14px;

          line-height:
            1.85;

        }


        /* =====================================================
           META
        ===================================================== */

        .vm-company-meta {

          display:
            flex;

          flex-wrap:
            wrap;

          gap:
            22px;

          margin-top:
            27px;

        }


        .vm-meta-item {

          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          color:
            var(--vm-muted);

          font-size:
            9px;

          letter-spacing:
            .08em;

          text-transform:
            uppercase;

        }


        .vm-meta-item svg {

          color:
            var(--vm-gold);

        }


        /* =====================================================
           OPERATING HIGHLIGHTS
        ===================================================== */

        .vm-points-title {

          margin-bottom:
            14px;

          color:
            var(--vm-gold-light);

          font-size:
            9px;

          font-weight:
            700;

          letter-spacing:
            .16em;

          text-transform:
            uppercase;

        }


        .vm-point {

          display:
            grid;

          grid-template-columns:
            23px 1fr;

          gap:
            10px;

          padding:
            14px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);

          color:
            var(--vm-muted);

          font-size:
            12px;

          line-height:
            1.65;

        }


        .vm-check {

          display:
            grid;

          place-items:
            center;

          width:
            19px;

          height:
            19px;

          border:
            1px solid
            var(--vm-gold);

          border-radius:
            50%;

          color:
            var(--vm-gold);

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .vm-card {

            width:
              250px;

            height:
              340px;

          }


          .vm-card--center {

            transform:

              translate3d(
                -50%,
                -50%,
                65px
              )

              scale(1.07);

          }


          .vm-card--left {

            transform:

              translate3d(
                calc(-50% - 270px),
                -50%,
                -35px
              )

              rotateY(3deg)

              scale(.95);

          }


          .vm-card--right {

            transform:

              translate3d(
                calc(-50% + 270px),
                -50%,
                -35px
              )

              rotateY(-3deg)

              scale(.95);

          }


          .vm-card-logo {

            width:
              120px;

            height:
              120px;

          }


          .vm-card--center .vm-card-logo {

            width:
              140px;

            height:
              140px;

          }


          .vm-group-header {

            grid-template-columns:
              1fr;

            gap:
              25px;

          }


          .vm-company {

            grid-template-columns:
              1fr;

            gap:
              45px;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 720px) {

          .vm-container {

            width:
              calc(100% - 30px);

          }


          .vm-hero {

            min-height:
              680px;

          }


          .vm-hero-inner {

            min-height:
              680px;

            padding:
              100px 0
              60px;

          }


          .vm-heading {

            width:
              100%;

          }


          .vm-title {

            font-size:
              clamp(
                48px,
                14vw,
                76px
              );

          }


          .vm-description {

            max-width:
              390px;

            font-size:
              13px;

          }


          .vm-hero-background img {

            object-position:
              center center;

            transform:
              none;

          }


          .vm-group {

            padding:
              75px 0
              95px;

          }


          .vm-group-title {

            font-size:
              47px;

          }


          .vm-carousel {

            height:
              370px;

            overflow:
              visible;

            touch-action:
              pan-y;

            user-select:
              none;

          }


          .vm-stage {

            width:
              100%;

            height:
              285px;

          }


          .vm-card {

            width:
              170px;

            height:
              250px;

            padding:
              18px;

          }


          .vm-card--left {

            transform:

              translate3d(
                calc(-50% - 142px),
                -50%,
                -45px
              )

              rotateY(3deg)

              scale(.84);

            opacity:
              .55;

          }


          .vm-card--right {

            transform:

              translate3d(
                calc(-50% + 142px),
                -50%,
                -45px
              )

              rotateY(-3deg)

              scale(.84);

            opacity:
              .55;

          }


          .vm-card--center {

            transform:

              translate3d(
                -50%,
                -50%,
                50px
              )

              scale(1.02);

          }


          .vm-card-logo {

            width:
              92px;

            height:
              92px;

          }


          .vm-card--center .vm-card-logo {

            width:
              110px;

            height:
              110px;

          }


          .vm-card--left .vm-card-logo,
          .vm-card--right .vm-card-logo {

            width:
              84px;

            height:
              84px;

          }


          .vm-card-name {

            font-size:
              18px;

          }


          .vm-card-category {

            font-size:
              7px;

          }


          .vm-card-content {

            left:
              18px;

            right:
              18px;

            bottom:
              18px;

          }


          .vm-arrow {

            width:
              40px;

            height:
              40px;

          }


          .vm-arrow--left {

            left:
              -4px;

          }


          .vm-arrow--right {

            right:
              -4px;

          }


          .vm-progress {

            width:
              150px;

          }


          .vm-company {

            padding-top:
              40px;

          }


          .vm-company-name {

            font-size:
              47px;

          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 450px) {

          .vm-title {

            font-size:
              46px;

          }


          .vm-card {

            width:
              150px;

            height:
              225px;

          }


          .vm-card--left {

            transform:

              translate3d(
                calc(-50% - 120px),
                -50%,
                -45px
              )

              rotateY(3deg)

              scale(.80);

          }


          .vm-card--right {

            transform:

              translate3d(
                calc(-50% + 120px),
                -50%,
                -45px
              )

              rotateY(-3deg)

              scale(.80);

          }


          .vm-card-logo {

            width:
              78px;

            height:
              78px;

          }


          .vm-card--center .vm-card-logo {

            width:
              96px;

            height:
              96px;

          }


          .vm-card--left .vm-card-logo,
          .vm-card--right .vm-card-logo {

            width:
              70px;

            height:
              70px;

          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ventures-modern *,
          .ventures-modern *::before,
          .ventures-modern *::after {

            animation-duration:
              .01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              .01ms !important;

          }

        }
          /* =====================================================
   LIGHT THEME — VENTURES
===================================================== */

[data-theme="light"] .ventures-modern {
  --vm-bg: #f7f7f4;
  --vm-panel: #ffffff;

  --vm-white: #171717;
  --vm-muted: rgba(23, 23, 23, .68);
  --vm-soft: rgba(23, 23, 23, .42);
  --vm-line: rgba(23, 23, 23, .14);

  --vm-gold: #b58a3a;
  --vm-gold-light: #9a742f;

  background: var(--vm-bg);
  color: var(--vm-white);
}

/* Hero */

[data-theme="light"] .ventures-modern .vm-hero {
  background: #f7f7f4;
  border-bottom-color: rgba(23, 23, 23, .10);
}

[data-theme="light"] .ventures-modern .vm-hero-background img {
  filter:
    brightness(1.12)
    contrast(.92)
    saturate(.82);
}

[data-theme="light"] .ventures-modern .vm-hero-overlay {
  background:
    linear-gradient(
      90deg,
      rgba(247,247,244,.94) 0%,
      rgba(247,247,244,.78) 38%,
      rgba(247,247,244,.40) 68%,
      rgba(247,247,244,.16) 100%
    ),
    linear-gradient(
      180deg,
      rgba(247,247,244,.12) 0%,
      rgba(247,247,244,.05) 50%,
      rgba(247,247,244,.48) 100%
    );
}

[data-theme="light"] .ventures-modern .vm-title {
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-title span:first-child {
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-title span:nth-child(2),
[data-theme="light"] .ventures-modern .vm-title span:nth-child(3) {
  color: #9a742f;
}

[data-theme="light"] .ventures-modern .vm-hero-tagline {
  color: #9a742f;
}

[data-theme="light"] .ventures-modern .vm-description {
  color: rgba(23, 23, 23, .70);
  text-shadow: none;
}

[data-theme="light"] .ventures-modern .vm-explore {
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-explore-icon {
  color: #9a742f;
  background: rgba(255,255,255,.72);
  border-color: #b58a3a;
}

/* Venture group */

[data-theme="light"] .ventures-modern .vm-group {
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(181,138,58,.10),
      transparent 42%
    ),
    #f7f7f4;
}

[data-theme="light"] .ventures-modern .vm-group-intro {
  color: rgba(23, 23, 23, .65);
}

[data-theme="light"] .ventures-modern .vm-group-title {
  color: #171717;
}

/* Cards */

[data-theme="light"] .ventures-modern .vm-carousel {
  background: transparent;
}

[data-theme="light"] .ventures-modern .vm-card {
  border-color: rgba(23,23,23,.15);

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.98),
      rgba(244,243,238,.98)
    );

  box-shadow:
    0 18px 45px rgba(0,0,0,.08);
}

[data-theme="light"] .ventures-modern .vm-card::before {
  background:
    radial-gradient(
      circle at 50% 42%,
      rgba(181,138,58,.09),
      transparent 42%
    ),
    linear-gradient(
      145deg,
      rgba(181,138,58,.06),
      transparent 42%
    );
}

[data-theme="light"] .ventures-modern .vm-card--center {
  border-color: #b58a3a;

  box-shadow:
    0 0 0 1px rgba(181,138,58,.10),
    0 20px 55px rgba(0,0,0,.12);
}

[data-theme="light"] .ventures-modern .vm-card-name {
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-card-category {
  color: rgba(23,23,23,.58);
}

[data-theme="light"] .ventures-modern .vm-card-icon {
  border-color: rgba(181,138,58,.40);
  color: #9a742f;
}

[data-theme="light"] .ventures-modern .vm-card-number {
  color: #9a742f;
}

/* Logos */

[data-theme="light"] .ventures-modern .vm-card--center .vm-card-logo {
  background: #ffffff;
  border-color: #b58a3a;

  box-shadow:
    0 0 0 1px rgba(181,138,58,.12),
    0 12px 35px rgba(0,0,0,.12);
}

/* Arrows */

[data-theme="light"] .ventures-modern .vm-arrow {
  border-color: rgba(23,23,23,.20);
  background: rgba(255,255,255,.90);
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-arrow:hover {
  background: #b58a3a;
  border-color: #b58a3a;
  color: #ffffff;
}

/* Progress */

[data-theme="light"] .ventures-modern .vm-progress {
  color: rgba(23,23,23,.48);
}

[data-theme="light"] .ventures-modern .vm-progress-track {
  background: rgba(23,23,23,.14);
}

/* Company details */

[data-theme="light"] .ventures-modern .vm-company {
  border-top-color: rgba(23,23,23,.10);
}

[data-theme="light"] .ventures-modern .vm-company-name {
  color: #171717;
}

[data-theme="light"] .ventures-modern .vm-company-category {
  color: #9a742f;
}

[data-theme="light"] .ventures-modern .vm-company-tagline {
  color: #242424;
}

[data-theme="light"] .ventures-modern .vm-company-description {
  color: rgba(23,23,23,.68);
}

[data-theme="light"] .ventures-modern .vm-meta-item {
  color: rgba(23,23,23,.55);
}

[data-theme="light"] .ventures-modern .vm-point {
  color: rgba(23,23,23,.68);
  border-bottom-color: rgba(23,23,23,.09);
}

[data-theme="light"] .ventures-modern .vm-points-title {
  color: #9a742f;
}

      `}</style>




      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="vm-hero"
        id="group-of-companies"
      >

        <div className="vm-hero-background">

          <img
            src="/images/ventures/olynto-group-of-companies.jpeg"
            alt=""
            draggable="false"
          />

        </div>


        <div className="vm-hero-overlay" />


        <div className="vm-container">

          <div className="vm-hero-inner">

            <div className="vm-heading">

              <div className="vm-eyebrow">
                04 / Operating Portfolio
              </div>


              <h1 className="vm-title">

                <span>
                  The Olynto
                </span>

                <span>
                  Group of
                </span>

                <span>
                  Companies
                </span>

              </h1>


              <div className="vm-hero-line" />


              <p className="vm-hero-tagline">
                One Group. Three Ventures.
              </p>


              <p className="vm-description">
                Different verticals. One Olynto
                standard — focused businesses
                built around real opportunities,
                disciplined execution, and
                long-term value creation.
              </p>


              <a
                href="#ventures"
                className="vm-explore"
              >

                <span className="vm-explore-icon">

                  <ArrowDown
                    size={17}
                  />

                </span>

                Explore Ventures

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VENTURE PORTFOLIO
      ===================================================== */}

      <section
        id="ventures"
        className="vm-group"
      >

        <div className="vm-container">


          <div className="vm-group-header">

            <div>

              <div className="vm-group-label">
                The Olynto Group
              </div>


              <h2 className="vm-group-title">

                Three ventures.
                <br />
                One standard.

              </h2>

            </div>


            <p className="vm-group-intro">

              Explore the businesses being built
              under Olynto LLP — each focused on
              a different opportunity, connected
              by one operating philosophy.

            </p>

          </div>


          {/* =================================================
              CAROUSEL
          ================================================= */}

          <div
            className="vm-carousel"

            onPointerDown={
              handlePointerDown
            }

            onPointerUp={
              handlePointerUp
            }

            onPointerCancel={() =>
              setDragStart(null)
            }
          >

            <div className="vm-stage">

              {companies.map(
                (
                  company,
                  index
                ) => {

                  const position =
                    getRelativePosition(
                      index
                    );


                  let className =
                    'vm-card--hidden';


                  if (
                    position === 0
                  ) {

                    className =
                      'vm-card--center';

                  }


                  if (
                    position === -1
                  ) {

                    className =
                      'vm-card--left';

                  }


                  if (
                    position === 1
                  ) {

                    className =
                      'vm-card--right';

                  }


                  const Icon =
                    company.icon;


                  return (

                    <article
                      key={
                        company.number
                      }

                      className={`
                        vm-card
                        ${className}
                      `}

                      onClick={() =>
                        selectCompany(
                          index
                        )
                      }

                      aria-label={
                        `View ${company.name}`
                      }
                    >


                      {/* CARD TOP */}

                      <div className="vm-card-top">

                        <span className="vm-card-number">
                          {company.number}
                        </span>


                        <span className="vm-card-icon">

                          <Icon
                            size={18}
                            strokeWidth={1.5}
                          />

                        </span>

                      </div>


                      {/* =================================================
                          LOGO
                      ================================================= */}

                      {company.logo ? (

                        <img
                          src={
                            company.logo
                          }

                          alt={
                            `${company.name} logo`
                          }

                          className="vm-card-logo"

                          draggable="false"
                        />

                      ) : (

                        <div
                          className="
                            vm-card-logo
                            vm-card-logo--fallback
                          "
                          aria-hidden="true"
                        >

                          <ShoppingBag
                            size={36}
                            strokeWidth={1.5}
                          />

                          <span>
                            NoQkart
                          </span>

                        </div>

                      )}


                      {/* CARD CONTENT */}

                      <div className="vm-card-content">

                        <div className="vm-card-name">
                          {company.name}
                        </div>


                        <div className="vm-card-category">
                          {company.category}
                        </div>


                        <div className="vm-card-line" />

                      </div>

                    </article>

                  );

                }
              )}

            </div>


            {/* =================================================
                LEFT ARROW
            ================================================= */}

            <button
              type="button"

              className="
                vm-arrow
                vm-arrow--left
              "

              onClick={
                previousCompany
              }

              disabled={
                isMoving
              }

              aria-label="Previous venture"
            >

              <ArrowLeft
                size={21}
              />

            </button>


            {/* =================================================
                RIGHT ARROW
            ================================================= */}

            <button
              type="button"

              className="
                vm-arrow
                vm-arrow--right
              "

              onClick={
                nextCompany
              }

              disabled={
                isMoving
              }

              aria-label="Next venture"
            >

              <ArrowRight
                size={21}
              />

            </button>


            {/* =================================================
                PROGRESS
            ================================================= */}

            <div className="vm-progress">

              <span>
                {activeCompany.number}
              </span>


              <div className="vm-progress-track">

                <div
                  className="vm-progress-fill"

                  style={{
                    width:
                      `${(
                        (activeIndex + 1) /
                        companies.length
                      ) * 100
                      }%`,
                  }}
                />

              </div>


              <span>
                03
              </span>

            </div>

          </div>


          {/* =================================================
              ACTIVE COMPANY DETAILS
          ================================================= */}

          <div
            className="vm-company"

            key={
              activeCompany.number
            }
          >

            <div>

              <div className="vm-company-number">
                {activeCompany.number}
              </div>


              <h3 className="vm-company-name">
                {activeCompany.name}
              </h3>


              <div className="vm-company-category">
                {activeCompany.category}
              </div>


              <p className="vm-company-tagline">
                {activeCompany.tagline}
              </p>


              <p className="vm-company-description">
                {activeCompany.description}
              </p>


              <div className="vm-company-meta">

                <span className="vm-meta-item">

                  <MapPin
                    size={13}
                  />

                  {activeCompany.location}

                </span>


                <span className="vm-meta-item">

                  {(() => {

                    const ActiveIcon =
                      activeCompany.icon;

                    return (

                      <ActiveIcon
                        size={13}
                      />

                    );

                  })()}

                  {activeCompany.shortCategory}

                </span>

              </div>

            </div>


            <div>

              <div className="vm-points-title">
                Operating Highlights
              </div>


              {activeCompany.points.map(
                (
                  point,
                  index
                ) => (

                  <div
                    key={
                      `${activeCompany.number}-${index}`
                    }

                    className="vm-point"
                  >

                    <span className="vm-check">

                      <Check
                        size={11}
                      />

                    </span>


                    <span>
                      {point}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>

  );
}