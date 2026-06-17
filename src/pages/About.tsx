import { Link } from 'react-router-dom';
import {
  Handshake, Award, Leaf, Globe, Users, Lightbulb, Clock, ClipboardCheck,
  Target, Eye, Gem, Sprout, FlaskConical, Thermometer, Package,
  ArrowRight,
} from 'lucide-react';
import '../styles/about.css';

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

      {/* ── Intro ── */}
      <section className="about-intro page-section">
        <div className="container-xl">
          <div className="about-intro-grid">
            <div style={{ position: 'relative' }}>
              <div className="about-intro-image">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                  alt="Carl Fresh Produce farm in Kenya"
                  loading="lazy"
                />
              </div>
              <div className="about-intro-image-accent">
                <img
                  src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80"
                  alt="Quality inspection"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="about-intro-text" style={{ paddingBottom: '2rem' }}>
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">About Carl Fresh Produce Limited</h2>
              {divider('1rem 0')}
              <p>
                Carl Fresh Produce Limited is a premier Kenyan fresh produce exporter, committed
                to connecting the world's finest buyers with Kenya's exceptional agricultural
                output. Founded with a vision to transform Kenyan produce into a globally
                recognised premium brand, we have grown to become a trusted name in
                international fresh produce trade.
              </p>
              <p>
                Based in Nairobi, Kenya, our operations span the entire supply chain — from
                working closely with carefully selected partner farmers across Kenya's fertile
                highlands to managing export logistics with precision and care.
              </p>
              <p>
                We are proud to be ambassadors of Kenya's agricultural heritage, exporting
                chilies, avocados, mangoes, pineapples, fine beans, snap peas, snow peas,
                and passion fruits to markets across Europe, the Middle East, Asia and Africa.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Promise ── */}
      <section className="mvv-section page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Foundation</div>
            <h2 className="section-title">Mission, Vision & Values</h2>
            {divider()}
          </div>

          <div className="mvv-grid">
            <div className="mvv-card mission">
              <div className="mvv-icon"><Target size={28} strokeWidth={1.75} /></div>
              <h3>Our Mission</h3>
              <p>
                To be Kenya's most trusted fresh produce exporter by delivering consistently
                premium quality products, building lasting relationships with global buyers,
                and uplifting local farming communities through sustainable, profitable
                agricultural practices.
              </p>
            </div>
            <div className="mvv-card vision">
              <div className="mvv-icon"><Eye size={28} strokeWidth={1.75} /></div>
              <h3>Our Vision</h3>
              <p>
                To establish Carl Fresh Produce as the benchmark for excellence in African
                fresh produce exports — recognised globally for unparalleled quality,
                sustainability, and the authentic taste of Kenya's agricultural richness.
              </p>
            </div>
            <div className="mvv-card values">
              <div className="mvv-icon"><Gem size={28} strokeWidth={1.75} /></div>
              <h3>Our Promise</h3>
              <p>
                Every product we export carries our promise: Safe to eat, of the highest
                Quality, Sustainably grown, fully Traceable, and Reliably delivered. These
                five pillars guide every decision we make from farm to export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="page-section" style={{ background: '#fff' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">What Drives Us</div>
            <h2 className="section-title">Our Core Values</h2>
            {divider()}
          </div>

          <div className="values-grid">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="value-item">
                <div className="icon"><Icon size={26} strokeWidth={1.75} color="var(--color-green-primary)" /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operations ── */}
      <section className="who-we-are page-section">
        <div className="container-xl">
          <div className="who-grid">
            <div>
              <div className="section-label">Our Operations</div>
              <h2 className="section-title">Built for Export Excellence</h2>
              {divider('1rem 0')}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-gray-mid)', lineHeight: 1.8 }}>
                Our vertically integrated operations give us complete control over product
                quality, supply consistency, and export logistics. We partner with certified
                farms across Kenya's most productive agricultural regions, ensuring year-round
                supply of premium fresh produce.
              </p>

              <div className="who-features">
                {features.map(({ Icon, title, desc }) => (
                  <div key={title} className="who-feature">
                    <div className="feature-icon">
                      <Icon size={20} strokeWidth={1.75} color="var(--color-green-primary)" />
                    </div>
                    <div className="feature-text">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="who-image">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80"
                alt="Carl Fresh Produce quality control operations"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="about-stats page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
              By The Numbers
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>Carl Fresh in Numbers</h2>
          </div>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
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
