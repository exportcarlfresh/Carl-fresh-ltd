import { Link } from 'react-router-dom';
import {
  Handshake, Award, Leaf, Globe, Clock, ClipboardCheck, Thermometer, Package,
} from 'lucide-react';
import '../styles/about.css';
import Logo from '../assets/logo.png';
import Banner from '../assets/About.png';
import Export from '../assets/HeroAbout2.png';

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
          From Kenya's Fertile Lands to Global Tables
        </h2>

        <p>
          Carl Fresh Produce Limited is a premier Kenyan exporter dedicated to
          delivering the finest fresh produce to international markets. Rooted in
          Kenya's rich agricultural heritage, we combine traditional farming wisdom
          with modern quality systems to consistently meet and exceed global standards.
        </p>

        <p>
          Our team of experienced agronomists, quality controllers, and logistics
          specialists ensures every product that leaves our facility meets the
          exacting requirements of European, Middle Eastern, and Asian buyers.
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
