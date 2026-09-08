import React, { useEffect, useRef } from 'react';
import {
  ShieldAlert,
  TrendingUp,
  Cpu,
  Gauge,
  Anchor,
  Award,
  Lightbulb,
  Settings,
  BarChart3,
  RefreshCw,
  Users,
  ArrowRight,
} from 'lucide-react';

export default function Advantage() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        }),
      { threshold: 0.08 }
    );

    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      num: '01',
      title: 'Founder-Led, Not Committee-Run',
      desc: 'Every venture is run by people close to the problem, not managed from a distant head office.',
      icon: ShieldAlert,
    },
    {
      num: '02',
      title: 'Prove It Small, Then Scale',
      desc: 'Each business is validated in one focused market before it is scaled — no premature national rollouts.',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'One Group, Compounding Advantages',
      desc: 'Agriculture, commerce, education, and technology ventures share operating discipline, talent, and brand trust across the group.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Startup Speed',
      desc: 'Lean by design, fast by necessity — the structural advantage every large incumbent has lost.',
      icon: Gauge,
    },
    {
      num: '05',
      title: 'Built to Last',
      desc: 'Traceability, honest sourcing, and durable business models over short-term optics — in every vertical.',
      icon: Anchor,
    },
  ];

  const flywheelSteps = [
    {
      num: '01',
      title: 'IDEAS',
      desc: 'Spot real opportunities',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'BUILD',
      desc: 'Create and execute',
      icon: Settings,
    },
    {
      num: '03',
      title: 'SCALE',
      desc: 'Drive sustainable growth',
      icon: BarChart3,
    },
    {
      num: '04',
      title: 'REINVEST',
      desc: 'Strengthen the ecosystem',
      icon: RefreshCw,
    },
    {
      num: '05',
      title: 'VALUE',
      desc: 'Create lasting impact',
      icon: Users,
    },
  ];

  return (
    <section id="advantage" className="section-tinted" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal advantage-header">
          <span className="section-eyebrow">
            <Award size={12} />
            05 / Competitive Moat
          </span>

          <h2 className="section-title section-title--green">
            The Olynto Advantage
          </h2>

          <p className="section-subtitle">
            Structural execution principles that give Olynto ventures a durable,
            compounding edge in every market we enter.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="advantage-grid">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;

            return (
              <div
                key={idx}
                className="card reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
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
                    ADV {adv.num}
                  </span>

                  <div className="card__icon-box" style={{ margin: 0 }}>
                    <Icon size={18} />
                  </div>
                </div>

                <div className="advantage-card-content">
                  <h3 className="card__title">{adv.title}</h3>

                  <div className="advantage-card-reveal">
                    <p className="card__body">{adv.desc}</p>

                    <span className="advantage-card-action">
                      Explore Advantage →
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--clr-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.65rem',
                      color: 'var(--clr-muted)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Moat Factor
                  </span>

                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'var(--clr-green)',
                      textTransform: 'uppercase',
                    }}
                  >
                    PROVEN
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
    OLYNTO FLYWHEEL
===================================================== */}
<div className="olynto-flywheel reveal">

  {/* LEFT — MESSAGE */}
  <div className="flywheel-copy">

    <div className="flywheel-kicker">
      <span className="flywheel-kicker-line" />
      THE OLYNTO FLYWHEEL
    </div>

    <h3 className="flywheel-heading">
      A cycle that
      <br />
      builds what
      <br />
      <span>matters.</span>
    </h3>

    <p className="flywheel-description">
      We find opportunities, build with discipline,
      scale with purpose, and reinvest for a
      brighter, more resilient tomorrow.
    </p>

    <button className="flywheel-button">
      <span>OUR APPROACH</span>
      <span className="flywheel-button-arrow">→</span>
    </button>

    <div className="flywheel-progress">
      <span />
      MOTION OF PROGRESS
    </div>

  </div>


  {/* CENTER — FLYWHEEL */}
  <div className="flywheel-visual">

    {/* subtle orbital rings */}
    <div className="flywheel-ring flywheel-ring--outer" />
    <div className="flywheel-ring flywheel-ring--inner" />

    {/* moving orbit */}
    <div className="flywheel-path">
      <svg
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="flywheelGold"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8f6b2d" />
            <stop offset="50%" stopColor="#d6b36a" />
            <stop offset="100%" stopColor="#8f6b2d" />
          </linearGradient>
        </defs>

        <circle
          className="flywheel-track"
          cx="250"
          cy="250"
          r="185"
          fill="none"
        />

        <circle
          className="flywheel-active-track"
          cx="250"
          cy="250"
          r="185"
          fill="none"
          stroke="url(#flywheelGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="55 1110"
        />
      </svg>
    </div>


    {/* CENTER */}
    <div className="flywheel-center">

      <div className="flywheel-center-mark">
        O
      </div>

      <div className="flywheel-brand">
        OLYNTO
      </div>

      <div className="flywheel-tagline">
        IDEAS IN MOTION
      </div>

    </div>


    {/* 01 — IDEAS */}
    <div className="flywheel-node flywheel-node--1">
      <span className="node-number">01</span>

      <div className="node-icon">
        <Lightbulb size={19} strokeWidth={1.6} />
      </div>

      <strong>IDEAS</strong>

      <small>
        Spot real
        <br />
        opportunities
      </small>
    </div>


    {/* 02 — BUILD */}
    <div className="flywheel-node flywheel-node--2">
      <span className="node-number">02</span>

      <div className="node-icon">
        <Settings size={19} strokeWidth={1.6} />
      </div>

      <strong>BUILD</strong>

      <small>
        Create and
        <br />
        execute
      </small>
    </div>


    {/* 03 — SCALE */}
    <div className="flywheel-node flywheel-node--3">
      <span className="node-number">03</span>

      <div className="node-icon">
        <BarChart3 size={19} strokeWidth={1.6} />
      </div>

      <strong>SCALE</strong>

      <small>
        Drive sustainable
        <br />
        growth
      </small>
    </div>


    {/* 04 — REINVEST */}
    <div className="flywheel-node flywheel-node--4">
      <span className="node-number">04</span>

      <div className="node-icon">
        <RefreshCw size={19} strokeWidth={1.6} />
      </div>

      <strong>REINVEST</strong>

      <small>
        Strengthen the
        <br />
        ecosystem
      </small>
    </div>


    {/* 05 — VALUE */}
    <div className="flywheel-node flywheel-node--5">
      <span className="node-number">05</span>

      <div className="node-icon">
        <Users size={19} strokeWidth={1.6} />
      </div>

      <strong>VALUE</strong>

      <small>
        Create lasting
        <br />
        impact
      </small>
    </div>

  </div>


  {/* RIGHT — PHILOSOPHY */}
  <div className="flywheel-philosophy">

    <div className="philosophy-count">
      <strong>01</strong>
      <span>/ 05</span>
    </div>

    <div className="philosophy-line" />

    <h4>
      Different
      <br />
      verticals.
      <br />
      <span>One philosophy.</span>
    </h4>

    <p>
      We apply the same discipline across every
      industry — for compounding value over time.
    </p>

    <div className="philosophy-list">

      <div>
        <strong>02</strong>
        <span />
        <small>LONG-TERM THINKING</small>
      </div>

      <div>
        <strong>03</strong>
        <span />
        <small>RESPONSIBLE GROWTH</small>
      </div>

      <div>
        <strong>04</strong>
        <span />
        <small>PEOPLE AT THE CENTER</small>
      </div>

      <div>
        <strong>05</strong>
        <span />
        <small>A BRIGHTER TOMORROW</small>
      </div>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}