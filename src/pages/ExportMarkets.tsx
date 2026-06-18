import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Package, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import '../styles/exports.css';

const regions = [
  {
    region: 'Europe',
    subtitle: 'Established premium buyers',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80',
    countries: ['UK', 'Netherlands', 'Germany', 'France'],
    products: ['Avocados', 'Fine Beans', 'Snap Peas', 'Snow Peas'],
    info: 'Strong demand across supermarket and wholesale channels with strict compliance to EU standards.',
  },
  {
    region: 'Middle East',
    subtitle: 'Fast-growing demand hubs',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    countries: ['UAE', 'Saudi Arabia', 'Qatar'],
    products: ['Mangoes', 'Chilies', 'Avocados', 'Pineapples'],
    info: 'High-value markets supported by efficient air freight and strong seasonal demand.',
  },
  {
    region: 'Asia',
    subtitle: 'Premium export growth',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    countries: ['Singapore', 'Malaysia', 'Hong Kong'],
    products: ['Passion Fruits', 'Snow Peas', 'Chilies', 'Avocados'],
    info: 'Time-sensitive and quality-driven markets that value freshness, traceability and consistency.',
  },
  {
    region: 'Africa',
    subtitle: 'Regional trade expansion',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
    countries: ['Rwanda', 'Uganda', 'Tanzania', 'South Africa'],
    products: ['Mangoes', 'Pineapples', 'Avocados', 'Fine Beans'],
    info: 'Connected regional supply channels supporting high-volume trade across the continent.',
  },
];

const marketPoints = [
  'Reliable cold chain handling',
  'Regulatory compliance support',
  'Custom freight solutions',
  'Traceable farm-to-port sourcing',
];

const divider = (margin = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function ExportMarkets() {
  const [activeRegion, setActiveRegion] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % regions.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + regions.length) % regions.length);
  };

  const activeMarket = regions[activeRegion];

  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">Export Markets</div>
          <h1>Our Global Reach</h1>
          <p>From Nairobi to the world — serving premium buyers across Europe, the Middle East, Asia and Africa.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Export Markets</span>
          </div>
        </div>
      </div>

      {/* Intro / carousel section */}
      <section className="export-intro page-section">
        <div className="container-xl">
          <div className="export-intro-panel">
            <div>
              <div className="section-label">Global Presence</div>
              <h2 className="section-title">Kenya to the World</h2>
              {divider('1rem 0')}
              <p>
                Carl Fresh Produce Limited currently serves buyers in 15+ countries across four continents.
                From Nairobi, our logistics network reaches major import hubs with speed, reliability and full compliance.
              </p>
            </div>
            <div className="export-stats-card">
              <span>15+</span>
              <p>Countries Exported</p>
            </div>
          </div>

          <div className="export-carousel-shell">
            <button type="button" className="carousel-btn" onClick={prevSlide} aria-label="Previous market">
              <ChevronLeft size={18} />
            </button>

            <div className="export-carousel-track">
              {regions.map((market, index) => (
                <article
                  key={market.region}
                  className={`export-carousel-card ${index === carouselIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `linear-gradient(rgba(6,38,12,0.18), rgba(6,38,12,0.72)), url(${market.image})` }}
                >
                  <div className="export-carousel-card-inner">
                    <p>{market.region}</p>
                    <h3>{market.subtitle}</h3>
                    <div className="carousel-card-footer">
                      <span>{market.countries.length} markets</span>
                      <span>{market.products.length} products</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="carousel-btn" onClick={nextSlide} aria-label="Next market">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive map */}
      <section className="export-map-section page-section">
        <div className="container-xl">
          <div className="export-map-layout">
            <div className="export-map-panel">
              <div className="map-header">
                <div>
                  <div className="section-label">Trade Routes</div>
                  <h2 className="section-title">Interactive Market Map</h2>
                </div>
                <span className="map-pill">{activeMarket.region}</span>
              </div>

              <div className="map-surface">
                <div className="map-surface-overlay" />
                {regions.map((market, index) => (
                  <button
                    key={market.region}
                    type="button"
                    className={`map-pin ${index === activeRegion ? 'active' : ''}`}
                    style={{ top: `${20 + index * 14}%`, left: `${35 + index * 12}%` }}
                    onClick={() => setActiveRegion(index)}
                  >
                    <span className="pin-dot" />
                    <span className="pin-label">{market.region}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="map-info-card">
              <p className="map-info-label">Selected Region</p>
              <h3>{activeMarket.region}</h3>
              <p>{activeMarket.info}</p>
              <div className="map-info-tags">
                {activeMarket.countries.map(country => (
                  <span key={country}>{country}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market focus section */}
      <section className="export-focus page-section">
        <div className="container-xl">
          <div className="export-focus-layout">
            <div className="export-focus-text">
              <div className="section-label">Why Buyers Choose Us</div>
              <h2 className="section-title">A dependable supply partner</h2>
              {divider('1rem 0')}
              <p>
                Our global network combines premium sourcing, strict quality standards and flexible logistics to meet the demands of international buyers.
              </p>
              <div className="focus-points">
                {marketPoints.map(point => (
                  <div key={point} className="focus-point">
                    <CheckCircle2 size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="export-focus-visual">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=80"
                alt="Fresh produce export operations"
                loading="lazy"
              />
              <div className="focus-floating-card">
                <p>Market Reach</p>
                <h3>4 Continents</h3>
                <span>15+ countries served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section / conjoined card */}
      <section className="export-network page-section">
        <div className="container-xl">
          <div className="export-network-layout">
            <div className="network-image-panel">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Global supply network"
                loading="lazy"
              />
            </div>

            <div className="network-card">
              <div className="network-card-content">
                <div className="section-label">Export Network</div>
                <h2 className="section-title">Connected from farm to destination</h2>
                <p>
                  We coordinate sourcing, treatment, inspection, packaging and freight so your orders move efficiently from Kenya to your warehouse.
                </p>
                <div className="network-pill-row">
                  <span><Globe size={15} /> Global reach</span>
                  <span><Package size={15} /> Packaging support</span>
                  <span><MapPin size={15} /> Destination tracking</span>
                </div>
              </div>
            </div>
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
