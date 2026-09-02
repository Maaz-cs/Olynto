import React, { useState, useEffect, useRef } from 'react';
import {
  Building,
  MapPin,
  Calendar,
  FileText,
  Copy,
  Check,
  ArrowUp,
  Shield,
} from 'lucide-react';

export default function CorporateInfo() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const elements = root.querySelectorAll('.reveal');

    // Corporate Information must remain readable even if the
    // general reveal animation has not fired yet.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const regAddress =
    'Kadarakoppa Road, H.No. 1421, Lokapur, Mudhol, Bagalkot – 587122, Karnataka, India';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(regAddress);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error('Failed to copy address:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="corporate-info"
      className="corporate-info"
      ref={ref}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal corporate-info__header">
          <span className="corporate-info__eyebrow">
            <Building size={13} />
            06 / Legal & Credentials
          </span>

          <h2 className="corporate-info__title">
            Corporate Information
          </h2>

          <p className="corporate-info__subtitle">
            Official statutory credentials and registered entity filings
            under the Ministry of Corporate Affairs, India.
          </p>
        </div>

        {/* Information cards */}
        <div className="corporate-info__cards">
          {/* Statutory Incorporation */}
          <div
            className="reveal corporate-info__card"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="corporate-info__card-header">
              <div className="corporate-info__icon">
                <FileText size={19} />
              </div>

              <div>
                <span className="corporate-info__card-kicker">
                  Governing Act
                </span>

                <h3 className="corporate-info__card-title">
                  Statutory Incorporation
                </h3>
              </div>
            </div>

            <div className="corporate-info__highlight">
              <span className="corporate-info__label">
                Governing Act & Provision
              </span>

              <p className="corporate-info__highlight-text">
                Incorporated under Section 12(1) of the Limited
                Liability Partnership Act, 2008.
              </p>
            </div>

            <div className="corporate-info__meta-grid">
              <div className="corporate-info__meta">
                <div className="corporate-info__meta-label">
                  <Calendar size={13} />
                  <span>Date of Incorporation</span>
                </div>

                <p className="corporate-info__meta-value">
                  5 December 2025
                </p>
              </div>

              <div className="corporate-info__meta">
                <div className="corporate-info__meta-label">
                  <Building size={13} />
                  <span>Entity Structure</span>
                </div>

                <p className="corporate-info__meta-value">
                  Limited Liability Partnership
                </p>
              </div>
            </div>
          </div>

          {/* Registered Office */}
          <div
            className="reveal corporate-info__card"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="corporate-info__card-header corporate-info__card-header--between">
              <div className="corporate-info__card-header-left">
                <div className="corporate-info__icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span className="corporate-info__card-kicker">
                    Official Location
                  </span>

                  <h3 className="corporate-info__card-title">
                    Registered Office
                  </h3>
                </div>
              </div>

              <span className="corporate-info__location-badge">
                Karnataka, India
              </span>
            </div>

            <span className="corporate-info__label corporate-info__address-label">
              Headquarters Address
            </span>

            <div className="corporate-info__address">
              <MapPin size={16} />

              <p>
                Kadarakoppa Road, H.No. 1421,
                <br />
                Lokapur, Mudhol, Bagalkot – 587122,
                <br />
                Karnataka, India
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="corporate-info__copy-button"
            >
              {copied ? (
                <>
                  <Check size={15} />
                  Address Copied!
                </>
              ) : (
                <>
                  <Copy size={15} />
                  Copy Registered Address
                </>
              )}
            </button>
          </div>
        </div>

        {/* Compliance */}
        <div
          className="reveal corporate-info__compliance"
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="corporate-info__compliance-icon">
            <Shield size={17} />
          </div>

          <p>
            <strong>MCA Registered</strong>
            <span> · </span>
            All filings and statutory records are maintained in
            compliance with the Ministry of Corporate Affairs,
            Government of India.
          </p>
        </div>

        {/* Footer bar */}
        <div className="corporate-info__footer-bar">
          <div className="corporate-info__brand">
            <img
              src="/olynto1%20Logo.jpg"
              alt="Olynto LLP"
              className="corporate-info__brand-logo"
            />

            <div>
              <span className="corporate-info__brand-name">
                OLYNTO LLP
              </span>

              <span className="corporate-info__copyright">
                © 2026 Olynto LLP. All rights reserved.
              </span>
            </div>
          </div>

          <div className="corporate-info__footer-right">
            <span className="corporate-info__country">
              Karnataka · India
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="corporate-info__top-button"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
