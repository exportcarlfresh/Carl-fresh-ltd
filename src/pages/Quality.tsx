import { Link } from 'react-router-dom';
import {
  FlaskConical, Sprout, Shield, Link2, Thermometer,
  BadgeCheck, Globe, ShieldCheck,
} from 'lucide-react';
import '../styles/quality.css';

const pillars = [
  {
    Icon: FlaskConical,
    title: 'Quality Assurance',
    desc: 'Our Quality Assurance programme encompasses pre-harvest, harvest, and post-harvest monitoring. Trained quality controllers inspect every consignment before packing, ensuring only products meeting our specification are exported.',
  },
  {
    Icon: Sprout,
    title: 'Good Agricultural Practices (GAP)',
    desc: 'All our partner farms operate under GAP certification. This includes responsible use of agrochemicals, soil health management, water quality monitoring, and worker welfare standards aligned with international protocols.',
  },
  {
    Icon: Shield,
    title: 'HACCP Principles',
    desc: 'We apply Hazard Analysis and Critical Control Points (HACCP) principles throughout our operations, identifying and controlling biological, chemical and physical hazards at every stage of the supply chain.',
  },
  {
    Icon: Link2,
    title: 'Traceability Systems',
    desc: 'Our end-to-end traceability system tracks every consignment from the specific farm plot, through packing and inspection, to the final point of delivery — providing buyers with complete supply chain transparency.',
  },
  {
    Icon: Thermometer,
    title: 'Cold Chain Management',
    desc: 'Maintaining the cold chain from harvest to delivery is critical to product quality. Our dedicated cold storage facilities, refrigerated transport and air freight partnerships ensure products arrive in perfect condition.',
  },
];

const haccpSteps = [
  { num: '01', title: 'Hazard Analysis',       desc: 'Identifying potential biological, chemical and physical hazards at each production step.' },
  { num: '02', title: 'Critical Control Points', desc: 'Determining the points in the process where hazards can be prevented, eliminated or reduced.' },
  { num: '03', title: 'Critical Limits',        desc: 'Establishing measurable limits (temperature, pH, time) for each critical control point.' },
  { num: '04', title: 'Monitoring Procedures',  desc: 'Regular monitoring of each CCP to ensure critical limits are consistently met.' },
  { num: '05', title: 'Corrective Actions',     desc: 'Defined procedures for corrective action when monitoring indicates a CCP is not under control.' },
  { num: '06', title: 'Verification & Records', desc: 'Regular verification activities and comprehensive record-keeping to confirm the HACCP system is effective.' },
];

const certs = [
  { Icon: BadgeCheck,  title: 'HACCP',          desc: 'Hazard Analysis Critical Control Points certification for food safety management.' },
  { Icon: Sprout,      title: 'GlobalG.A.P.',   desc: 'Good Agricultural Practices certification recognised by retailers worldwide.' },
  { Icon: Globe,       title: 'Kenya KEBS',      desc: 'Kenya Bureau of Standards compliance for domestic and export quality standards.' },
  { Icon: ShieldCheck, title: 'KEPHIS',          desc: 'Kenya Plant Health Inspectorate Service phytosanitary certification for all exports.' },
];

const divider = (margin = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function Quality() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            Quality & Food Safety
          </div>
          <h1>Our Quality Commitment</h1>
          <p>
            From seed selection to export shipment — rigorous quality and food
            safety standards underpin everything we do at Carl Fresh.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Quality & Food Safety</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="quality-intro page-section">
        <div className="container-xl">
          <div className="quality-intro-grid">
            <div>
              <div className="section-label">Our Approach</div>
              <h2 className="section-title">Quality is Non-Negotiable</h2>
              {divider('1rem 0')}
              <div className="quality-intro-text">
                <p>
                  At Carl Fresh Produce Limited, quality is not an afterthought — it is the
                  foundation of our business. From the moment seeds are planted to the instant
                  a consignment is loaded for export, every step is governed by internationally
                  recognised quality and food safety standards.
                </p>
                <p>
                  We work closely with our partner farmers, providing training, agronomic
                  support and the tools they need to meet the exacting requirements of
                  European supermarkets, Middle Eastern importers and Asian food processors.
                </p>
                <p>
                  Our in-house quality team conducts pre-harvest inspections, supervises
                  packing operations, and performs final inspection before every consignment
                  is certified for export.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80"
                alt="Quality inspection at Carl Fresh facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="quality-pillars page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Standards</div>
            <h2 className="section-title">Quality & Safety Pillars</h2>
            {divider()}
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Five interconnected pillars form the basis of our comprehensive food
              safety and quality management system.
            </p>
          </div>

          <div className="quality-pillars-grid">
            {pillars.map(({ Icon, title, desc }) => (
              <div key={title} className="pillar-card">
                <div className="icon"><Icon size={28} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HACCP Steps */}
      <section className="haccp-section page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">HACCP Framework</div>
            <h2 className="section-title">Our HACCP Implementation</h2>
            {divider()}
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A systematic, science-based approach to food safety used across
              all our packing and export operations.
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="haccp-steps">
              {haccpSteps.map((step) => (
                <div key={step.num} className="haccp-step">
                  <div className="haccp-step-number">{step.num}</div>
                  <div className="haccp-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certs-display page-section" style={{ background: '#fff' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Certifications</div>
            <h2 className="section-title">Our Accreditations</h2>
            {divider()}
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Internationally recognised certifications demonstrate our commitment
              to food safety, quality and responsible production.
            </p>
          </div>

          <div className="certs-display-grid">
            {certs.map(({ Icon, title, desc }) => (
              <div key={title} className="cert-display-card">
                <div className="cert-badge"><Icon size={28} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Questions About Our Quality Standards?</h2>
          <p>Our quality team is ready to provide detailed documentation and answer buyer queries.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Contact Quality Team</Link>
            <Link to="/sustainability" className="btn-outline-white">View Sustainability</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
