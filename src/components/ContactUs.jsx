import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MessageSquare,
  Building2,
  CheckCircle2,
} from 'lucide-react';

export default function ContactUs() {
  const ref = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
const [enquiryType, setEnquiryType] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements =
      ref.current?.querySelectorAll('.contact-reveal');

    elements?.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  };

  return (
    <section
      className="contact-page"
      ref={ref}
    >

      {/* =====================================================
          HERO
         ===================================================== */}

      <div className="contact-hero">

  <div className="contact-hero-image" />

  <div className="contact-hero-overlay" />

  <div className="contact-hero-grid" />

  <div className="container">

          <a
            href="/"
            className="contact-back-link"
          >
            <ArrowLeft size={15} />
            <span>Back to Olynto</span>
          </a>


          <div className="contact-hero-content contact-reveal">

            <span className="section-eyebrow">
              01 / Contact Olynto
            </span>

            <h1>
              Let's build
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h1>

            <p>
              Whether you have a business enquiry, partnership
              opportunity, or simply want to connect, we'd be
              glad to hear from you.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CONTACT CONTENT
         ===================================================== */}

      <div className="contact-main">

        <div className="container">

          <div className="contact-grid">


            {/* =================================================
                LEFT — GET IN TOUCH
               ================================================= */}

            <div className="contact-information contact-reveal">

              <span className="section-eyebrow">
                02 / Get in Touch
              </span>

              <h2>
                Start a
                <br />
                <span>conversation.</span>
              </h2>

              <p className="contact-intro">
                Olynto brings together focused ventures built
                around real-world opportunities. If you see a
                possibility worth exploring, tell us about it.
              </p>


              <div className="contact-info-list">

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <p>olyntollp@gmail.com</p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <span>ORGANIZATION</span>
                    <p>Olynto LLP</p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    <MessageSquare size={20} />
                  </div>

                  <div>
                    <span>ENQUIRIES</span>
                    <p>
                      Business · Partnerships · General
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — FORM
               ================================================= */}

            <div className="contact-form-wrapper contact-reveal">

              <div className="contact-form-header">

                <span>
                  SEND AN ENQUIRY
                </span>

                <ArrowUpRight size={18} />

              </div>


              {submitted ? (

                <div className="contact-success">

                  <CheckCircle2 size={42} />

                  <h3>
                    Thank you.
                  </h3>

                  <p>
                    Your enquiry has been recorded.
                    We will connect with you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="contact-reset-button"
                  >
                    Send another enquiry
                  </button>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="contact-form-row">

                    <label>
                      <span>FULL NAME</span>

                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </label>


                    <label>
                      <span>EMAIL ADDRESS</span>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>

                  </div>


                  <label>
                    <span>PHONE NUMBER</span>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                    />
                  </label>


                  <label className="contact-custom-select">
  <span>ENQUIRY TYPE</span>

  <button
    type="button"
    className={`contact-select-button${
      enquiryOpen ? ' is-open' : ''
    }`}
    onClick={() =>
      setEnquiryOpen((value) => !value)
    }
  >
    <span
      className={
        enquiryType
          ? 'has-value'
          : ''
      }
    >
      {enquiryType ||
        'Select an enquiry type'}
    </span>

    <span className="contact-select-arrow">
      {enquiryOpen ? '▲' : '▼'}
    </span>
  </button>

  {enquiryOpen && (
    <div className="contact-select-options">

      <button
        type="button"
        onClick={() => {
          setEnquiryType('Business Enquiry');
          setEnquiryOpen(false);
        }}
      >
        Business Enquiry
      </button>

      <button
        type="button"
        onClick={() => {
          setEnquiryType('Partnership');
          setEnquiryOpen(false);
        }}
      >
        Partnership
      </button>

      <button
        type="button"
        onClick={() => {
          setEnquiryType('Venture Opportunity');
          setEnquiryOpen(false);
        }}
      >
        Venture Opportunity
      </button>

      <button
        type="button"
        onClick={() => {
          setEnquiryType('General Enquiry');
          setEnquiryOpen(false);
        }}
      >
        General Enquiry
      </button>

    </div>
  )}

  <input
    type="hidden"
    name="type"
    value={enquiryType}
    required
  />
</label>


                  <label>
                    <span>MESSAGE</span>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </label>


                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    <span>
                      Send Enquiry
                    </span>

                    <ArrowUpRight size={17} />
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CLOSING STATEMENT
         ===================================================== */}

      <div className="contact-closing">

        <div className="container">

          <div className="contact-closing-inner contact-reveal">

            <span className="section-eyebrow">
              03 / Olynto
            </span>

            <h2>
              Ventures that last.
            </h2>

            <a
              href="/"
              className="contact-home-link"
            >
              <span>Return to Olynto</span>
              <ArrowLeft size={16} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}