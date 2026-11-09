import React, { useEffect, useState, useRef } from 'react';

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ChevronLeft,
  ChevronRight,
  Images,
  GraduationCap,
  Layers3,
  Mail,
  MessageCircle,
  Play,
  ShieldCheck,
  Users,
  X,
  Instagram,
  Linkedin,
} from 'lucide-react';

import './ElevatePage.css';


// Existing Hero photos — keep your current paths
const workshopPhotos = [
  "/images/elevate/workshop-1.jpeg",
  "/images/elevate/workshop-2.jpeg",
  "/images/elevate/workshop-3.jpeg",
  "/images/elevate/workshop-4.jpeg",
  "/images/elevate/workshop-5.jpeg",
];

// Separate photos for the Workshop Gallery
const galleryPhotos = [
  "/images/gallery/gallery-1.jpeg",
  "/images/gallery/gallery-2.jpeg",
  "/images/gallery/gallery-3.jpeg",
  "/images/gallery/gallery-4.jpeg",
  "/images/gallery/gallery-5.jpeg",
];

const workshopVideo = "/images/gallery/workshop-video-fixed.mp4";



const programs = [
  {
    number: '01',
    title: 'Technical Sprints',
    lead: 'Learn to build the way engineers do, in days.',
    description:
      'Short, intensive sprints inside your college lab or in a hybrid format, open to a full class of diploma and 3rd-semester CSE students. Students work in a professional setup, run code in containers, build an applied-intelligence data pipeline, and review each other’s code. Led by Elevate Fellows from your campus, backed by Olynto engineers, with no change to your syllabus.',
    tag: 'On campus · Hybrid',
    cta: 'Bring a Sprint to your campus',
    kind: 'whatsapp',
  },
  {
    number: '02',
    title: 'Semester Tracks',
    lead: 'A full semester of building, not just attending.',
    description:
      'A weekly programme that runs alongside the semester. Students build one complete system in stages, submit work for regular code reviews, and present a final demo to faculty. Led by Elevate Fellows, with Olynto reviewing progress. They finish with a completed project, a full commit history, and readiness to apply for a Residency.',
    tag: 'On campus · Semester-long',
    cta: 'Plan a Semester Track',
    kind: 'contact',
  },
  {
    number: '03',
    title: 'Engineering Residencies',
    lead: 'Work like an engineering team. Prove it with reviewed work.',
    description:
      'A small, selective cohort chosen from Sprints, Semester Tracks and Elevate Fellows. Remote-friendly and self-directed. Residents own tasks end to end, audit unfamiliar code including public open-source projects, and review each other’s work. They finish with contributions in public repositories that anyone can verify.',
    tag: 'Selective · Cohort-based',
    cta: 'Apply for the next cohort',
    kind: 'contact',
  },
];

