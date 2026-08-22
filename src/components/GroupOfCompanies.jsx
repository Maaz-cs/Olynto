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
  }, [activeTab]);

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
      tagline: 'From root to shelf — naturally sourced, thoughtfully crafted.',
      icon: Sprout,
      logo: '/images/ventures/i-am-root.jpeg',
      location: 'India · Building for Domestic & Global Markets',
      techBadge: 'Natural Products',
      accentColor: '#2d9e6b',

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
      name: 'Olynto Elevate',
      category: 'Education & Skill Development',
      tagline: 'Learn practical skills. Build real projects. Move forward.',
      icon: GraduationCap,
      logo: '/images/ventures/olynto-elevate.png',
      location: 'India · Student & Early-Career Focus',
      techBadge: 'Skills & Innovation',

      accentColor: '#186b4a',

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
                  {v.logo ? (
                    <img
                      src={v.logo}
                      alt={`${v.name} logo`}
                      className="venture-tab-logo"
                    />
                  ) : (
                    <TabIcon size={20} />
                  )}
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
              {active.logo ? (
                <div className="venture-brand-logo">
                  <img
                    src={active.logo}
                    alt={`${active.name} logo`}
                  />
                </div>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  background: 'var(--clr-green)',
                  borderRadius: 'var(--radius-sm)',
                  flexShrink: 0
                }}>
                  <ActiveIcon size={28} color="#fff" />
                </div>
              )}
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
