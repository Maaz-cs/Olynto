import React, { useState, useEffect, useRef } from 'react';
import { Eye, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

export default function VisionMission() {
  const [activeMission, setActiveMission] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    { title: 'Value Creation', desc: 'Build ventures that create measurable, long-term value — for customers first, and for shareholders as a result.', highlight: 'Customers First' },
    { title: 'Underserved Markets', desc: 'Enter markets that are underserved rather than overcrowded, and out-execute rather than out-spend.', highlight: 'Execution Over Spend' },
    { title: 'Global Benchmark', desc: 'Hold every product and service to a global quality benchmark, regardless of where it\'s built.', highlight: 'Uncompromising Quality' },
    { title: 'Operating Autonomy', desc: 'Give every operating business the autonomy to move fast, backed by the credibility of the Olynto name.', highlight: 'Speed & Credibility' },
    { title: 'Community Growth', desc: 'Grow globally while staying accountable to the communities and markets we start in.', highlight: 'Global + Local' },
  ];

  return (
    <section id="vision-mission" className="section-light" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <span className="section-eyebrow">
            <Eye size={12} />
            02 / Purpose & Direction
          </span>
          <h2 className="section-title section-title--green" style={{ marginTop: '12px' }}>
            Vision & Mission
          </h2>
        </div>

        {/* Vision banner */}
        <div className="reveal vision-card" style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '60px', height: '60px', background: 'var(--clr-green)',
              borderRadius: 'var(--radius-sm)', flexShrink: 0
            }}>
              <Eye size={28} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--clr-green-light)', display: 'block', marginBottom: '12px' }}>
                Our Vision Statement
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.5 }}>
                "To build a globally respected group of businesses that transforms how people work, learn, trade, and access essential products — through innovation, sustainability, and relentless customer focus."
              </h3>
            </div>
          </div>
        </div>

        {/* Mission grid */}
        <div className="reveal" style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <Rocket size={20} color="var(--clr-green)" />
            <h3 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--clr-ink)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Our Mission Directives
            </h3>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-green)', marginLeft: 'auto', background: 'var(--clr-green-soft)', padding: '4px 10px', borderRadius: '100px', border: '1px solid var(--clr-border)' }}>
              5 Pillars
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>

            {/* Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {missionPoints.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveMission(idx)}
                  className={`mission-item${activeMission === idx ? ' is-active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{
                      fontFamily: 'monospace', fontSize: '0.7rem', fontWeight: 700,
                      padding: '4px 8px',
                      background: activeMission === idx ? 'rgba(255,255,255,0.2)' : 'var(--clr-green-soft)',
                      color: activeMission === idx ? '#fff' : 'var(--clr-green)',
                      borderRadius: '4px',
                      flexShrink: 0,
                    }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight size={16} style={{ flexShrink: 0, opacity: activeMission === idx ? 1 : 0.4, transform: activeMission === idx ? 'translateX(4px)' : 'none', transition: 'all 0.3s' }} />
                </div>
              ))}
            </div>

            {/* Detail panel */}
            <div className="mission-detail-panel" style={{ marginTop: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--clr-border)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Directive 0{activeMission + 1} of 05
                  </span>
                  <span style={{
                    background: 'var(--clr-green)', color: '#fff', fontSize: '0.65rem', fontFamily: 'var(--font-heading)',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
                    padding: '4px 12px', borderRadius: '100px'
                  }}>
                    {missionPoints[activeMission].highlight}
                  </span>
                </div>
                <h4 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--clr-green)', marginBottom: '12px' }}>
                  {missionPoints[activeMission].title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--clr-muted)', lineHeight: 1.8 }}>
                  {missionPoints[activeMission].desc}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--clr-border)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--clr-green)', fontFamily: 'var(--font-heading)' }}>
                <CheckCircle2 size={15} />
                Olynto Standard Quality Benchmark
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
