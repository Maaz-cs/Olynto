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
           FULL-BLEED HERO BACKGROUND
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
        
        display: block;

        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center center;

        filter: brightness(.88) contrast(1.05);

        transform: none;

        transition: none;

        backface-visibility: visible;
       
       }



        /* =====================================================
           CINEMATIC OVERLAY
        ===================================================== */

        .vm-hero-overlay {
     
        position: absolute;

  
        inset: 0;

 
        z-index: -2;

  
        pointer-events: none;

  
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


        /* =====================================================
           EYEBROW
        ===================================================== */

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


        /* =====================================================
           HERO TITLE
        ===================================================== */

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


        /* =====================================================
           GOLD LINE
        ===================================================== */

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


        /* =====================================================
           TAGLINE
        ===================================================== */

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


        /* =====================================================
           DESCRIPTION
        ===================================================== */

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


        /* =====================================================
           EXPLORE
        ===================================================== */

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

          transition:
            background .3s ease,
            color .3s ease;

        }


        .vm-explore:hover
        .vm-explore-icon {

          background:
            var(--vm-gold);

          color:
            #080808;

        }


        /* =====================================================
           VENTURE SECTION
        ===================================================== */

        .vm-group {

          position:
            relative;

          padding:
            110px 0
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
            45px;

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
            14px 0 0;

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
            .92;

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
           CAROUSEL
        ===================================================== */

        .vm-carousel {

          position:
            relative;

          height:
            395px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          perspective:
            1300px;

          touch-action:
            pan-y;

          user-select:
            none;

        }


        .vm-stage {

          position:
            relative;

          width:
            100%;

          height:
            310px;

          transform-style:
            preserve-3d;

        }


        /* =====================================================
           CARD
        ===================================================== */

        .vm-card {

          position:
            absolute;

          top:
            50%;

          left:
            50%;

          width:
            190px;

          height:
            270px;

          padding:
            19px 18px;

          overflow:
            hidden;

          border:
            1px solid
            rgba(255,255,255,.16);

          background:
            linear-gradient(
              145deg,
              rgba(30,31,31,.98),
              rgba(11,12,12,.99)
            );

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
            transform;

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
            linear-gradient(
              145deg,
              rgba(200,164,92,.10),
              transparent 45%
            );

        }


        /* =====================================================
           CENTER
        ===================================================== */

        .vm-card--center {

          z-index:
            10;

          transform:

            translate3d(
              -50%,
              -50%,
              70px
            )

            rotateY(0deg)

            scale(1.04);

          border-color:
            var(--vm-gold);

          box-shadow:

            0 22px 60px
            rgba(0,0,0,.60),

            0 0 38px
            rgba(200,164,92,.14);

        }


        /* =====================================================
           LEFT
        ===================================================== */

        .vm-card--left {

          z-index:
            5;

          transform:

            translate3d(
              calc(-50% - 210px),
              -50%,
              -55px
            )

            rotateY(12deg)

            rotateZ(-1deg)

            scale(.91);

          opacity:
            .72;

          filter:
            brightness(.72);

        }


        /* =====================================================
           RIGHT
        ===================================================== */

        .vm-card--right {

          z-index:
            5;

          transform:

            translate3d(
              calc(-50% + 210px),
              -50%,
              -55px
            )

            rotateY(-12deg)

            rotateZ(1deg)

            scale(.91);

          opacity:
            .72;

          filter:
            brightness(.72);

        }


        /* =====================================================
           HIDDEN
        ===================================================== */

        .vm-card--hidden {

          z-index:
            0;

          transform:

            translate3d(
              -50%,
              -50%,
              -300px
            )

            scale(.6);

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
            3;

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
            10px;

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
            34px;

          height:
            34px;

          border:
            1px solid
            rgba(200,164,92,.27);

          border-radius:
            50%;

          color:
            var(--vm-gold);

        }


        /* =====================================================
           CARD LOGO
        ===================================================== */

        .vm-card-logo {

          position:
            absolute;

          top:
            50%;

          left:
            50%;

          width:
            105px;

          height:
            75px;

          object-fit:
            contain;

          transform:
            translate(
              -50%,
              -50%
            );

          opacity:
            .42;

          filter:
            grayscale(1)
            brightness(1.5);

          pointer-events:
            none;

        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .vm-card-content {

          position:
            absolute;

          left:
            18px;

          right:
            18px;

          bottom:
            18px;

          z-index:
            3;

        }


        .vm-card-name {

          color:
            var(--vm-white);

          font-size:
            21px;

          font-weight:
            700;

          line-height:
            1;

          letter-spacing:
            -.045em;

        }


        .vm-card-category {

          max-width:
            155px;

          margin-top:
            10px;

          color:
            var(--vm-muted);

          font-size:
            8px;

          font-weight:
            600;

          line-height:
            1.5;

          letter-spacing:
            .11em;

          text-transform:
            uppercase;

        }


        .vm-card-line {

          width:
            30px;

          height:
            1px;

          margin-top:
            14px;

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
            43px;

          height:
            43px;

          border:
            1px solid
            rgba(255,255,255,.18);

          border-radius:
            50%;

          background:
            rgba(7,8,8,.92);

          color:
            var(--vm-white);

          cursor:
            pointer;

          transform:
            translateY(-50%);

          transition:
            .25s ease;

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
            0;

        }


        .vm-arrow--right {

          right:
            0;

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
            0;

          width:
            175px;

          display:
            flex;

          align-items:
            center;

          gap:
            13px;

          transform:
            translateX(-50%);

          color:
            var(--vm-soft);

          font-size:
            9px;

          letter-spacing:
            .12em;

        }


        .vm-progress-track {

          flex:
            1;

          height:
            1px;

          overflow:
            hidden;

          background:
            rgba(255,255,255,.13);

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
           ACTIVE COMPANY
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

        @media (max-width: 900px) {

          .vm-hero {

            min-height:
              680px;

          }


          .vm-hero-inner {

            min-height:
              680px;

            padding:
              100px 0
              70px;

          }


          .vm-heading {

            width:
              min(
                700px,
                75vw
              );

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
  
          object-position: center center;

 
          transform: none;

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
              355px;

          }


          .vm-stage {

            height:
              280px;

          }


          .vm-card {

            width:
              165px;

            height:
              240px;

          }


          .vm-card--left {

            transform:

              translate3d(
                calc(-50% - 140px),
                -50%,
                -50px
              )

              rotateY(11deg)

              scale(.86);

            opacity:
              .52;

          }


          .vm-card--right {

            transform:

              translate3d(
                calc(-50% + 140px),
                -50%,
                -50px
              )

              rotateY(-11deg)

              scale(.86);

            opacity:
              .52;

          }


          .vm-card--center {

            transform:

              translate3d(
                -50%,
                -50%,
                55px
              )

              scale(1.02);

          }


          .vm-arrow {

            width:
              39px;

            height:
              39px;

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
              145px;

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
                calc(-50% - 118px),
                -50%,
                -50px
              )

              rotateY(10deg)

              scale(.82);

          }


          .vm-card--right {

            transform:

              translate3d(
                calc(-50% + 118px),
                -50%,
                -50px
              )

              rotateY(-10deg)

              scale(.82);

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

      `}</style>


      {/* =====================================================
          HERO
          FULL-BLEED GROUP IMAGE BACKGROUND
      ===================================================== */}

      <section
        className="vm-hero"
        id="group-of-companies"
      >

        {/* ===================================================
            BACKGROUND IMAGE
            ONLY IMAGE INSTANCE IN HERO
        =================================================== */}

        <div className="vm-hero-background">

          <img
            src="/images/ventures/olynto-group-of-companies.jpeg"
            alt=""
            draggable="false"
          />

        </div>


        {/* ===================================================
            DARK CINEMATIC OVERLAY
        =================================================== */}

        <div className="vm-hero-overlay" />


        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div className="vm-container">

          <div className="vm-hero-inner">


            {/* =================================================
                HERO COPY
            ================================================= */}

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


          {/* =================================================
              SECTION HEADER
          ================================================= */}

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
              3D VENTURE CAROUSEL
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
                            size={17}
                            strokeWidth={1.5}
                          />

                        </span>


                      </div>


                      {/* LOGO */}

                      {company.logo && (

                        <img
                          src={
                            company.logo
                          }

                          alt=""

                          className="vm-card-logo"

                          draggable="false"
                        />

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
                size={17}
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
                size={17}
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


            {/* =================================================
                COMPANY INFORMATION
            ================================================= */}

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


                {/* LOCATION */}

                <span className="vm-meta-item">

                  <MapPin
                    size={13}
                  />

                  {activeCompany.location}

                </span>


                {/* CATEGORY */}

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


            {/* =================================================
                OPERATING HIGHLIGHTS
            ================================================= */}

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