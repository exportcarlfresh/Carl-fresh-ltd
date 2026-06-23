import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Package, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/exports.css';
import Asia from '../assets/Asia.webp';
import Europe from '../assets/Europe.webp';
import MiddleEast from '../assets/MiddleEast.webp';
import Africa from '../assets/Africa.png';
import Export from '../assets/Supply.webp';
import Export2 from '../assets/ExportII.webp';

const regions = [
  {
    region: 'Europe',
    subtitle: 'Established premium buyers',
    image: Europe,
    countries: ['UK', 'Netherlands', 'Germany', 'France'],
    products: ['Avocados', 'Fine Beans', 'Snap Peas', 'Snow Peas'],
    info: 'Strong demand across supermarket and wholesale channels with strict compliance to EU standards.',
  },
  {
    region: 'Middle East',
    subtitle: 'Fast-growing demand hubs',
    image: MiddleEast,
    countries: ['UAE', 'Saudi Arabia', 'Qatar'],
    products: ['Mangoes', 'Chilies', 'Avocados', 'Pineapples'],
    info: 'High-value markets supported by efficient air freight and strong seasonal demand.',
  },
  {
    region: 'Asia',
    subtitle: 'Premium export growth',
    image: Asia,
    countries: ['Singapore', 'Malaysia', 'Hong Kong'],
    products: ['Passion Fruits', 'Snow Peas', 'Chilies', 'Avocados'],
    info: 'Time-sensitive and quality-driven markets that value freshness, traceability and consistency.',
  },
  {
    region: 'Africa',
    subtitle: 'Regional trade expansion',
    image: Africa,
    countries: ['Rwanda', 'Uganda', 'Tanzania', 'South Africa'],
    products: ['Mangoes', 'Pineapples', 'Avocados', 'Fine Beans'],
    info: 'Connected regional supply channels supporting high-volume trade across the continent.',
  },
];
const kenyaPosition: [number, number] = [-1.286389, 36.817223];

const exportDestinations = [
  {
    region: 'Europe',
    position: [52.3676, 4.9041],
  },
  {
    region: 'Middle East',
    position: [25.2048, 55.2708],
  },
  {
    region: 'Asia',
    position: [1.3521, 103.8198],
  },
  {
    region: 'Africa',
    position: [-6.7924, 39.2083],
  },
];

const mapMarker = new L.DivIcon({
  className: 'custom-map-marker',
  html: '<div class="marker-pulse"></div>',
  iconSize: [18, 18],
});

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
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % regions.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + regions.length) % regions.length);
  };

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
                  <div className="section-label">
                    Trade Routes
                  </div>

                  <h2 className="section-title">
                    Global Export Network
                  </h2>
                </div>

                <span className="map-pill">
                  15+ Countries
                </span>
              </div>

              <MapContainer
                center={kenyaPosition}
                zoom={3}
                scrollWheelZoom={false}
                className="leaflet-map"
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <Marker
                  position={kenyaPosition}
                  icon={mapMarker}
                >
                  <Popup>
                    Carl Fresh Produce
                    <br />
                    Nairobi, Kenya
                  </Popup>
                </Marker>

                {exportDestinations.map((destination) => (
                  <div key={destination.region}>
                    <Marker
                      position={destination.position as [number, number]}
                      icon={mapMarker}
                    >
                      <Popup>
                        {destination.region}
                      </Popup>
                    </Marker>

                    <Polyline
                      positions={[
                        kenyaPosition,
                        destination.position as [number, number],
                      ]}
                      pathOptions={{
                        color: '#c9a84c',
                        weight: 2,
                        opacity: 0.85,
                      }}
                    />
                  </div>
                ))}
              </MapContainer>

            </div>

            <div className="map-info-card">
              <p className="map-info-label">
                Export Reach
              </p>

              <h3>15+ Countries</h3>

              <p>
                From Kenya's fertile growing regions, Carl Fresh Produce
                delivers premium fruits, vegetables, herbs and spices to
                customers across Europe, the Middle East, Asia and Africa
                through trusted logistics and cold-chain networks.
              </p>

              <div className="map-info-tags">
                <span>Europe</span>
                <span>Middle East</span>
                <span>Asia</span>
                <span>Africa</span>
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
                src={Export}
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
                src={Export2}
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
