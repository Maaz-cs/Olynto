import React, { useEffect, useState } from 'react';
import {
  ShoppingBag,
  Sprout,
  GraduationCap,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  MapPin,
  Cpu,
  Check,
} from 'lucide-react';

const ventures = [
  {
    id: 'noqkart',
    number: '01',
    name: 'NoQkart',
    category: 'Hyperlocal Commerce & Booking',
    tagline: 'Skip the queue. Book, order, arrive — instantly.',
    icon: ShoppingBag,
    location: 'Phased City Rollout: Belagavi, Karnataka',
    badge: 'React Native Platform',
    summary:
      "NoQkart is Olynto's hyperlocal booking and ordering platform, built to remove the single most common friction point in local commerce: the wait. It connects nearby customers directly to local businesses — from food and retail to services — for real-time ordering, booking, and queue-free fulfilment.",
    points: [
      'A mobile-first platform (React Native) with a live, real-time backend, built for speed and reliability at the neighbourhood level.',
      'Launching zone-by-zone rather than city-wide, so every launch market gets a genuinely reliable, well-serviced experience before the next one opens.',
      'Built and led by a dedicated in-house engineering and execution team under Olynto LLP.',
    ],
  },
  {
    id: 'iamroot',
    number: '02',
    name: 'I AM ROOT™',
    category: 'Organic Agriculture & Natural Products',
    tagline:
      'From root to shelf — naturally sourced, thoughtfully crafted.',
    icon: Sprout,
    logo: '/images/ventures/i-am-root.jpeg',
    location: 'India · Building for Domestic & Global Markets',
    badge: 'Natural Products',
    summary:
      'I AM ROOT™ is Olynto’s agriculture and natural-products venture, focused on exploring responsibly sourced ingredients and creating simple, natural products for modern consumers. The venture is currently being developed around a farm-to-market approach with an emphasis on quality, transparency, and sustainable sourcing.',
    points: [
      'Exploring naturally sourced agricultural products with a focus on quality, simplicity, and responsible sourcing.',
      'Building a farm-to-market model designed to connect authentic agricultural products with modern consumers.',
      'Developing product concepts and packaging with future domestic and international markets in mind.',
      'Creating a foundation for a broader portfolio of natural, agriculture-based products under the I AM ROOT™ brand.',
    ],
  },
  {
    id: 'elevate',
    number: '03',
    name: 'Olynto Elevate',
    category: 'Education & Skill Development',
    tagline:
      'Learn practical skills. Build real projects. Move forward.',
    icon: GraduationCap,
    logo: '/images/ventures/olynto-elevate.png',
    location: 'India · Student & Early-Career Focus',
    badge: 'Skills & Innovation',
    summary:
      'Olynto Elevate is a learning and skill-development initiative focused on helping students and early-career professionals build practical, industry-oriented capabilities. The initiative is designed around hands-on learning, guided projects, and exposure to modern technologies that can help learners move from classroom concepts to practical application.',
    points: [
      'Focused on practical, project-based learning rather than theory alone.',
      'Designed to help learners strengthen technical skills through guided exercises and real-world problem solving.',
      'Exploring programmes across modern technology areas including web development, artificial intelligence, and emerging digital tools.',
      'Building a learning ecosystem that can connect students, mentors, projects, and industry-oriented opportunities.',
    ],
  },
];


