import React, { useState, useEffect, useRef } from 'react';
import { Building, MapPin, Calendar, FileText, Copy, Check, ArrowUp, Shield } from 'lucide-react';

export default function CorporateInfo() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const regAddress = 'Kadarakoppa Road, H.No. 1421, Lokapur, Mudhol, Bagalkot – 587122, Karnataka, India';

  const handleCopy = () => {
    navigator.clipboard.writeText(regAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="corporate-info" className="footer" ref={ref}>
      <div className="container">
        <div style={{ paddingTop: '80px', paddingBottom: '0' }}>

          {/* Header */}
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <span className="section-eyebrow section-eyebrow-dark">
              <Building size={12} />
              06 / Legal & Credentials
            </span>
            <h2 className="section-title section-title--white" style={{ marginTop: '12px' }}>
              Corporate Information
            </h2>
            <p className="section-subtitle section-subtitle--white">
              Official statutory credentials and registered entity filings under the Ministry of Corporate Affairs, India.
            </p>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '48px' }}>

            {/* Statutory card */}
            <div className="reveal footer-info-card" style={{ transitionDelay: '0.1s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', background: 'rgba(30,122,86,0.2)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-green-light)', flexShrink: 0 }}>
                  <FileText size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Statutory Incorporation
                </h3>
              </div>

              <div style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-green-light)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                  Governing Act & Provision
                </span>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  Incorporated under Section 12(1) of the Limited Liability Partnership Act, 2008.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Calendar size={13} color="var(--clr-green-light)" />
                    <span style={{ fontFamily: 'monospace', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--clr-green-light)', letterSpacing: '0.1em' }}>Date of Incorporation</span>
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>5 December 2025</p>
                </div>
                <div style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Building size={13} color="var(--clr-green-light)" />
                    <span style={{ fontFamily: 'monospace', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--clr-green-light)', letterSpacing: '0.1em' }}>Entity Structure</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Limited Liability Partnership</p>
                </div>
              </div>
            </div>

            {/* Registered office */}
            <div className="reveal footer-info-card" style={{ transitionDelay: '0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', background: 'rgba(30,122,86,0.2)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-green-light)' }}>
                    <MapPin size={20} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Registered Office
                  </h3>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'var(--clr-green-light)', background: 'rgba(30,122,86,0.12)', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(30,122,86,0.25)' }}>
                  Karnataka, India
                </span>
              </div>

              <p style={{ fontFamily: 'monospace', fontSize: '0.68rem', fontWeight: 700, color: 'var(--clr-green-light)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
                Headquarters Address:
              </p>

              <div style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '20px' }}>
                Kadarakoppa Road, H.No. 1421,<br />
                Lokapur, Mudhol, Bagalkot – 587122,<br />
                Karnataka, India
              </div>

              <button
                onClick={handleCopy}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {copied ? (
                  <><Check size={15} /> Address Copied!</>
                ) : (
                  <><Copy size={15} /> Copy Registered Address</>
                )}
              </button>
            </div>

          </div>

          {/* Compliance badge */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', background: 'rgba(30,122,86,0.08)', border: '1px solid rgba(30,122,86,0.2)', borderRadius: 'var(--radius-sm)', marginBottom: '48px' }}>
            <Shield size={18} color="var(--clr-green-light)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
              <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>MCA Registered · </strong>
              All filings and statutory records are maintained in compliance with the Ministry of Corporate Affairs, Government of India.
            </p>
          </div>

        </div>

        {/* Footer bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img src="/logo.jpeg" alt="Olynto LLP" style={{ height: '32px', width: 'auto', opacity: 0.85, borderRadius: '2px' }} />
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                OLYNT0 LLP
              </span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
                © 2026 Olynto LLP. All rights reserved.
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Karnataka · India
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--clr-green)'; e.currentTarget.style.borderColor = 'var(--clr-green)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