const fellowFields = [
  { name: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name', required: true },
  { name: 'college', label: 'College', type: 'text', placeholder: 'College or institution', required: true },
  { name: 'yearBranch', label: 'Year and branch', type: 'text', placeholder: 'e.g. 4th year, CSE', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
  { name: 'portfolio', label: 'GitHub or portfolio link', type: 'url', placeholder: 'https://github.com/yourname', required: false },
];

function Eyebrow({ children }) {
  return <div className="el-eyebrow"><span />{children}</div>;
}

function WorkshopGallery({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const previousPhoto = () => {
    setActiveIndex((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const nextPhoto = () => {
    setActiveIndex((index) => (index + 1) % galleryPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (!showVideo && event.key === 'ArrowLeft') previousPhoto();
      if (!showVideo && event.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showVideo]);

  return (
    <div
      className="el-gallery-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Workshop gallery"
    >
      <div className="el-gallery-modal" onClick={(event) => event.stopPropagation()}>
        <div className="el-gallery-modal-header">
          <div>
            <span className="el-gallery-eyebrow">OLYNTO ELEVATE</span>
            <h2>Workshop Gallery</h2>
            <p>Explore moments from our applied AI workshops.</p>
          </div>
          <button
            type="button"
            className="el-gallery-close"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
        </div>

        <div className="el-gallery-main">
          {showVideo ? (
            videoError ? (
              <div className="el-gallery-media-error">
                <Play size={30} />
                <p>Video could not be loaded. Check that this file exists:</p>
                <code>{workshopVideo}</code>
              </div>
            ) : (
              <video
  key={workshopVideo}
  className="el-gallery-video"
  src={workshopVideo}
  controls
  playsInline
  preload="metadata"
  onError={() => setVideoError(true)}
>
  Your browser does not support video playback.
</video>
            )
          ) : (
            <>
              <img
                key={galleryPhotos[activeIndex]}
                className="el-gallery-featured-image"
                src={galleryPhotos[activeIndex]}
                alt={`Workshop photo ${activeIndex + 1}`}
                onError={(event) => {
                  event.currentTarget.dataset.failed = 'true';
                  console.error('Gallery image failed to load:', galleryPhotos[activeIndex]);
                }}
              />
              <button type="button" className="el-gallery-arrow el-gallery-prev" onClick={previousPhoto} aria-label="Previous photo">
                <ChevronLeft size={26} />
              </button>
              <button type="button" className="el-gallery-arrow el-gallery-next" onClick={nextPhoto} aria-label="Next photo">
                <ChevronRight size={26} />
              </button>
              <span className="el-gallery-counter">{activeIndex + 1} / {galleryPhotos.length}</span>
            </>
          )}
        </div>

        <div className="el-gallery-controls">
          <button
            type="button"
            className={`el-gallery-tab ${!showVideo ? 'active' : ''}`}
            onClick={() => setShowVideo(false)}
          >
            <Images size={17} /> Photos
          </button>
          <button
            type="button"
            className={`el-gallery-tab ${showVideo ? 'active' : ''}`}
            onClick={() => {
              setVideoError(false);
              setShowVideo(true);
            }}
          >
            <Play size={17} /> Workshop Video
          </button>
        </div>

        {!showVideo && (
          <div className="el-gallery-thumbnails">
            {galleryPhotos.map((photo, index) => (
              <button
                type="button"
                key={photo}
                className={`el-gallery-thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View workshop photo ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <img
                  src={photo}
                  alt={`Workshop thumbnail ${index + 1}`}
                  loading="lazy"
                  onError={() => console.error('Gallery thumbnail failed to load:', photo)}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const WHATSAPP_NUMBER = "916361420081";
export default function VenturesSection() {
  const cardsContainerRef = useRef(null);
  const programDragStartRef = useRef(null);
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);
 const [fellowModalOpen, setFellowModalOpen] = useState(false);
const [applicationSubmitted, setApplicationSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState('');
  const [activePhoto, setActivePhoto] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % workshopPhotos.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const openFellowForm = () => {
    setApplicationSubmitted(false);
    setFellowModalOpen(true);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitError('');

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    fullName: formData.get('fullName')?.trim(),
    college: formData.get('college')?.trim(),
    yearBranch: formData.get('yearBranch')?.trim(),
    email: formData.get('email')?.trim(),
    portfolio: formData.get('portfolio')?.trim(),
    reason: formData.get('reason')?.trim(),
  };

  try {
    const response = await fetch('/api/fellowship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || 'Unable to submit your application.'
      );
    }

    setApplicationSubmitted(true);
    form.reset();

  } catch (error) {
    console.error('Fellowship submission error:', error);

    setSubmitError(
      error.message || 'Something went wrong. Please try again.'
    );

  } finally {
    setIsSubmitting(false);
  }
};

  const selectProgram = (index) => {
    setActiveProgramIndex((index + programs.length) % programs.length);
  };

  const getProgramPosition = (index) => {
    let position = index - activeProgramIndex;
    if (position > 1) position -= programs.length;
    if (position < -1) position += programs.length;
    return position;
  };

  const handleProgramPointerDown = (event) => {
    programDragStartRef.current = event.clientX;
  };

  const handleProgramPointerUp = (event) => {
    if (programDragStartRef.current === null) return;
    const distance = event.clientX - programDragStartRef.current;
    programDragStartRef.current = null;

    if (Math.abs(distance) < 40) return;
    if (distance < 0) {
      selectProgram(activeProgramIndex + 1);
    } else {
      selectProgram(activeProgramIndex - 1);
    }
  };

useEffect(() => {
  const page = document.querySelector(".elevate-page");

  if (!page) return;

  const elements = page.querySelectorAll(
    [
      ".el-hero-content",
      ".el-section-heading",
      ".el-who-bottom",
      ".el-principle",
      ".el-program-card",
      ".el-fellow-layout",
      ".el-partner-card",
      ".el-gallery-empty",
      ".el-reach-inner",
      ".el-elevate-footer-inner",
    ].join(",")
  );

  elements.forEach((element) => {
    element.classList.add("el-scroll-reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("el-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const container = cardsContainerRef.current;

  if (!container) return;

  const cards = container.querySelectorAll(".el-program-card");
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  const cleanups = [];

  cards.forEach((card) => {
    let frameId = null;

    const resetTilt = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }

      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    const handlePointerMove = (event) => {
      if (!canHover.matches) return;

      const rect = card.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 6;
      const rotateX = (0.5 - y) * 6;

      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        card.style.setProperty("--tilt-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-y", `${rotateY}deg`);
        frameId = null;
      });
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", resetTilt);
    card.addEventListener("pointercancel", resetTilt);

    cleanups.push(() => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", resetTilt);
      card.removeEventListener("pointercancel", resetTilt);

      if (frameId) cancelAnimationFrame(frameId);

      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}, []);
  return (
    <main className="elevate-page">
      <section className="el-hero" id="elevate-home">
        <div className="el-hero-grid" aria-hidden="true" />
        <div className="el-hero-glow" aria-hidden="true" />
        <div className="el-container el-hero-content">
          <div className="el-hero-copy-content">
            <Eyebrow>A learning and innovation initiative by Olynto</Eyebrow>
            <div className="el-hero-brand">OLYNTO <span>ELEVATE</span></div>
            <h1>Learn. Build.<br /><em>Elevate.</em></h1>
            <p className="el-hero-subtitle">We train engineering students to own what they build, not just follow along.</p>
            <p className="el-hero-copy">Olynto Elevate brings professional engineering practice into the college itself—so students can build, debug, review and take responsibility for the work they ship.</p>
            <div className="el-actions">
              <a className="el-button el-button-gold" href="/contact-us">Bring Elevate to your campus <ArrowUpRight size={17} /></a>
              <a className="el-text-link" href="#el-offerings">Explore programs <ArrowRight size={16} /></a>
            </div>
            <div className="el-hero-foot"><span>01 / LEARN</span><span>02 / BUILD</span><span>03 / PROVE</span></div>
          </div>

          <div className="el-hero-slider" aria-label="Olynto Elevate workshop photos">
            {workshopPhotos.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`Olynto Elevate workshop ${index + 1}`}
                className={`el-hero-slide${activePhoto === index ? ' is-active' : ''}`}
                aria-hidden={activePhoto !== index}
                loading="eager"
                decoding="async"
              />
            ))}
            <div className="el-hero-slider-overlay" aria-hidden="true" />
            <div className="el-hero-slider-caption">
              <span>OLYNTO ELEVATE</span>
              <p>Real workshops. Real skills. Real growth.</p>
            </div>
            <div className="el-hero-slider-dots" aria-label="Choose workshop photo">
              {workshopPhotos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  className={`el-hero-slider-dot${activePhoto === index ? ' is-active' : ''}`}
                  aria-label={`Show workshop photo ${index + 1}`}
                  aria-pressed={activePhoto === index}
                  onClick={() => setActivePhoto(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="el-section el-who" id="el-who">
        <div className="el-container">
          <div className="el-section-heading el-heading-split">
            <div><Eyebrow>Who we are</Eyebrow><h2>The gap is real.<br /><em>We close it.</em></h2></div>
            <p>Many engineering students graduate without ever working the way professional engineers do. They learn from memory and tutorials, and then meet real systems for the first time in an interview.</p>
          </div>
          <div className="el-who-bottom">
            <p className="el-body-large">Olynto Elevate changes that. We bring professional engineering practice into the college itself. Students build, debug, review each other’s work, and take responsibility for what they ship.</p>
            <div className="el-principles">
              <article className="el-principle"><div className="el-icon-box"><Code2 size={22} /></div><div><span>01 / BUILD</span><h3>Make something real.</h3><p>Every student leaves with something they made.</p></div></article>
              <article className="el-principle"><div className="el-icon-box"><Users size={22} /></div><div><span>02 / REVIEW</span><h3>Improve it together.</h3><p>Code is read, questioned and improved by others.</p></div></article>
              <article className="el-principle"><div className="el-icon-box"><ShieldCheck size={22} /></div><div><span>03 / PROVE</span><h3>Show the evidence.</h3><p>Work sits in public repositories that anyone can check.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="el-section el-offerings" id="el-offerings">
        <div className="el-container">
          <div className="el-section-heading el-heading-split">
            <div><Eyebrow>What we offer</Eyebrow><h2>Three ways to build<br />with <em>Elevate.</em></h2></div>
            <p>Start with a Sprint, go deeper with a Semester Track, or aim for a Residency. Each path puts practical engineering work at the centre.</p>
          </div>
          <div
            className="el-program-grid el-program-carousel"
            ref={cardsContainerRef}
            onPointerDown={handleProgramPointerDown}
            onPointerUp={handleProgramPointerUp}
            onPointerCancel={() => { programDragStartRef.current = null; }}
          >
            {programs.map((program, index) => {
              const position = getProgramPosition(index);
              const positionClass =
                position === 0
                  ? "el-program-card--center"
                  : position === -1
                    ? "el-program-card--left"
                    : "el-program-card--right";

              return (
              <article
                className={`el-program-card ${positionClass}`}
                key={program.number}
                onClick={() => {
                  if (position !== 0) selectProgram(index);
                }}
                aria-label={`${program.title}${position === 0 ? "" : " — select card"}`}
              >
                <div className="el-program-top"><span className="el-program-number">{program.number}</span><span className="el-program-icon">{program.number === '01' ? <Code2 size={20} /> : program.number === '02' ? <Layers3 size={20} /> : <GraduationCap size={20} />}</span></div>
                <h3>{program.title}</h3>
                <h4>{program.lead}</h4>
                <p>{program.description}</p>
                <div className="el-program-meta"><span>{program.tag}</span>{program.status && (
  <span className="el-status">
    <i />
    {program.status}
  </span>
)}</div>
              <a
  className={`el-button ${
    program.kind === "whatsapp"
      ? "el-button-green"
      : "el-button-outline"
  }`}
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Olynto Elevate! I'm interested in ${program.title}. Please share more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {program.kind === "whatsapp" ? (
    <MessageCircle size={17} />
  ) : (
    <ArrowUpRight size={17} />
  )}

  {program.cta}
</a>
              </article>
              );
            })}
          </div>

          <div className="el-program-carousel-controls" aria-label="Programme carousel controls">
            <button
              type="button"
              className="el-program-carousel-arrow"
              onClick={() => selectProgram(activeProgramIndex - 1)}
              aria-label="Previous programme"
            >
              <ChevronLeft size={21} />
            </button>

            <div className="el-program-carousel-progress">
              <span className="el-program-carousel-count">
                {String(activeProgramIndex + 1).padStart(2, "0")}
              </span>
              <div className="el-program-carousel-track">
                <span
                  className="el-program-carousel-fill"
                  style={{ width: `${((activeProgramIndex + 1) / programs.length) * 100}%` }}
                />
              </div>
              <span className="el-program-carousel-count">
                {String(programs.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              className="el-program-carousel-arrow"
              onClick={() => selectProgram(activeProgramIndex + 1)}
              aria-label="Next programme"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>
      </section>

      <section className="el-section el-fellow-section" id="el-fellows">
        <div className="el-container el-fellow-layout">
          <div className="el-fellow-copy">
            <Eyebrow>For senior students</Eyebrow>
            <h2>Become an<br /><em>Elevate Fellow.</em></h2>
            <p>Strong senior students are selected to teach their juniors, review code, and build a record employers can check. Fellows lead sessions on their own campus with support from Olynto engineers, gaining experience guiding real technical work—not just doing it.</p>
            <button type="button" className="el-button el-button-gold" onClick={openFellowForm}>Apply to be selected <ArrowUpRight size={17} /></button>
          </div>
          <div className="el-fellow-details">
            <div className="el-detail-block"><h3><span>01</span> Who can apply</h3><ul><li>Senior engineering students comfortable building and debugging</li><li>Students who enjoy explaining things to others</li><li>Open to students from any college, whether or not it partners with us</li></ul></div>
            <div className="el-detail-block"><h3><span>02</span> What you get</h3><ul><li>Experience leading a real technical session</li><li>Support from Olynto engineers</li><li>A verifiable record of your teaching and code reviews</li><li>A path into Engineering Residencies</li><li>Certificate or reference from Olynto</li></ul></div>
          </div>
        </div>
      </section>

      <section className="el-section el-partners" id="el-partners">
        <div className="el-container">
          <div className="el-section-heading el-heading-split">
            <div><Eyebrow>MoU signed</Eyebrow><h2>Institutions we<br /><em>partner with.</em></h2></div>
            <p>Formal partnerships with colleges for programmes that run alongside the syllabus.</p>
          </div>
          <a className="el-partner-card" href="https://aitmbgm.ac.in/" target="_blank" rel="noreferrer">
            <div className="el-partner-mark">
  <img
    src="/images/elevate/aitm-logo.jpeg"
    alt="Angadi Institute of Technology and Management logo"
  />
</div>
            <div><span className="el-partner-label">INSTITUTIONAL PARTNER</span><h3>Angadi Institute of Technology &amp; Management</h3><p>Belagavi, Karnataka</p></div>
            <span className="el-partner-arrow"><ArrowUpRight size={20} /></span>
          </a>
        </div>
      </section>

      <section className="el-section el-gallery" id="el-gallery">
        <div className="el-container">
          <div className="el-section-heading el-heading-split">
            <div><Eyebrow>From our workshops</Eyebrow><h2>What it looks like<br />when students <em>build.</em></h2></div>
            <p>Moments from our first two applied AI workshops, where senior students taught their juniors.</p>
          </div>
          <div className="el-gallery-empty">
            <button
              type="button"
              className="el-gallery-launch"
              onClick={() => setIsGalleryOpen(true)}
              aria-haspopup="dialog"
            >
              <span className="el-gallery-launch-icon"><Play size={25} /></span>
              <span className="el-gallery-launch-content">
                <strong>Workshop gallery</strong>
                <span>Explore photos and videos from our applied AI workshops, where students learn, collaborate and build together.</span>
                <span className="el-gallery-launch-link">View gallery →</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="el-reach" id="el-reach">
        <div className="el-container el-reach-inner">
          <div><Eyebrow>Reach out</Eyebrow><h2>Let’s build something<br /><em>meaningful.</em></h2><p>Training engineering students to build, review and prove their work.</p></div>
          <a className="el-button el-button-gold" href="/contact-us">Bring Elevate to your campus <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="el-elevate-footer">
        <div className="el-container el-elevate-footer-inner">
          <div><div className="el-footer-brand">OLYNTO <span>ELEVATE</span></div><p>An initiative by Olynto LLP</p><p className="el-footer-description">Training engineering students to build, review and prove their work.</p></div>
          <div className="el-footer-contact"><span>CONTACT</span><a href="/contact-us"><Mail size={16} /> Contact Olynto</a></div>
         
{/* Follow Elevate */}
<div className="el-footer-social">
  <a
    href="https://www.instagram.com/olynto_elevate/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow Olynto Elevate on Instagram"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/olynto-elevate/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow Olynto Elevate on LinkedIn"
  >
    <Linkedin size={18} />
  </a>
</div>

        </div>
        <div className="el-container el-footer-bottom"><span>© 2026 Olynto LLP. All rights reserved.</span><a href="#elevate-home">Back to top ↑</a></div>
      </section>
{fellowModalOpen && (
  <div
    className="el-modal-backdrop"
    role="presentation"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        setFellowModalOpen(false);
      }
    }}
  >
    <section
      className="el-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="el-modal-title"
    >
      <button
        className="el-modal-close"
        type="button"
        aria-label="Close application form"
        onClick={() => setFellowModalOpen(false)}
      >
        <X size={20} />
      </button>

      {!applicationSubmitted ? (
        <>
          <Eyebrow>Elevate Fellowship</Eyebrow>

          <h2 id="el-modal-title">
            Apply to be an<br /><em>Elevate Fellow.</em>
          </h2>

          <p className="el-modal-intro">
            Tell us a little about yourself. Selected applicants will be contacted by the Olynto team.
          </p>

          <form onSubmit={handleSubmit}>
            {fellowFields.map((field) => (
              <label className="el-form-field" key={field.name}>
                <span>{field.label}{field.required ? ' *' : ''}</span>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </label>
            ))}

            <label className="el-form-field">
              <span>Why do you want to be a Fellow? *</span>
              <textarea
                name="reason"
                rows="4"
                placeholder="Tell us what you would like to contribute..."
                required
              />
            </label>

            {submitError && (
              <p role="alert" style={{ color: '#e05252', fontSize: '14px' }}>
                {submitError}
              </p>
            )}

            <button
              className="el-button el-button-gold el-form-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : (
                <>Submit application <ArrowRight size={17} /></>
              )}
            </button>
          </form>

          <p className="el-privacy">
            Your information will be securely stored and used only to review your Fellowship application and contact you.
          </p>
        </>
      ) : (
        <div className="el-form-success">
          <CheckCircle2 size={42} />
          <Eyebrow>Application submitted</Eyebrow>
          <h2 id="el-modal-title">Thank you.</h2>
          <p>
            Your Elevate Fellowship application has been received successfully.
            Our team will review your application and contact you through email.
          </p>
          <button
            className="el-button el-button-gold"
            type="button"
            onClick={() => setFellowModalOpen(false)}
          >
            Close <ArrowRight size={17} />
          </button>
        </div>
      )}
    </section>
  </div>
)}
      {isGalleryOpen && (
        <WorkshopGallery onClose={() => setIsGalleryOpen(false)} />
      )}
    </main>
  );
}