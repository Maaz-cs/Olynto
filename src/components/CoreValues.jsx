import React, { useEffect, useRef } from 'react';
import { Shield, Users, Zap, Briefcase, Leaf, Award, Compass } from 'lucide-react';

export default function CoreValues() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      num: '01', title: 'Integrity',
      desc: 'We say what we mean and do what we say — with customers, partners, and each other.',
      icon: Shield,
    },
    {
      num: '02', title: 'Customer First',
      desc: 'We build for the customer we have, not the customer a slide deck describes.',
      icon: Users,
    },
    {
      num: '03', title: 'Speed with Discipline',
      desc: 'We ship, measure, and improve — not perfect, then launch.',
      icon: Zap,
    },
    {
      num: '04', title: 'Ownership',
      desc: 'Every venture is expected to be sustainable on its own economics, not subsidised indefinitely.',
      icon: Briefcase,
    },
    {
      num: '05', title: 'Sustainability',
      desc: 'We choose durable growth over fast growth when the two conflict.',
      icon: Leaf,
    },
    {
      num: '06', title: 'One Standard',
      desc: 'Every team, in every venture, operates with the same bar for quality and honesty.',
      icon: Award,
    },
  ];

  return (
    <section id="core-values" className="section-tinted" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '56px' }}>
          <div>
            <span className="section-eyebrow">
              <Compass size={12} />
              03 / Operating Principles
            </span>
            <h2 className="section-title section-title--green" style={{ marginTop: '12px' }}>
              Core Values
            </h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--clr-muted)', maxWidth: '360px', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
            Six non-negotiable principles guiding execution across every Olynto venture and partner ecosystem.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {values.map((v, idx) => {
            const Icon = v.icon;
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
                    VALUE {v.num}
                  </span>
                  <div className="card__icon-box" style={{ margin: 0 }}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="card__title" style={{ fontSize: '1.05rem', marginBottom: '10px' }}>
                  {v.title}
                </h3>
                <p className="card__body">{v.desc}</p>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--clr-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--clr-muted)', fontWeight: 600 }}>
                    STANDARD #{v.num}
                  </span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--clr-green)', display: 'inline-block' }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
