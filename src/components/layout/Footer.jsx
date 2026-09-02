import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="site-footer__inner">

          <div className="site-footer__brand">
            <span>OLYNTO</span>
            <small>LLP</small>
          </div>

          <div className="site-footer__socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/olyntol_official?igsi=N2c2NWh1Z2sxbzdk"
              className="site-footer__social"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@olynto_elevate"
              className="site-footer__social"
              aria-label="Threads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="threads-icon">@</span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="site-footer__social"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>

          </div>

          <p className="site-footer__copyright">
            © {new Date().getFullYear()} Olynto LLP. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}