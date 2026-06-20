import { Link } from 'react-router-dom';
import {
  Handshake, Award, Leaf, Globe, Users, Lightbulb, Clock, ClipboardCheck,
  Target, Eye, Gem, Sprout, FlaskConical, Thermometer, Package,
  ArrowRight,
} from 'lucide-react';
import '../styles/about.css';
import Logo from '../assets/logo.png';
import Banner from '../assets/trial.png';
import Export from '../assets/Export.png';

const values = [
  { Icon: Handshake,     title: 'Integrity',    desc: 'Honest business practices, transparent operations and trustworthy partnerships.' },
  { Icon: Award,         title: 'Quality First', desc: 'Uncompromising standards from farm to final delivery at every touchpoint.' },
  { Icon: Leaf,          title: 'Sustainability', desc: 'Long-term commitment to environmental stewardship and responsible farming.' },
  { Icon: Globe,         title: 'Global Focus',   desc: 'International market awareness driving our product development and logistics.' },
  { Icon: Users,         title: 'Community',      desc: 'Empowering local farmers and communities through fair partnerships.' },
  { Icon: Lightbulb,     title: 'Innovation',     desc: 'Embracing modern agricultural practices and technology for better outcomes.' },
  { Icon: Clock,         title: 'Reliability',    desc: 'Consistent supply schedules and dependable logistics partners worldwide.' },
  { Icon: ClipboardCheck, title: 'Compliance',   desc: 'Full adherence to international food safety and trade regulations.' },
];

const stats = [
  { number: '15+',  label: 'Years of Excellence' },
  { number: '500+', label: 'Tonnes Exported' },
  { number: '15+',  label: 'Global Markets' },
  { number: '100+', label: 'Partner Farmers' },
];

const features = [
  { Icon: Sprout,       title: 'Farm-to-Export Expertise',  desc: 'We control the entire supply chain from our partner farms to the point of export.' },
  { Icon: FlaskConical, title: 'Quality Assurance Labs',    desc: 'On-site testing and inspection facilities ensure every batch meets specification.' },
  { Icon: Thermometer,  title: 'Cold Chain Infrastructure', desc: 'State-of-the-art cold storage and refrigerated transport maintain product freshness.' },
  { Icon: Package,      title: 'Custom Packaging',          desc: 'Flexible packaging solutions designed to meet buyer and market-specific requirements.' },
];

const divider = (margin: string = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function About() {
  return (
    <main>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            About Us
          </div>
          <h1>Our Story So Far</h1>
          <p>Building trust and quality from the fields of Kenya to global markets.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* ==========================
   BRAND STORY
========================== */}

<section className="about-story page-section">
  <div className="container-xl">

    <div className="story-grid">

      <div className="story-image">
        <img
          src={Banner}
          alt="Fresh Produce"
        />
      </div>

      <div className="story-content">

        <div className="section-label">
          ABOUT US
        </div>

        <h2 className="section-title">
          Fresh Produce From Kenya To The World
        </h2>

        <p>
          Carl Fresh Produce connects global markets with
          premium fruits and vegetables grown in Kenya's
          fertile agricultural regions.
        </p>

        <p>
          Through strong partnerships with farmers,
          rigorous quality control and dependable export
          logistics, we deliver freshness, consistency
          and traceability across every shipment.
        </p>

      </div>

    </div>

  </div>
</section>

{/* ==========================
   MARQUEE
========================== */}

<section className="capabilities-section">

  <div className="capability-track">

    <span><Globe size={18}/> Global Export</span>
    <span><Leaf size={18}/> Sustainable Farming</span>
    <span><ClipboardCheck size={18}/> Quality Control</span>
    <span><Package size={18}/> Premium Packaging</span>
    <span><Thermometer size={18}/> Cold Chain</span>
    <span><Handshake size={18}/> Trusted Partnerships</span>
    <span><Award size={18}/> Certified Produce</span>
    <span><Clock size={18}/> Reliable Delivery</span>

    {/* duplicate */}
    <span><Globe size={18}/> Global Export</span>
    <span><Leaf size={18}/> Sustainable Farming</span>
    <span><ClipboardCheck size={18}/> Quality Control</span>
    <span><Package size={18}/> Premium Packaging</span>
    <span><Thermometer size={18}/> Cold Chain</span>

  </div>

</section>

{/* ==========================
   EXPORT SHOWCASE
========================== */}

<section className="export-showcase page-section">

  <div className="container-xl">

    <div className="showcase-grid">

      <div className="showcase-card dark">

        <span className="showcase-tag">
          Fresh Produce
        </span>

        <h3>
          Exporting Kenya's Finest Fruits
        </h3>

        <p>
          Avocados, mangoes, passion fruits,
          pineapples and premium tropical produce.
        </p>

      </div>

      <div className="showcase-image">
        <img
          src={Export}
          alt="Export"
        />
      </div>

      <div className="showcase-image">
        <img
          src={Export}
          alt="Export II"
        />
      </div>

      <div className="showcase-card light">

        <span className="showcase-tag">
          Vegetables
        </span>

        <h3>
          Premium Farm Fresh Exports
        </h3>

        <p>
          Chillies, beans, peas and carefully
          selected vegetables grown for international markets.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ==========================
   OPERATIONS
========================== */}

<section className="operations-section page-section">

  <div className="container-xl">

    <div className="section-heading-center">

      <div className="section-label">
        OUR PROCESS
      </div>

      <h2 className="section-title">
        From Farm To Global Markets
      </h2>

    </div>

    <div className="operations-grid">

      <div>
        <h4>01</h4>
        <p>Farmer Partnerships</p>
      </div>

      <div>
        <h4>02</h4>
        <p>Harvest & Sorting</p>
      </div>

      <div>
        <h4>03</h4>
        <p>Quality Inspection</p>
      </div>

      <div>
        <h4>04</h4>
        <p>Export Logistics</p>
      </div>

    </div>

  </div>

</section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Ready to Source Premium Kenyan Produce?</h2>
          <p>Speak to our export team about tailored supply agreements and pricing.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Contact Our Team</Link>
            <Link to="/products" className="btn-outline-white">View Our Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
