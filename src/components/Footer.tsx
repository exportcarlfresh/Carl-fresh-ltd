import { Link } from 'react-router-dom';
import { Briefcase, Users, Camera, CirclePlay, MapPin, Phone, Mail, Globe } from 'lucide-react';
import '../styles/footer.css';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home',          path: '/' },
  { label: 'About Us',      path: '/about' },
  { label: 'Products',      path: '/products' },
  { label: 'News & Insights', path: '/news' },
  { label: 'Gallery',       path: '/gallery' },
  { label: 'Contact Us',    path: '/contact' },
];

const complianceLinks = [
  { label: 'Quality & Food Safety', path: '/quality' },
  { label: 'Sustainability',        path: '/sustainability' },
  { label: 'Export Markets',        path: '/export-markets' },
  { label: 'Packaging & Logistics', path: '/packaging' },
];

const socialLinks = [
  { Icon: Briefcase,  href: '#', label: 'LinkedIn' },
  { Icon: Users,      href: '#', label: 'Facebook' },
  { Icon: Camera,     href: '#', label: 'Instagram' },
  { Icon: CirclePlay, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-xl footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Logo height={52} inverted />
            <p>
              Carl Fresh Produce Limited is a premium Kenyan exporter of fresh fruits,
              vegetables, herbs and spices, committed to sustainable agriculture and
              international quality standards.
            </p>
            <div className="footer-tagline">SAFE · QUALITY · SUSTAINABLE</div>

            <div className="footer-certs">
              {['HACCP', 'GlobalG.A.P.', 'KEPHIS', 'KEBS'].map(cert => (
                <span key={cert} className="footer-cert-badge">{cert}</span>
              ))}
            </div>

            <div className="footer-social">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} title={label}>
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quality & trade */}
          <div className="footer-col">
            <h4>Quality & Trade</h4>
            <ul className="footer-links">
              {complianceLinks.map(l => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get In Touch</h4>

            <div className="footer-contact-item">
              <div className="icon"><MapPin size={15} strokeWidth={1.75} /></div>
              <div className="text">Nairobi, Kenya</div>
            </div>

            <div className="footer-contact-item">
              <div className="icon"><Phone size={15} strokeWidth={1.75} /></div>
              <div className="text">
                <a href="tel:+254712365084">+254 712 365 084</a><br />
                <a href="tel:+254722537995">+254 722 537 995</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="icon"><Mail size={15} strokeWidth={1.75} /></div>
              <div className="text">
                <a href="mailto:export@carlfresh.com">export@carlfresh.com</a><br />
                <a href="mailto:info@carlfresh.com">info@carlfresh.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="icon"><Globe size={15} strokeWidth={1.75} /></div>
              <div className="text">
                <a href="http://www.carlfresh.com">www.carlfresh.com</a>
              </div>
            </div>

            <a
              href="https://wa.me/254712365084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '1.25rem', fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="container-xl footer-bottom">
        <p>© {year} Carl Fresh Produce Limited. All rights reserved. Sustainably Grown in Kenya.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
