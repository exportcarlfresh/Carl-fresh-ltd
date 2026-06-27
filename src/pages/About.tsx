import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake, Award, Leaf, Globe, Clock, ClipboardCheck, Thermometer, Package,
  ShieldCheck, Truck, Sparkles, Lightbulb, Users, Heart,
} from 'lucide-react';
import '../styles/about.css';
import Banner from '../assets/AboutProfile.png';
import herbs from '../assets/images/herbs.png';
import vegetables from '../assets/images/vegetables.png';
import fruits from '../assets/images/fruits.png';

const coreValues = [
  {
    id: 'integrity',
    num: '01',
    icon: ShieldCheck,
    title: 'Integrity',
    short: 'We do what we say.',
    detail: "From farm contracts to export documentation, our word is our bond — transparency at every link of the chain.",
  },
  {
    id: 'excellence',
    num: '02',
    icon: Sparkles,
    title: 'Excellence',
    short: "High Standards.",
    detail: 'We hold every harvest to a standard higher than what is required, because reputation is earned one shipment at a time.',
  },
  {
    id: 'sustain',
    num: '03',
    icon: Leaf,
    title: 'Sustainability',
    short: 'Farming for tomorrow.',
    detail: 'We invest in soil health, water stewardship and fair partnerships with the farmers who feed this business.',
  },
  {
    id: 'innovation',
    num: '04',
    icon: Lightbulb,
    title: 'Innovation',
    short: 'Always improving.',
    detail: 'From cold-chain technology to traceability systems, we adopt what makes our produce safer and our process sharper.',
  },
  {
    id: 'partnership',
    num: '05',
    icon: Users,
    title: 'Partnership',
    short: 'We grow together.',
    detail: 'Our farmers, freight partners and buyers are not vendors — they are co-authors of every successful season.',
  },
  {
    id: 'customer',
    num: '06',
    icon: Heart,
    title: 'Customer Focus',
    short: 'Your standards, our obsession.',
    detail: 'We shape our grading, packaging and scheduling around what matters most to the markets we serve.',
  },
];

function ValueCard({ value }: { value: typeof coreValues[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = value.icon;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  }

  return (
    <div
      ref={cardRef}
      className={`value-mosaic-card value-${value.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="value-num">{value.num}</span>
      <div className="value-icon"><Icon size={22} /></div>
      <h3>{value.title}</h3>
      <p className="value-short">{value.short}</p>
      <p className="value-detail">{value.detail}</p>
    </div>
  );
}

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
   OUR MISSION
========================== */}

<section className="mission-section">

  <svg className="mission-globe" viewBox="0 0 600 600" aria-hidden="true">
    <circle cx="300" cy="300" r="280" />
    <ellipse cx="300" cy="300" rx="130" ry="280" />
    <ellipse cx="300" cy="300" rx="280" ry="130" />
    <ellipse cx="300" cy="300" rx="280" ry="40" />
    <line x1="20" y1="300" x2="580" y2="300" />
    <line x1="300" y1="20" x2="300" y2="580" />
    <circle cx="170" cy="195" r="3.5" className="mission-globe-dot" />
    <circle cx="430" cy="240" r="3.5" className="mission-globe-dot" />
    <circle cx="380" cy="420" r="3.5" className="mission-globe-dot" />
    <path d="M170,195 C260,140 340,160 430,240" className="mission-globe-route" />
    <path d="M430,240 C440,330 410,380 380,420" className="mission-globe-route" />
  </svg>

  <div className="mission-pattern" aria-hidden="true" />

  <div className="container-xl mission-inner">

    <div className="section-label mission-label">
      Our Mission
    </div>

    <h2 className="mission-heading">
      Why We Exist
    </h2>

    <div className="mission-manifesto">

      <p>
        To provide <span className="hl-gold">safe, premium-quality and sustainably</span> grown
         fresh produce through efficient supply chains, responsible farming, and long-term partnerships 
      </p>

      <p>
       partnerships that create value for 
        <span className="hl-green-light"> customers, farmers, and communities.</span>.
      </p>

      <p className="mission-emphasis">
        This is not logistics. This is stewardship —
        of land, of labour, and of the long relationships that move
        a harvest from one hemisphere to another.
      </p>

    </div>

  </div>

</section>

{/* ==========================
   OUR VISION
========================== */}

<section className="vision-section page-section">
  <div className="container-xl vision-inner">

    <div className="vision-card">

      <div className="section-label">
        Our Vision
      </div>

      <h2 className="section-title">
        Where We Are Going
      </h2>

      <p className="vision-statement">
        To become a leading global supplier of premium fresh produce from Kenya,
         recognized for quality, reliability, and sustainable agricultural practices.
      </p>

    </div>

  </div>
</section>

{/* ==========================
   OUR PROMISE
========================== */}

<section className="promise-section page-section">

  <div className="container-xl">

    <div className="section-heading-center">
      <div className="section-label">Our Promise</div>
      <h2 className="section-title">A Journey Built On Trust</h2>
    </div>

    <div className="promise-journey">

      <div className="promise-line" />

      <div className="promise-pillar">
        <div className="promise-marker"><ShieldCheck size={22} /></div>
        <h4>Quality Assured</h4>
        <p className="promise-desc">
          Every batch inspected, graded and certified before it leaves our hands.
        </p>
      </div>

      <div className="promise-pillar">
        <div className="promise-marker"><Truck size={22} /></div>
        <h4>Reliable Delivery</h4>
        <p className="promise-desc">
          Cold-chain logistics and disciplined scheduling, shipment after shipment.
        </p>
      </div>

      <div className="promise-pillar">
        <div className="promise-marker"><Handshake size={22} /></div>
        <h4>Trusted Partnerships</h4>
        <p className="promise-desc">
          Long-term relationships built on transparency, not transactions.
        </p>
      </div>

    </div>

  </div>

</section>

{/* ==========================
   CORE VALUES
========================== */}

<section className="values-section page-section">

  <div className="container-xl">

    <div className="section-heading-center">
      <div className="section-label">Core Values</div>
      <h2 className="section-title">What We Stand For</h2>
    </div>

    <div className="values-mosaic">
      {coreValues.map((value) => (
        <ValueCard key={value.id} value={value} />
      ))}
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
          Exporting Kenya's Finest Herbs & Spices
        </h3>

        <p>
          •	Long Cayenne Chili 
          •	Thin Chili 
          •	Bullet Chili ,
         Additional herbs and spices may be added according to seasonal demand and customer specifications..
        </p>

      </div>

      <div className="showcase-image">
        <img
          src={herbs}
          alt="Export"
        />
      </div>

      <div className="showcase-image">
        <img
          src={vegetables}
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
          src={fruits}
          alt="Export"
        />
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
