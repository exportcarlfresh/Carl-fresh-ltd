import { Link } from 'react-router-dom';
import { Globe, MapPin, Package, ArrowRight } from 'lucide-react';
import '../styles/exports.css';

const regions = [
  {
    Icon: Globe, region: 'Europe', subtitle: 'Our largest and most established market',
    products: ['Avocados', 'Fine Beans', 'Snap Peas', 'Snow Peas', 'Chilies', 'Mangoes'],
    info: "Europe is Carl Fresh's primary market, with established relationships with importers, distributors and supermarket chains in the UK, Netherlands, Germany and France. We comply fully with EU phytosanitary and food safety regulations, including Maximum Residue Level (MRL) requirements.",
  },
  {
    Icon: Globe, region: 'Middle East', subtitle: 'High-growth premium market',
    products: ['Avocados', 'Mangoes', 'Chilies', 'Passion Fruits', 'Pineapples'],
    info: "The Middle East represents a rapidly growing market for premium Kenyan produce. We serve major importers in UAE, Saudi Arabia and Qatar, with products transported via efficient air freight routes from Nairobi's Jomo Kenyatta International Airport.",
  },
  {
    Icon: Globe, region: 'Asia', subtitle: 'Emerging premium markets',
    products: ['Avocados', 'Chilies', 'Snow Peas', 'Snap Peas', 'Passion Fruits'],
    info: 'Asian markets, particularly Singapore, Malaysia and Hong Kong, have a growing appetite for premium African produce. Our cold chain expertise and fast air freight connections make us a reliable supplier for time-sensitive Asian buyers.',
  },
  {
    Icon: Globe, region: 'Africa', subtitle: 'Regional trade and wholesale markets',
    products: ['Mangoes', 'Pineapples', 'Avocados', 'Chilies', 'Fine Beans'],
    info: 'Within Africa, we serve regional markets including Rwanda, Uganda, Tanzania and South Africa. As intra-African trade grows, we are positioned to be a leading supplier of premium Kenyan produce across the continent.',
  },
];

const keyMarkets = [
  { name: 'United Kingdom' },
  { name: 'Netherlands' },
  { name: 'Germany' },
  { name: 'France' },
  { name: 'UAE' },
  { name: 'Saudi Arabia' },
  { name: 'Qatar' },
  { name: 'Singapore' },
  { name: 'Malaysia' },
  { name: 'Hong Kong' },
  { name: 'Rwanda' },
  { name: 'Tanzania' },
];

const divider = (margin = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function ExportMarkets() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            Export Markets
          </div>
          <h1>Our Global Reach</h1>
          <p>From Nairobi to the world — serving premium buyers across Europe, the Middle East, Asia and Africa.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Export Markets</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="export-intro page-section">
        <div className="container-xl">
          <div className="section-label">Global Presence</div>
          <h2 className="section-title">Kenya to the World</h2>
          {divider('1rem 0')}
          <p>
            Carl Fresh Produce Limited currently serves buyers in 15+ countries across four
            continents. Our strategic location in Nairobi provides direct access to Jomo
            Kenyatta International Airport, one of Africa's busiest cargo hubs, enabling
            efficient air freight to global markets.
          </p>
          <p>
            We work with a network of trusted freight forwarders, customs brokers and
            in-market agents to ensure seamless delivery from Kenya to your warehouse.
          </p>
        </div>
      </section>

      {/* Map visual */}
      <section className="export-map-section page-section" style={{ paddingTop: 0 }}>
        <div className="container-xl">
          <div className="export-map-container">
            <div className="map-overlay">
              <Globe size={48} color="var(--color-green-primary)" strokeWidth={1.25} style={{ margin: '0 auto 0.75rem' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-green-primary)' }}>
                Export Reach: 15+ Countries
              </p>
              <p>Serving buyers across Europe, Middle East, Asia & Africa</p>
            </div>
            <div className="map-pins">
              {[
                { label: 'UK', top: '22%', left: '42%' },
                { label: 'Netherlands', top: '20%', left: '46%' },
                { label: 'Germany', top: '23%', left: '48%' },
                { label: 'UAE', top: '38%', left: '60%' },
                { label: 'Kenya', top: '55%', left: '56%' },
                { label: 'Singapore', top: '58%', left: '76%' },
              ].map(pin => (
                <div key={pin.label} className="map-pin" style={{ top: pin.top, left: pin.left }}>
                  <div className="pin-dot" />
                  <div className="pin-label">{pin.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Region cards */}
      <section className="export-regions-section page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Regions</div>
            <h2 className="section-title">Markets We Serve</h2>
            {divider()}
          </div>

          <div className="regions-grid">
            {regions.map(({ Icon, region, subtitle, products, info }) => (
              <div key={region} className="region-card">
                <div className="region-card-header">
                  <div className="region-flag"><Icon size={32} strokeWidth={1.5} /></div>
                  <div>
                    <h3>{region}</h3>
                    <p>{subtitle}</p>
                  </div>
                </div>
                <div className="region-card-body">
                  <div className="region-products-list">
                    {products.map(p => (
                      <span key={p} className="region-product-tag">
                        <Package size={11} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="region-info">{info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key markets */}
      <section className="key-markets page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
              Country List
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>Key Destination Countries</h2>
            {divider()}
          </div>

          <div className="key-markets-grid">
            {keyMarkets.map(({ name }) => (
              <div key={name} className="market-item">
                <div className="flag"><MapPin size={22} strokeWidth={1.5} /></div>
                <div className="market-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Looking to Import from Kenya?</h2>
          <p>Connect with our export team to discuss market entry, pricing, logistics and supply chain partnerships.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Start a Conversation</Link>
            <Link to="/packaging" className="btn-outline-white">
              Packaging & Logistics <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
