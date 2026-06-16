import { Link } from 'react-router-dom';
import {
  Handshake, Globe, Droplets, Recycle, Sprout, Users,
  BookOpen, School, Monitor, Waves,
} from 'lucide-react';
import '../styles/sustainability.css';

const pillars = [
  {
    Icon: Handshake, title: 'Ethical Sourcing',
    desc: 'We partner only with farmers who treat their workers fairly and operate responsibly.',
    points: ['Fair pay for all farm workers', 'No child labour policy', 'Transparent farmer contracts', 'Worker welfare programmes'],
  },
  {
    Icon: Globe, title: 'Environmental Stewardship',
    desc: 'Protecting the environment that sustains our business is central to our philosophy.',
    points: ['Carbon footprint monitoring', 'Biodiversity protection zones', 'Soil health management', 'Integrated pest management'],
  },
  {
    Icon: Droplets, title: 'Water Conservation',
    desc: "Water is Kenya's most precious agricultural resource. Our conservation programme ensures efficient use and protection.",
    points: ['Drip irrigation systems', 'Rainwater harvesting', 'Water quality testing', 'Wetland protection'],
  },
  {
    Icon: Recycle, title: 'Waste Reduction',
    desc: 'We apply circular economy principles to minimise waste across all operations.',
    points: ['Compostable packaging options', 'Zero-waste packing facilities', 'Crop waste composting', 'Packaging take-back schemes'],
  },
  {
    Icon: Sprout, title: 'Responsible Farming',
    desc: 'Responsible farming is about leaving the land better than we found it.',
    points: ['Crop rotation practices', 'Organic matter enrichment', 'Reduced chemical inputs', 'Natural pest controls'],
  },
  {
    Icon: Users, title: 'Community Development',
    desc: 'Thriving communities make for thriving supply chains. We invest in communities around our partner farms.',
    points: ['Farmer training programmes', 'School support initiatives', 'Women empowerment projects', 'Local supplier preference'],
  },
];

const metrics = [
  { Icon: Droplets, value: '40%',  label: 'Water Usage Reduction' },
  { Icon: Users,    value: '100+', label: 'Partner Farmers Trained' },
  { Icon: Recycle,  value: '85%',  label: 'Packaging Recyclable' },
  { Icon: Handshake, value: '0',   label: 'Child Labour Incidents' },
];

const initiatives = [
  { Icon: BookOpen, text: 'Annual farmer training on sustainable practices attended by 100+ farmers' },
  { Icon: School,   text: 'School support programme in farming communities around partner farms' },
  { Icon: Monitor,  text: 'Digital record-keeping programme reducing paper waste by 70%' },
  { Icon: Waves,    text: 'Watershed protection along key rivers near agricultural regions' },
];

const divider = (margin = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function Sustainability() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
            Sustainability
          </div>
          <h1>Sustainably Grown in Kenya</h1>
          <p>Our commitment to sustainability is woven into every aspect of our business.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-gold-light)' }}>Sustainability</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="sustainability-intro page-section">
        <div className="container-xl">
          <div className="sustainability-lead">
            <div className="section-label">Our Commitment</div>
            <h2 className="section-title">Growing Responsibly for the Future</h2>
            {divider()}
            <p>
              At Carl Fresh Produce Limited, sustainability is more than a corporate
              policy — it is the foundation of our business model. We believe that
              responsible farming, fair trade practices and community investment are
              the only viable path to long-term agricultural success.
            </p>
            <p>
              Our tagline "Sustainably Grown in Kenya" is a promise to our buyers,
              our farmers, and to Kenya's land and people. We work every day to
              honour that commitment through measurable, transparent sustainability actions.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="sustainability-pillars page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Six Pillars</div>
            <h2 className="section-title">Our Sustainability Framework</h2>
            {divider()}
          </div>

          <div className="sustainability-pillars-grid">
            {pillars.map(({ Icon, title, desc, points }) => (
              <div key={title} className="sustain-pillar">
                <div className="sustain-pillar-header">
                  <div className="pill-icon"><Icon size={28} strokeWidth={1.75} /></div>
                  <h3>{title}</h3>
                </div>
                <div className="sustain-pillar-body">
                  <p>{desc}</p>
                  <ul className="sustain-pillar-list">
                    {points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="sustainability-metrics page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
              Impact
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>Our Sustainability Impact</h2>
            {divider()}
          </div>

          <div className="metrics-grid">
            {metrics.map(({ Icon, value, label }) => (
              <div key={label} className="metric-card">
                <div className="metric-icon"><Icon size={32} strokeWidth={1.5} /></div>
                <div className="metric-value">{value}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community-section page-section">
        <div className="container-xl">
          <div className="community-grid">
            <div className="community-image">
              <img
                src="https://images.unsplash.com/photo-1592979585344-4ca01a9fe0ca?w=700&q=80"
                alt="Carl Fresh community development in Kenya"
                loading="lazy"
              />
            </div>

            <div className="community-text">
              <div className="section-label">Community</div>
              <h2 className="section-title">Investing in Kenya's People</h2>
              {divider('1rem 0')}
              <p>
                Our success is inseparable from the success of the farming communities
                we work with. We believe that strong communities produce better farmers,
                and better farmers produce better produce.
              </p>
              <p>
                Through our community development programme, we invest in education,
                skills training, healthcare access and local infrastructure, creating
                lasting positive impact beyond the farm gate.
              </p>

              <div className="community-initiatives">
                {initiatives.map(({ Icon, text }) => (
                  <div key={text} className="community-initiative">
                    <Icon size={20} strokeWidth={1.75} color="var(--color-green-primary)" className="init-icon" />
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Committed to a Sustainable Future</h2>
          <p>Learn more about our sustainability programmes or partner with us for responsibly sourced Kenyan produce.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Partner With Us</Link>
            <Link to="/quality" className="btn-outline-white">Quality Standards</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
