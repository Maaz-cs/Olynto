import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Sprout, GraduationCap, Check, ArrowRight, Globe, MapPin, Cpu } from 'lucide-react';

export default function GroupOfCompanies() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ventures = [
    {
      id: 'noqkart',
      name: 'NoQkart',
      category: 'Hyperlocal Commerce & Booking',
      tagline: 'Skip the queue. Book, order, arrive — instantly.',
      icon: ShoppingBag,
      location: 'Phased City Rollout: Belagavi, Karnataka',
      techBadge: 'React Native Platform',
      accentColor: '#1e7a56',
      summary: 'NoQkart is Olynto\'s hyperlocal booking and ordering platform, built to remove the single most common friction point in local commerce: the wait. It connects nearby customers directly to local businesses — from food and retail to services — for real-time ordering, booking, and queue-free fulfilment.',
      points: [
        'A mobile-first platform (React Native) with a live, real-time backend, built for speed and reliability at the neighbourhood level.',
        'Launching zone-by-zone rather than city-wide, so every launch market gets a genuinely reliable, well-serviced experience before the next one opens.',
        'Built and led by a dedicated in-house engineering and execution team under Olynto LLP.',
      ],
    },
    {
      id: 'iamroot',
      name: 'I AM ROOT™',
      category: 'Organic Agriculture & Natural Products',
      tagline: 'From root to shelf — nothing added, nothing lost.',
      icon: Sprout,
      location: 'Registered IEC · Export-Ready Nationwide & Global',
      techBadge: 'Moringa & Traceability',
      accentColor: '#2d9e6b',
      summary: 'I AM ROOT™ is Olynto\'s agriculture and natural-products venture, born from the group\'s original grounding in organic farming. It develops and markets natural, minimally processed agricultural products — beginning with moringa — for customers who want traceable, honestly sourced food and wellness products.',
      points: [
        'Products developed and sourced with full traceability from farm to finished product.',
        'Export-ready from inception — I AM ROOT™ holds a registered IEC, enabling direct entry into international markets alongside domestic retail.',
        'Built to global quality and packaging standards so the same product line can serve both Indian consumers and overseas buyers.',
        'The commercial proof point for Olynto\'s broader ambition in organic and export-grade agriculture.',
      ],
    },
    {
      id: 'elevate',
      name: 'Olynto Elevate',
      category: 'Education & Skill Development',
      tagline: 'Placement-ready skills, not just certificates.',
      icon: GraduationCap,
      location: 'Inaugural Programme Launched with AITM',
      techBadge: 'AI-Powered Web Dev Track',
      accentColor: '#186b4a',
      summary: 'Olynto Elevate is Olynto\'s education and skill-development arm, built specifically to close the gap between engineering degrees and industry-ready technical skills. Rather than generic training content, Elevate runs hands-on, cohort-based workshops designed around what employers are actually hiring for.',
      points: [
        'Curriculum built around live, portfolio-worthy projects rather than passive lectures.',
        'Designed in partnership with academic institutions to reach engineering students directly on campus.',
        'The first step toward a broader Olynto Elevate programme spanning multiple technical skill tracks.',
      ],
    },
  ];

  const active = ventures[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section id="ventures" className="section-light" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <span className="section-eyebrow">
            <Globe size={12} />
            04 / Operating Portfolio
          </span>
          <h2 className="section-title section-title--green" style={{ marginTop: '12px' }}>
            House of Brands
          </h2>
          <p className="section-subtitle">
            One parent enterprise to a focused set of operating businesses — each with its own brand, team, and go-to-market, unified by the Olynto standard.
          </p>
        </div>

        {/* Tab bar */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
          {ventures.map((v, idx) => {
            const TabIcon = v.icon;
            return (
              <button
                key={v.id}
                onClick={() => setActiveTab(idx)}
                className={`ventures-tab${activeTab === idx ? ' is-active' : ''}`}
                style={{ minWidth: '180px' }}
              >
                <div className="ventures-tab__icon">
                  <TabIcon size={20} />
                </div>
                <div>
                  <span className="ventures-tab__label">Venture 0{idx + 1}</span>
                  <span className="ventures-tab__name">{v.name}</span>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', flexShrink: 0, opacity: activeTab === idx ? 1 : 0.3, color: activeTab === idx ? '#fff' : 'var(--clr-green)' }} />
              </button>
            );
          })}
        </div>

        {/* Active venture panel */}
        <div className="reveal ventures-panel" key={activeTab}>

          {/* Meta bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--clr-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', background: 'var(--clr-green)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}>
                <ActiveIcon size={28} color="#fff" />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--clr-green)', display: 'block', marginBottom: '4px' }}>
                  {active.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--clr-ink)', lineHeight: 1 }}>
                  {active.name}
                </h3>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
              <span style={{ background: 'var(--clr-green)', color: '#fff', fontSize: '0.7rem', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '5px 14px', borderRadius: '100px' }}>
                {active.techBadge}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: 'var(--clr-muted)', fontWeight: 500 }}>
                <MapPin size={12} /> {active.location}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div style={{ padding: '18px 24px', background: 'var(--clr-green-soft)', borderLeft: '3px solid var(--clr-green)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', marginBottom: '28px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--clr-green)', fontWeight: 600 }}>
              "{active.tagline}"
            </p>
          </div>

          {/* Summary */}
          <p style={{ fontSize: '1rem', color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
            {active.summary}
          </p>

          {/* Key points */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--clr-green)', marginBottom: '16px' }}>
              <Cpu size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              Operational Highlights
            </h4>
            {active.points.map((point, i) => (
              <div key={i} className="ventures-point">
                <div className="ventures-point__check">
                  <Check size={12} />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--clr-ink)', lineHeight: 1.7, fontWeight: 500 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--clr-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              House-of-Brands Operating Entity
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-green)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Olynto LLP · Verified
            </span>
          </div>
        </div>

        {/* Incubation note */}
        <div className="reveal" style={{ marginTop: '24px', padding: '20px 28px', background: 'var(--clr-off-white)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--clr-muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--clr-green)', fontWeight: 700 }}>Future Expansion: </strong>
            Olynto LLP continues to evaluate and incubate new ventures under the same house-of-brands model — each launched only when it meets the group's standard for a real, provable customer problem.
          </p>
        </div>

      </div>
    </section>
  );
}
