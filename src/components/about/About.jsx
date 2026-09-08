import React, { useEffect, useRef } from 'react';
import { Target, Sparkles, Lightbulb } from 'lucide-react';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const standards = [
    'Solve a real problem for a real customer.',
    'Prove it in one market before scaling to the next.',
    'Run as an autonomous business that stands on its own economics.',
  ];

  return (
    <section id="about" className="section-tinted" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <span className="section-eyebrow">
            <Lightbulb size={12} />
            02 / How We Build
          </span>

          <h2 className="section-title section-title--green" style={{ marginTop: '12px' }}>
            Built for the Long Term
          </h2>

          <p className="section-subtitle">
            A focused operating philosophy built around real problems, disciplined execution, and sustainable growth.
          </p>
        </div>

        {/* Content grid */}
        <style>{`@media(min-width:1024px){.about-main-grid{grid-template-columns:1fr 380px!important;}}`}</style>
        <div className="grid about-main-grid" style={{ gridTemplateColumns: '1fr', gap: '32px', alignItems: 'start' }}>

          {/* Main story */}
          <div className="reveal about-story-card">
            <div className="grid" style={{ gap: '32px', gridTemplateColumns: '1fr' }}>

              <div>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--clr-green)', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                  Olynto LLP is a founder-led business group building a portfolio of ventures out of Karnataka, India — starting from the soil and scaling into software.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
                  Olynto operates on a house-of-brands model, bringing together multiple independently driven businesses under one parent enterprise. Each venture is built with a distinct purpose, addressing specific real-world challenges and serving the unique needs of its customers. Together, they form a diverse and connected ecosystem focused on creating meaningful, scalable, and long-term impact.

                </p>
                <blockquote className="about-blockquote">
                  "We didn't start as a technology company or an agriculture company — we started with a question: which everyday problems, in commerce, in education, in farming, are being solved poorly, and how would we solve them if we owned the entire experience end to end? That question is now three operating businesses, with more in development."
                </blockquote>
                <p style={{ fontSize: '0.9rem', color: 'var(--clr-muted)', lineHeight: 1.7 }}>
                  Every Olynto venture is built to the same standard: solve a real problem for a real customer, prove it in one market before scaling it to the next, and run it as a business that can stand on its own — not a side project under a parent's name.
                </p>
              </div>

            </div>
          </div>

          {/* Side cards row */}
          <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '24px' }}>

            {/* Standards */}
            <div className="reveal card" style={{ transitionDelay: '0.15s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--clr-border)' }}>
                <div className="card__icon-box">
                  <Target size={22} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--clr-ink)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  The Olynto Standard
                </h3>
              </div>
              <div>
                {standards.map((s, i) => (
                  <div key={i} className="about-standard-item">
                    <span className="about-standard-num">{i + 1}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--clr-ink)', lineHeight: 1.6 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy banner */}
            <div className="reveal card card--green" style={{ transitionDelay: '0.25s' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div className="card__icon-box">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', color: '#fff' }}>
                    House of Brands Philosophy
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>
                    Distinct identity, dedicated execution team, and focused market mission for every venture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
