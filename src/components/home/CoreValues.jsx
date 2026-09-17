import React, { useEffect, useRef, useState } from 'react';
import {
  Shield,
  Users,
  Zap,
  Briefcase,
  Leaf,
  Award,
  Compass,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function CoreValues() {
  const ref = useRef(null);
  const touchStartX = useRef(null);
  const didSwipe = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      num: '01',
      title: 'Integrity',
      desc: 'We say what we mean and do what we say — with customers, partners, and each other.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'Customer First',
      desc: 'We build for the customer we have, not the customer a slide deck describes.',
      icon: Users,
    },
    {
      num: '03',
      title: 'Speed with Discipline',
      desc: 'We ship, measure, and improve — not perfect, then launch.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Ownership',
      desc: 'Every venture is expected to be sustainable on its own economics, not subsidised indefinitely.',
      icon: Briefcase,
    },
    {
      num: '05',
      title: 'Sustainability',
      desc: 'We choose durable growth over fast growth when the two conflict.',
      icon: Leaf,
    },
    {
      num: '06',
      title: 'One Standard',
      desc: 'Every team, in every venture, operates with the same bar for quality and honesty.',
      icon: Award,
    },
  ];

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % values.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + values.length) % values.length
    );
  };

  const toggleFlip = (event) => {
    /*
     * Do not flip a card when the user has just swiped.
     */
    if (didSwipe.current) {
      return;
    }

    event.currentTarget.classList.toggle('is-flipped');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.classList.toggle('is-flipped');
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    didSwipe.current = false;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    touchStartX.current = null;

    if (Math.abs(difference) < 45) {
      return;
    }

    didSwipe.current = true;

    if (difference > 0) {
      goNext();
    } else {
      goPrevious();
    }

    setTimeout(() => {
      didSwipe.current = false;
    }, 150);
  };

  return (
    <section
      id="core-values"
      className="section-tinted"
      ref={ref}
    >
      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          <div>
            <span className="section-eyebrow">
              <Compass size={12} />
              03 / Operating Principles
            </span>

            <h2
              className="section-title section-title--green"
              style={{
                marginTop: '12px',
              }}
            >
              Core Values
            </h2>
          </div>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--clr-muted)',
              maxWidth: '360px',
              lineHeight: 1.7,
              fontFamily: 'var(--font-body)',
            }}
          >
            Six non-negotiable principles guiding execution across every Olynto
            venture and partner ecosystem.
          </p>
        </div>

        {/* =====================================================
            CORE VALUES GRID
            Desktop = 3 columns × 2 rows
            Mobile = carousel
        ===================================================== */}

        <div
          className="core-values-grid"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            /*
             * Calculate circular distance from active card.
             * This is used ONLY by mobile CSS.
             */
            let offset = index - activeIndex;

            if (offset > values.length / 2) {
              offset -= values.length;
            }

            if (offset < -values.length / 2) {
              offset += values.length;
            }

            return (
              <div
                key={value.num}
                className={`core-value-flip-card reveal ${
                  index === activeIndex ? 'is-active-mobile' : ''
                }`}
                data-mobile-offset={offset}
                role="button"
                tabIndex={0}
                aria-label={`${value.title}. Click to flip card.`}
                onClick={toggleFlip}
                onKeyDown={handleKeyDown}
              >
                <div className="core-value-flip-inner">

                  {/* =================================================
                      FRONT
                  ================================================= */}

                  <div className="core-value-face core-value-front">

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: 'var(--clr-green)',
                          background: 'var(--clr-green-soft)',
                          padding: '4px 10px',
                          borderRadius: '100px',
                          border: '1px solid var(--clr-border)',
                        }}
                      >
                        VALUE {value.num}
                      </span>

                      <div
                        className="card__icon-box"
                        style={{
                          margin: 0,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3
                      className="card__title"
                      style={{
                        fontSize: '1.15rem',
                        margin: 'auto 0',
                        textAlign: 'center',
                      }}
                    >
                      {value.title}
                    </h3>

                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--clr-border)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.65rem',
                          color: 'var(--clr-muted)',
                          fontWeight: 600,
                        }}
                      >
                        STANDARD #{value.num}
                      </span>

                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'var(--clr-green)',
                          display: 'inline-block',
                        }}
                      />
                    </div>

                  </div>

                  {/* =================================================
                      BACK / INFORMATION
                  ================================================= */}

                  <div className="core-value-face core-value-back">

                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: 'var(--clr-green)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      VALUE {value.num}
                    </span>

                    <h3
                      className="card__title"
                      style={{
                        fontSize: '1.2rem',
                        margin: '14px 0',
                        textAlign: 'center',
                      }}
                    >
                      {value.title}
                    </h3>

                    <p
                      className="card__body"
                      style={{
                        textAlign: 'center',
                        margin: 0,
                      }}
                    >
                      {value.desc}
                    </p>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--clr-border)',
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.65rem',
                          color: 'var(--clr-muted)',
                          fontWeight: 600,
                        }}
                      >
                        OLYNTO STANDARD #{value.num}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ===================================================== */}

        <div className="core-values-mobile-controls">

          <button
            type="button"
            className="core-values-mobile-arrow"
            onClick={goPrevious}
            aria-label="Previous core value"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="core-values-mobile-indicator">

            <span>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>

            <span className="core-values-mobile-line" />

            <span>
              {String(values.length).padStart(2, '0')}
            </span>

          </div>

          <button
            type="button"
            className="core-values-mobile-arrow"
            onClick={goNext}
            aria-label="Next core value"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <div className="core-values-mobile-hint">
          SWIPE TO EXPLORE
        </div>

      </div>
    </section>
  );
}