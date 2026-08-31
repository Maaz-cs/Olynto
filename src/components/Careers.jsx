import React from 'react';

export default function Careers() {
  return (
    <section className="careers-page">

      <div className="careers-overlay"></div>

      <div className="careers-content">

        <div className="careers-label">
          CAREERS
        </div>

        <div className="careers-title">
          <span>BUILD YOUR</span>
          <span>
            <strong>FUTURE</strong> WITH US
          </span>
        </div>

        <div className="careers-glow"></div>

        <div className="careers-coming">
          COMING SOON
        </div>

        <div className="careers-line">
          <span></span>
          <i></i>
          <span></span>
        </div>

        <p className="careers-description">
          Exciting career opportunities are on the way.
          <br />
          Stay connected with us for upcoming openings.
        </p>

        <button
          className="careers-back-btn"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <span>‹</span>
          GO BACK
        </button>

      </div>

    </section>
  );
}