import React, { useEffect, useState } from 'react';
import {
  ShoppingBag,
  Sprout,
  GraduationCap,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
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

            <div className="ventures-page__scroll">
              <span></span>
              EXPLORE
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          VENTURE SHOWCASE
         ===================================================== */}

      <section className="ventures-page__showcase">

        <div className="container">

          {/* Header */}

          <div className="ventures-page__section-header">

            <div>
              <span className="ventures-page__eyebrow">
                House of Brands
              </span>

              <h2>
                Built to solve.
                <br />
                <span>Built to grow.</span>
              </h2>
            </div>

            <div className="ventures-page__counter">
              <strong>{active.number}</strong>
              <span>/ 03</span>
              <div className="ventures-page__progress">
  <span
    style={{
      width: `${((activeIndex + 1) / ventures.length) * 100}%`,
    }}
  />
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
                  onClick={() =>
  selectVenture(index)
}
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

              <div className="ventures-page__navigation">

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

              </div>

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
  );
}