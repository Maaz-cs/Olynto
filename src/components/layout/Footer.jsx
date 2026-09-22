
import React from 'react';

import { Instagram, Linkedin, Facebook } from 'lucide-react';

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

           {/* Facebook */}
<a
  href="https://www.facebook.com/share/19U9ec3VBG/"
  className="site-footer__social"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
>
  <Facebook size={20} />
</a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/olynto-official/"
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
