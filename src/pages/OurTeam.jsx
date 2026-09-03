import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Network,
  Cloud,
  Code2,
  Monitor,
  ShieldCheck,
  Layers3,
} from 'lucide-react';

const teamMembers = [
  {
    number: '01',
    name: 'Rudra',
    role: 'Full-Stack Developer',
    focus: 'Full-Stack Development',
    image: '/images/team/rudra.jpg',
    icon: Layers3,
  },
  {
    number: '02',
    name: 'Pragati',
    role: 'Cloud Engineer',
    focus: 'Cloud Engineering',
    image: '/images/team/pragati.jpg',
    icon: Cloud,
  },
  {
    number: '03',
    name: 'Pradeep',
    role: 'Frontend Engineer',
    focus: 'Frontend Engineering',
    image: '/images/team/pradeep.jpg',
    icon: Monitor,
  },
  {
    number: '04',
    name: 'Pratiksha',
    role: 'Software Engineer',
    focus: 'Software Engineering',
    image: '/images/team/pratiksha.jpg',
    icon: Code2,
  },
  {
    number: '05',
    name: 'Saif',
    role: 'Cybersecurity Engineer',
    focus: 'Cybersecurity',
    image: '/images/team/saif.jpg',
    icon: ShieldCheck,
  },
  {
    number: '06',
    name: 'Maaz',
    role: 'Network Engineer',
    focus: 'Network Engineering',
    image: '/images/team/maaz.jpg',
    icon: Network,
  },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isChanging, setIsChanging] = useState(false);

  const activeMember = teamMembers[activeIndex];
  const ActiveIcon = activeMember.icon;

  /* =========================================================
     SCROLL TO TOP
     ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  /* =========================================================
     MEMBER CHANGE
     ========================================================= */

  const changeMember = (newIndex, newDirection = 'next') => {
    if (newIndex === activeIndex || isChanging) return;

    setDirection(newDirection);
    setIsChanging(true);

    window.setTimeout(() => {
      setActiveIndex(newIndex);
      setIsChanging(false);
    }, 180);
  };

  const goNext = () => {
    const nextIndex =
      (activeIndex + 1) % teamMembers.length;

    changeMember(nextIndex, 'next');
  };

  const goPrevious = () => {
    const previousIndex =
      (activeIndex - 1 + teamMembers.length) %
      teamMembers.length;

    changeMember(previousIndex, 'previous');
  };

  /* =========================================================
     KEYBOARD NAVIGATION
     ========================================================= */

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
  });

  /* =========================================================
     TOUCH SWIPE
     ========================================================= */

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(
      event.touches[0].clientX
    );
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd =
      event.changedTouches[0].clientX;

    const distance =
      touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    setTouchStart(null);
  };

  return (
    <main className="our-team-page">

      {/* =====================================================
          BACKGROUND SYSTEM
         ===================================================== */}

      <div
        className="our-team-page__background"
        aria-hidden="true"
      >
        <div className="our-team-page__grid" />

        <div className="our-team-page__orb our-team-page__orb--one" />
        <div className="our-team-page__orb our-team-page__orb--two" />

        <div className="our-team-page__line our-team-page__line--one" />
        <div className="our-team-page__line our-team-page__line--two" />
      </div>

      <div className="our-team-page__container">

        {/* ===================================================
            HERO HEADER
           =================================================== */}

        <header className="our-team-page__header">

          <div className="our-team-page__eyebrow">

            <span className="our-team-page__eyebrow-line" />

            <span>
              OLYNTO / OUR TEAM
            </span>

            <span className="our-team-page__eyebrow-number">
              06 MEMBERS
            </span>

          </div>

          <div className="our-team-page__heading">

            <div>

              <h1>
                PEOPLE
                <br />
                <span>BEHIND THE</span>
                <br />
                PROGRESS.
              </h1>

            </div>

            <div className="our-team-page__intro">

              <div className="our-team-page__intro-mark">
                +
              </div>

              <p>
                Different disciplines.
                <br />
                One direction.
                <br />
                Building what comes next.
              </p>

            </div>

          </div>

        </header>

        {/* ===================================================
            MAIN SHOWCASE
           =================================================== */}

        <section
          className="our-team-showcase"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* =================================================
              LEFT INFORMATION
             ================================================= */}

          <div className="our-team-showcase__info">

            <div className="our-team-showcase__index">

              <span>
                {activeMember.number}
              </span>

              <div />

              <span>
                06
              </span>

            </div>

            <div className="our-team-member-info">

              <div className="our-team-member-info__label">
                CURRENT MEMBER
              </div>

              <div
                className={`our-team-member-info__animated ${
                  isChanging
                    ? direction === 'next'
                      ? 'is-exiting-next'
                      : 'is-exiting-previous'
                    : 'is-visible'
                }`}
              >

                <h2>
                  {activeMember.name}
                </h2>

                <div className="our-team-member-info__role">
                  {activeMember.role}
                </div>

                <div className="our-team-member-info__focus">

                  <ActiveIcon
                    size={17}
                    strokeWidth={1.7}
                  />

                  <span>
                    {activeMember.focus}
                  </span>

                </div>

              </div>

              <div className="our-team-member-info__rule" />

              <p className="our-team-member-info__description">
                Building, connecting and shaping
                technology across the Olynto ecosystem.
              </p>

            </div>

            {/* Controls */}

            <div className="our-team-controls">

              <button
                type="button"
                className="our-team-control"
                onClick={goPrevious}
                aria-label="Previous team member"
              >
                <ArrowLeft size={18} />
              </button>

              <div className="our-team-progress">

                <div className="our-team-progress__numbers">
                  <span>
                    {activeMember.number}
                  </span>

                  <span>
                    / 06
                  </span>
                </div>

                <div className="our-team-progress__track">

                  <div
                    className="our-team-progress__fill"
                    style={{
                      width: `${
                        ((activeIndex + 1) /
                          teamMembers.length) *
                        100
                      }%`,
                    }}
                  />

                </div>

              </div>

              <button
                type="button"
                className="our-team-control"
                onClick={goNext}
                aria-label="Next team member"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

          {/* =================================================
              IMAGE
             ================================================= */}

          <div className="our-team-showcase__visual">

            <div className="our-team-photo-meta">
              <span>
                OLYNTO
              </span>

              <span>
                EST. / PROGRESS
              </span>
            </div>

            <div
              className={`our-team-photo ${
                isChanging
                  ? direction === 'next'
                    ? 'is-changing-next'
                    : 'is-changing-previous'
                  : ''
              }`}
            >

              <div className="our-team-photo__technical">
                <span>01</span>
                <span>06</span>
              </div>

              <div className="our-team-photo__corner our-team-photo__corner--tl" />
              <div className="our-team-photo__corner our-team-photo__corner--tr" />
              <div className="our-team-photo__corner our-team-photo__corner--bl" />
              <div className="our-team-photo__corner our-team-photo__corner--br" />

              <img
                src={activeMember.image}
                alt={`${activeMember.name} — ${activeMember.role}`}
                className="our-team-photo__image"
              />

              <div className="our-team-photo__overlay" />

              <div className="our-team-photo__bottom">

                <span>
                  {activeMember.number}
                </span>

                <span>
                  OLYNTO TEAM
                </span>

              </div>

            </div>

            <div className="our-team-photo-caption">

              <span>
                ENGINEERING / PEOPLE / PROGRESS
              </span>

              <ArrowUpRight size={15} />

            </div>

          </div>

        </section>

        {/* ===================================================
            TEAM MEMBER NAVIGATION
           =================================================== */}

        <section className="our-team-navigation">

          <div className="our-team-navigation__header">

            <span>
              SELECT MEMBER
            </span>

            <span>
              {String(activeIndex + 1).padStart(2, '0')}
              {' '}
              OF 06
            </span>

          </div>

          <div className="our-team-navigation__list">

            {teamMembers.map(
              (member, index) => (
                <button
                  key={member.number}
                  type="button"
                  className={`our-team-member-card ${
                    index === activeIndex
                      ? 'is-active'
                      : ''
                  }`}
                  onClick={() =>
                    changeMember(
                      index,
                      index > activeIndex
                        ? 'next'
                        : 'previous'
                    )
                  }
                >

                  <span className="our-team-member-card__number">
                    {member.number}
                  </span>

                  <span className="our-team-member-card__details">

                    <strong>
                      {member.name}
                    </strong>

                    <small>
                      {member.role}
                    </small>

                  </span>

                  <ArrowUpRight
                    size={16}
                    className="our-team-member-card__arrow"
                  />

                </button>
              )
            )}

          </div>

        </section>

        {/* ===================================================
            BOTTOM STATEMENT
           =================================================== */}

        <section className="our-team-statement">

          <div className="our-team-statement__number">
            06
          </div>

          <div className="our-team-statement__content">

            <span>
              OUR COLLECTIVE
            </span>

            <h3>
              Different skills.
              <br />
              <span>Shared direction.</span>
            </h3>

          </div>

          <p>
            Olynto brings together people working
            across different areas of technology,
            connected by a common direction.
          </p>

        </section>

      </div>

    </main>
  );
}