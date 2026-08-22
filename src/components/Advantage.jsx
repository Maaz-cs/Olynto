import React, { useEffect, useRef } from 'react';
import { ShieldAlert, TrendingUp, Cpu, Gauge, Anchor, Award, Zap } from 'lucide-react';

export default function Advantage() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      num: '01', title: 'Founder-Led, Not Committee-Run',
      desc: 'Every venture is run by people close to the problem, not managed from a distant head office.',
      icon: ShieldAlert,
    },
    {
      num: '02', title: 'Prove It Small, Then Scale',
      desc: 'Each business is validated in one focused market before it is scaled — no premature national rollouts.',
      icon: TrendingUp,
    },
    {
      num: '03', title: 'One Group, Compounding Advantages',
      desc: 'Agriculture, commerce, education, and technology ventures share operating discipline, talent, and brand trust across the group.',
      icon: Cpu,
    },
    {
      num: '04', title: 'Startup Speed',
      desc: 'Lean by design, fast by necessity — the structural advantage every large incumbent has lost.',
      icon: Gauge,
    },
    {
      num: '05', title: 'Built to Last',
      desc: 'Traceability, honest sourcing, and durable business models over short-term optics — in every vertical.',
      icon: Anchor,
    },
  ];

  return (
    <section id="advantage" className="section-tinted" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <span className="section-eyebrow">
            <Award size={12} />
            05 / Competitive Moat
          </span>
          <h2 className="section-title section-title--green" style={{ marginTop: '12px' }}>
            The Olynto Advantage
          </h2>
          <p className="section-subtitle">
            Structural execution principles that give Olynto ventures a durable, compounding edge in every market we enter.
          </p>
        </div>

        {/* Grid */}
        <div className="advantage-grid">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="card reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{
                    fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700,
                    color: 'var(--clr-green)', background: 'var(--clr-green-soft)',
                    padding: '4px 10px', borderRadius: '100px',
                    border: '1px solid var(--clr-border)'
                  }}>
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

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--clr-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--clr-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Moat Factor
                  </span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-green)', textTransform: 'uppercase' }}>
                    PROVEN
                  </span>
                </div>
              </div>
            );
          })}

          {/* Flywheel card */}
          <div className="card card--green reveal" style={{ transitionDelay: `${advantages.length * 0.08}s` }}>
            <div className="card__icon-box" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: '#fff', marginBottom: '20px' }}>
              <Zap size={22} />
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              Committed to Excellence
            </div>
            <h3 className="card__title">
              Compound Value Across All Verticals
            </h3>
            <p className="card__body">
              By unifying farming, software, trade, and learning under one execution standard, Olynto turns separate businesses into a self-reinforcing flywheel.
            </p>
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.2)', fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Olynto LLP Architecture
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