const venturesPageStyles = `
  /* ==========================================================
     OLYNTO VENTURES — AUDIT REFINEMENT LAYER
     Scope: .ventures-page only
     Goals: readable type, one primary type family, 3 control
     treatments, stronger hierarchy, clearer interaction.
     ========================================================== */

  .ventures-page {
    --vp-font: "Inter", "Helvetica Neue", Arial, sans-serif;
    --vp-text: #f5f5f2;
    --vp-muted: rgba(245, 245, 242, 0.72);
    --vp-faint: rgba(245, 245, 242, 0.52);
    --vp-line: rgba(245, 245, 242, 0.16);
    --vp-gold: #c9a86a;
    --vp-gold-bright: #e2c487;
    --vp-panel: rgba(255, 255, 255, 0.035);
    --vp-ease: cubic-bezier(0.22, 1, 0.36, 1);

    font-family: var(--vp-font);
  }

  /* -------- One typography system -------- */

  .ventures-page,
  .ventures-page * {
    font-family: var(--vp-font);
  }

  .ventures-page__eyebrow {
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .ventures-page p,
  .ventures-page__summary,
  .ventures-page__point p,
  .ventures-page__closing p {
    font-size: 16px;
    line-height: 1.7;
  }

  .ventures-page__meta,
  .ventures-page__category,
  .ventures-page__brand-category {
    font-size: 14px;
    line-height: 1.5;
  }

  .ventures-page__selector-name,
  .ventures-page__tagline {
    font-size: 16px;
    line-height: 1.45;
  }

  .ventures-page__counter {
    font-size: 14px;
    line-height: 1;
  }

  .ventures-page__navigation button,
  .ventures-page__explore,
  .ventures-page__contact {
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.14em;
  }

  .ventures-page__section-header h2 {
    font-size: clamp(32px, 4.2vw, 48px);
    line-height: 1.02;
  }

  .ventures-page__hero-content h1 {
    font-size: clamp(48px, 8vw, 96px);
    line-height: 0.9;
  }

  .ventures-page__details h3 {
    font-size: clamp(32px, 4vw, 48px);
    line-height: 0.98;
  }

  /* -------- Three interaction treatments --------
     1) primary: contact / major CTA
     2) secondary: venture selector
     3) ghost: previous / next / explore
     Pagination dots are intentionally minimal controls.
  */

  .ventures-page button {
    font: inherit;
  }

  .ventures-page__selector-item {
    border: 1px solid var(--vp-line);
    background: var(--vp-panel);
    color: var(--vp-text);
    transition:
      border-color 260ms var(--vp-ease),
      background 260ms var(--vp-ease),
      transform 260ms var(--vp-ease);
  }

  .ventures-page__selector-item:hover,
  .ventures-page__selector-item:focus-visible {
    border-color: rgba(201, 168, 106, 0.65);
    transform: translateY(-2px);
  }

  .ventures-page__selector-item.is-active {
    border-color: var(--vp-gold);
    background: rgba(201, 168, 106, 0.08);
  }

  .ventures-page__explore,
  .ventures-page__contact {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--vp-text);
    text-decoration: none;
    transition:
      color 220ms ease,
      gap 220ms var(--vp-ease);
  }

  .ventures-page__explore:hover,
  .ventures-page__explore:focus-visible,
  .ventures-page__contact:hover,
  .ventures-page__contact:focus-visible {
    color: var(--vp-gold-bright);
    gap: 14px;
  }

  .ventures-page__explore-line {
    display: block;
    width: 28px;
    height: 1px;
    background: currentColor;
    opacity: 0.7;
  }

  /* -------- Counter: contextually attached to heading -------- */

  .ventures-page__section-heading-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .ventures-page__counter {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 24px;
    color: var(--vp-faint);
  }

  .ventures-page__counter strong {
    color: var(--vp-text);
    font-weight: 500;
  }

  .ventures-page__progress {
    width: 72px;
    height: 1px;
    margin-left: 8px;
    overflow: hidden;
    background: var(--vp-line);
  }

  .ventures-page__progress > span {
    display: block;
    height: 100%;
    background: var(--vp-gold);
    transition: width 500ms var(--vp-ease);
  }

  /* -------- Navigation: one cohesive control group -------- */

  .ventures-page__navigation {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    max-width: 100%;
    gap: 22px;
    margin-top: 34px;
  }

  .ventures-page__navigation > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 40px;
    padding: 8px 0;
    border: 0;
    background: transparent;
    color: var(--vp-muted);
    cursor: pointer;
    transition:
      color 220ms ease,
      transform 220ms var(--vp-ease);
  }

  .ventures-page__navigation > button:hover,
  .ventures-page__navigation > button:focus-visible {
    color: var(--vp-text);
  }

  .ventures-page__navigation > button:first-child:hover,
  .ventures-page__navigation > button:first-child:focus-visible {
    transform: translateX(-3px);
  }

  .ventures-page__navigation > button:last-child:hover,
  .ventures-page__navigation > button:last-child:focus-visible {
    transform: translateX(3px);
  }

  .ventures-page__dots {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 3px;
  }

  .ventures-page__dots button {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 1px solid var(--vp-faint);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition:
      transform 220ms var(--vp-ease),
      background 220ms ease,
      border-color 220ms ease;
  }

  .ventures-page__dots button:hover,
  .ventures-page__dots button:focus-visible {
    border-color: var(--vp-gold);
    transform: scale(1.25);
  }

  .ventures-page__dots button.is-active {
    border-color: var(--vp-gold);
    background: var(--vp-gold);
    transform: scale(1.15);
  }

  /* -------- Readability safeguards -------- */

  .ventures-page__summary {
    max-width: 66ch;
    color: var(--vp-muted);
  }

  .ventures-page__point p {
    color: var(--vp-muted);
  }

  .ventures-page__tagline {
    color: var(--vp-text);
  }

  .ventures-page__meta span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  /* Keep long venture names readable instead of shrinking them. */
  .ventures-page__brand-name,
  .ventures-page__details h3 {
    overflow-wrap: anywhere;
  }

  /* Keyboard accessibility without changing the visual language. */
  .ventures-page button:focus-visible,
  .ventures-page a:focus-visible {
    outline: 1px solid var(--vp-gold);
    outline-offset: 5px;
  }

  /* -------- Responsive corrections -------- */

  @media (max-width: 900px) {
    .ventures-page__section-header {
      display: block;
    }

    .ventures-page__counter {
      margin-top: 20px;
    }

    .ventures-page__navigation {
      margin-right: auto;
      margin-left: auto;
    }
  }

  @media (max-width: 640px) {
    .ventures-page__hero-content h1 {
      font-size: clamp(48px, 15vw, 72px);
    }

    .ventures-page p,
    .ventures-page__summary,
    .ventures-page__point p,
    .ventures-page__closing p {
      font-size: 16px;
      line-height: 1.65;
    }

    .ventures-page__navigation {
      gap: 14px;
    }

    .ventures-page__navigation > button {
      min-height: 44px;
    }

    .ventures-page__explore-line {
      width: 22px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ventures-page *,
    .ventures-page *::before,
    .ventures-page *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

export default function VenturesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  });
}, []);

  const active = ventures[activeIndex];
  const ActiveIcon = active.icon;

 const goNext = () => {
  setDirection('next');

  setActiveIndex(
    (current) => (current + 1) % ventures.length
  );
};

const goPrevious = () => {
  setDirection('previous');

  setActiveIndex(
    (current) =>
      (current - 1 + ventures.length) %
      ventures.length
  );
};

const selectVenture = (index) => {
  if (index === activeIndex) return;

  setDirection(
    index > activeIndex
      ? 'next'
      : 'previous'
  );

  setActiveIndex(index);
};
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goNext();
    }

    if (event.key === 'ArrowLeft') {
      goPrevious();
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
}, []);
useEffect(() => {
  const handleMouseMove = (event) => {
    const x =
      (event.clientX /
        window.innerWidth -
        0.5) *
      2;

    const y =
      (event.clientY /
        window.innerHeight -
        0.5) *
      2;

    setMousePosition({
      x,
      y,
    });
  };

  window.addEventListener(
    'mousemove',
    handleMouseMove
  );

  return () => {
    window.removeEventListener(
      'mousemove',
      handleMouseMove
    );
  };
}, []);

  return (
    <>
      <style>{venturesPageStyles}</style>
      <main className="ventures-page">

      {/* =====================================================
          HERO
         ===================================================== */}

      <section className="ventures-page__hero">

        <div className="ventures-page__hero-glow"></div>

        <div className="container">

          <div className="ventures-page__hero-content">

            <span className="ventures-page__eyebrow">
              04 / Operating Portfolio
            </span>

            <h1>
              OUR
              <span>VENTURES</span>
            </h1>

            <p>
              Three focused ventures. Different
              verticals. One Olynto standard.
            </p>

            <a
              className="ventures-page__scroll ventures-page__explore"
              href="#ventures-showcase"
              aria-label="Explore Olynto ventures"
            >
              <span className="ventures-page__explore-line" aria-hidden="true"></span>
              <span>EXPLORE</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          VENTURE SHOWCASE
         ===================================================== */}

      <section
        id="ventures-showcase"
        className="ventures-page__showcase"
      >

        <div className="container">

          {/* Header */}

          <div className="ventures-page__section-header">

            <div className="ventures-page__section-heading-group">
              <span className="ventures-page__eyebrow">
                House of Brands
              </span>

              <h2>
                Built to solve.
                <br />
                <span>Built to grow.</span>
              </h2>

              <div
                className="ventures-page__counter"
                aria-label={`Showing venture ${active.number} of ${ventures.length}`}
              >
                <strong>{active.number}</strong>
                <span>/ 03</span>
                <div className="ventures-page__progress" aria-hidden="true">
                  <span
                    style={{
                      width: `${((activeIndex + 1) / ventures.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Venture selector */}

          <div className="ventures-page__selector">

            {ventures.map((venture, index) => {

              const Icon = venture.icon;

              return (
                <button
                  key={venture.id}
                  type="button"
                  className={
                    `ventures-page__selector-item${
                      activeIndex === index
                        ? ' is-active'
                        : ''
                    }`
                  }
                  onClick={() => selectVenture(index)}
                  aria-label={`View ${venture.name}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                >

                  <span className="ventures-page__selector-number">
                    {venture.number}
                  </span>

                  <span className="ventures-page__selector-icon">

                    {venture.logo ? (
                      <img
                        src={venture.logo}
                        alt=""
                      />
                    ) : (
                      <Icon size={19} />
                    )}

                  </span>

                  <span className="ventures-page__selector-name">
                    {venture.name}
                  </span>

                  <ArrowUpRight
                    size={17}
                  />

                </button>
              );
            })}

          </div>

          {/* =================================================
              MAIN VENTURE CARD
             ================================================= */}

          <div
  className={
    `ventures-page__card ${
      direction === 'next'
        ? 'is-next'
        : 'is-previous'
    } venture-${active.id}`
  }
  key={active.id}
>

            {/* Left */}

           <div
  className="ventures-page__visual"
  style={{
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  }}
>
  <div className="ventures-page__visual-grid" />

  <div className="ventures-page__visual-number">
    {active.number}
  </div>

  <div className="ventures-page__visual-orbit orbit-one" />
  <div className="ventures-page__visual-orbit orbit-two" />

  <div className="ventures-page__brand-stage">

    <div className="ventures-page__brand-stage-glow" />

    <div className="ventures-page__brand-logo">

      {active.logo ? (
        <img
          src={active.logo}
          alt={`${active.name} logo`}
        />
      ) : (
        <ActiveIcon
          size={78}
          strokeWidth={1.15}
        />
      )}

    </div>

    <div className="ventures-page__brand-name">
      {active.name}
    </div>

    <div className="ventures-page__brand-category">
      {active.category}
    </div>

  </div>

  <div className="ventures-page__visual-footer">

    <span>OLYNTO LLP</span>

    <span>
      {active.number} / 03
    </span>

  </div>
</div>
            {/* Right */}

            <div className="ventures-page__details">

              <div className="ventures-page__category">
                {active.category}
              </div>

              <h3>
                {active.name}
              </h3>

              <div className="ventures-page__tagline">
                "{active.tagline}"
              </div>

              <div className="ventures-page__meta">

                <span>
                  <MapPin size={14} />
                  {active.location}
                </span>

                <span>
                  <Cpu size={14} />
                  {active.badge}
                </span>

              </div>

              <p className="ventures-page__summary">
                {active.summary}
              </p>

              <div className="ventures-page__highlights">

                <span>
                  Operational Highlights
                </span>

                {active.points.map(
                  (point, index) => (

                    <div
                      key={index}
                      className="ventures-page__point"
                    >

                      <div>
                        <Check size={13} />
                      </div>

                      <p>
                        {point}
                      </p>

                    </div>

                  )
                )}

              </div>

              {/* Navigation */}

              <nav
                className="ventures-page__navigation"
                aria-label="Venture navigation"
              >

                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label="Previous venture"
                >
                  <ArrowLeft size={18} />
                  <span>PREVIOUS</span>
                </button>

                <div className="ventures-page__dots">

                  {ventures.map(
                    (_, index) => (

                      <button
                        key={index}
                        type="button"
                        className={
                          activeIndex === index
                            ? 'is-active'
                            : ''
                        }
                       onClick={() =>
  selectVenture(index)
}
                        aria-label={`Go to venture ${index + 1}`}
                      />

                    )
                  )}

                </div>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next venture"
                >
                  <span>NEXT</span>
                  <ArrowRight size={18} />
                </button>

              </nav>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CLOSING SECTION
         ===================================================== */}

      <section className="ventures-page__closing">

        <div className="container">

          <span className="ventures-page__eyebrow">
            Olynto LLP
          </span>

          <h2>
            MORE THAN
            <span>COMPANIES.</span>
          </h2>

          <p>
            A focused portfolio built around
            opportunity, execution, and
            long-term value.
          </p>

          <a
            href="/contact-us"
            className="ventures-page__contact"
          >
            CONNECT WITH OLYNTO
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>

    </main>
    </>
  );
}