import React, { useEffect, useRef, useState } from 'react';
import {
  Eye,
  Rocket,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function VisionMission() {
  // null = Olynto LLP is initially shown in the centre
  const [activeMission, setActiveMission] = useState(null);

  const ref = useRef(null);

  // Mobile swipe support
  const mobileTouchStart = useRef(null);
  const mobileTouchEnd = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }),
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll('.reveal')
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    {
      title: 'Value Creation',
      desc: 'Build ventures that create measurable, long-term value — for customers first, and for shareholders as a result.',
      highlight: 'Customers First',
    },
    {
      title: 'Underserved Markets',
      desc: 'Enter markets that are underserved rather than overcrowded, and out-execute rather than out-spend.',
      highlight: 'Execution Over Spend',
    },
    {
      title: 'Global Benchmark',
      desc: "Hold every product and service to a global quality benchmark, regardless of where it's built.",
      highlight: 'Uncompromising Quality',
    },
    {
      title: 'Operating Autonomy',
      desc: 'Give every operating business the autonomy to move fast, backed by the credibility of the Olynto name.',
      highlight: 'Speed & Credibility',
    },
    {
      title: 'Community Growth',
      desc: 'Grow globally while staying accountable to the communities and markets we start in.',
      highlight: 'Global + Local',
    },
  ];

  /*
   * Five permanent positions around the desktop orbit.
   *
   * IMPORTANT:
   * All five missions are ALWAYS rendered.
   * Clicking a mission only changes the centre content.
   */
  const orbitSlots = [
    'mission-orbit__node--top',
    'mission-orbit__node--right',
    'mission-orbit__node--bottom-right',
    'mission-orbit__node--bottom-left',
    'mission-orbit__node--left',
  ];

  /*
   * ALL FIVE MISSIONS ALWAYS STAY IN THE DESKTOP ORBIT.
   */
  const orbitMissions = missionPoints;

  /*
   * ---------------------------------------------------------
   * MOBILE HELPERS
   * ---------------------------------------------------------
   */

  const mobileActiveIndex =
    activeMission === null ? 0 : activeMission;

  const handleMobileTouchStart = (event) => {
    mobileTouchStart.current = event.changedTouches[0].clientX;
    mobileTouchEnd.current = null;
  };

  const handleMobileTouchEnd = (event) => {
    mobileTouchEnd.current = event.changedTouches[0].clientX;

    if (
      mobileTouchStart.current === null ||
      mobileTouchEnd.current === null
    ) {
      return;
    }

    const distance =
      mobileTouchStart.current - mobileTouchEnd.current;

    const minimumSwipeDistance = 45;

    // Swipe left → next mission
    if (distance > minimumSwipeDistance) {
      setActiveMission(
        (mobileActiveIndex + 1) % missionPoints.length
      );
    }

    // Swipe right → previous mission
    if (distance < -minimumSwipeDistance) {
      setActiveMission(
        (mobileActiveIndex - 1 + missionPoints.length) %
          missionPoints.length
      );
    }

    mobileTouchStart.current = null;
    mobileTouchEnd.current = null;
  };

  const activeMobileMission =
    missionPoints[mobileActiveIndex];

  return (
    <section
      id="vision-mission"
      className="section-light"
      ref={ref}
    >
      <div className="container">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div
          className="reveal"
          style={{ marginBottom: '42px' }}
        >
          <span className="section-eyebrow">
            <Eye size={12} />
            02 / Purpose & Direction
          </span>

          <h2
            className="section-title section-title--green"
            style={{ marginTop: '12px' }}
          >
            Vision & Mission
          </h2>
        </div>


        {/* =====================================================
            VISION BANNER
            ===================================================== */}

        <div
          className="reveal vision-card"
          style={{ marginBottom: '56px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                background: 'var(--clr-green)',
                borderRadius: 'var(--radius-sm)',
                flexShrink: 0,
              }}
            >
              <Eye size={28} color="#fff" />
            </div>

            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--clr-green-light)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Our Vision Statement
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.5,
                }}
              >
                "To build a globally respected group of businesses that
                transforms how people work, learn, trade, and access essential
                products — through innovation, sustainability, and relentless
                customer focus."
              </h3>
            </div>
          </div>
        </div>


        {/* =====================================================
            MISSION HEADING
            ===================================================== */}

        <div
          className="reveal"
          style={{ marginBottom: '18px' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <Rocket
              size={20}
              color="var(--clr-green)"
            />

            <h3
              className="font-heading"
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--clr-ink)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Our Mission Directives
            </h3>

            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--clr-green)',
                marginLeft: 'auto',
                background: 'var(--clr-green-soft)',
                padding: '4px 10px',
                borderRadius: '100px',
                border: '1px solid var(--clr-border)',
              }}
            >
              5 Pillars
            </span>
          </div>

          <p
            style={{
              margin: 0,
              color: 'var(--clr-muted)',
              fontSize: '0.85rem',
              lineHeight: 1.7,
              maxWidth: '650px',
            }}
          >
            Select a mission directive to bring it into focus.
          </p>
        </div>


        {/* =====================================================
            DESKTOP / TABLET INTERACTIVE MISSION ORBIT

            IMPORTANT:
            This entire existing orbit is preserved.
            CSS will hide it ONLY on mobile.
            ===================================================== */}

        <div className="mission-orbit reveal">

          {/* =================================================
              ORBIT RINGS
              ================================================= */}

          <div className="mission-orbit__ring mission-orbit__ring--outer" />
          <div className="mission-orbit__ring mission-orbit__ring--inner" />


          {/* =================================================
              ROTATING ORBIT
              ================================================= */}

          <div className="mission-orbit__rotating">

            {orbitMissions.map((mission, slotIndex) => {

              const originalIndex = missionPoints.findIndex(
                (item) => item.title === mission.title
              );

              return (
                <button
                  key={mission.title}
                  type="button"
                  className={`mission-orbit__node ${
                    orbitSlots[slotIndex]
                  }`}
                  onClick={() =>
                    setActiveMission(originalIndex)
                  }
                  aria-label={`View ${mission.title}`}
                >

                  {/* =================================================
                      VISIBLE ORBIT CARD
                      ================================================= */}

                  <span className="mission-orbit__node-content">

                    <span className="mission-orbit__node-number">
                      0{originalIndex + 1}
                    </span>

                    <span className="mission-orbit__node-title">
                      {mission.title}
                    </span>

                    <ChevronRight size={16} />

                  </span>

                </button>
              );
            })}

          </div>


          {/* =================================================
              DESKTOP CENTRE CARD
              ================================================= */}

          <div className="mission-orbit__center">

            {activeMission === null ? (

              /* =================================================
                 INITIAL STATE
                 ================================================= */

              <div className="mission-orbit__brand-state">

                <div className="mission-orbit__brand-icon">
                  <Sparkles size={25} />
                </div>

                <span className="mission-orbit__brand-label">
                  OLYNTO LLP
                </span>

                <h3>
                  Five Principles.
                  <br />
                  One Direction.
                </h3>

                <p>
                  Our mission directives define how Olynto
                  builds, operates, and grows its ventures.
                </p>

                <div className="mission-orbit__brand-footer">

                  <span>
                    MISSION ARCHITECTURE
                  </span>

                  <span>
                    05 PILLARS
                  </span>

                </div>

              </div>

            ) : (

              /* =================================================
                 SELECTED MISSION
                 ================================================= */

              <div
                key={missionPoints[activeMission].title}
                className="mission-orbit__mission-state"
              >

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '18px',
                  }}
                >

                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'var(--clr-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Directive{' '}
                    {String(activeMission + 1).padStart(2, '0')}
                    {' / 05'}
                  </span>

                  <span
                    style={{
                      background: 'var(--clr-green)',
                      color: '#fff',
                      fontSize: '0.6rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '5px 10px',
                      borderRadius: '100px',
                    }}
                  >
                    {missionPoints[activeMission].highlight}
                  </span>

                </div>


                <div className="mission-orbit__mission-icon">
                  <Rocket size={21} />
                </div>

                <h3>
                  {missionPoints[activeMission].title}
                </h3>

                <p>
                  {missionPoints[activeMission].desc}
                </p>

                <div className="mission-orbit__mission-footer">

                  <CheckCircle2 size={15} />

                  <span>
                    Olynto Standard Quality Benchmark
                  </span>

                </div>

              </div>

            )}

          </div>

        </div>


        {/* =====================================================
            MOBILE VISION & MISSION EXPERIENCE

            This is completely separate from the desktop orbit.
            CSS displays this ONLY on mobile.
            ===================================================== */}

        <div
          className="mission-mobile"
          onTouchStart={handleMobileTouchStart}
          onTouchEnd={handleMobileTouchEnd}
        >

          {/* =================================================
              MOBILE INTRO
              ================================================= */}

          <div className="mission-mobile__intro">

            <span className="mission-mobile__eyebrow">
              OUR MISSION
            </span>

            <p>
              Select a mission directive to bring it into focus.
            </p>

          </div>


          {/* =================================================
              MOBILE CENTRAL CIRCLE
              ================================================= */}

          <div className="mission-mobile__center">

            <div className="mission-mobile__center-ring">

              <div className="mission-mobile__center-glow" />

              <div className="mission-mobile__center-content">

                <div className="mission-mobile__brand-icon">
                  <Sparkles size={24} />
                </div>

                <span className="mission-mobile__brand">
                  OLYNTO LLP
                </span>

                <h3>
                  Five Principles.
                  <br />
                  One Direction.
                </h3>

                <p>
                  Our mission directives define how Olynto
                  builds, operates, and grows its ventures.
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              MOBILE ACTIVE MISSION CARD
              ================================================= */}

          <div
            className="mission-mobile__card"
            key={activeMobileMission.title}
          >

            <div className="mission-mobile__card-top">

              <span className="mission-mobile__number">
                0{mobileActiveIndex + 1}
              </span>

              <Rocket size={19} />

            </div>

            <h3>
              {activeMobileMission.title}
            </h3>

            <p>
              {activeMobileMission.desc}
            </p>

            <span className="mission-mobile__highlight">
              {activeMobileMission.highlight}
            </span>

          </div>


          {/* =================================================
              MOBILE NUMBER SELECTOR
              ================================================= */}

          <div className="mission-mobile__selector">

            {missionPoints.map((mission, index) => (

              <button
                key={mission.title}
                type="button"
                className={`mission-mobile__selector-item ${
                  mobileActiveIndex === index
                    ? 'is-active'
                    : ''
                }`}
                onClick={() => setActiveMission(index)}
                aria-label={`View ${mission.title}`}
                aria-current={
                  mobileActiveIndex === index
                    ? 'true'
                    : undefined
                }
              >
                <span>
                  0{index + 1}
                </span>
              </button>

            ))}

          </div>


          {/* =================================================
              MOBILE INSTRUCTION
              ================================================= */}

          <div className="mission-mobile__instruction">
            SWIPE OR TAP TO EXPLORE
          </div>

        </div>

      </div>
    </section>
  );
}