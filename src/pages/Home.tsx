import { Link } from 'react-router-dom';
import {
  Shield, Award, Leaf, ScanSearch,
  BadgeCheck, Sprout, Link2, Thermometer,
  Globe, FileText, MessageCircle, Mail,
  ArrowRight, CheckCircle2, Package, Wheat
} from 'lucide-react';
import HeroBannerr from '../assets/HeroBackground.webp';
import AboutBanner from '../assets/HeroAbout.webp';
import Asia from '../assets/Asia.webp';
import Europe from '../assets/Europe.webp';
import MiddleEast from '../assets/MiddleEast.webp';
import Africa from '../assets/Africa.png';
import Avocado from '../assets/Avocados.webp';
import Mango from '../assets/Mangoes.webp';
import Pineapple from '../assets/Pineapples.webp';
import PassionFruit from '../assets/PassionFruits.png';
import FineBeans from '../assets/FineBeans.webp';
import Chilies from '../assets/Chillies.webp';
import SnapPeas from '../assets/SnapPeas.webp';
import SnowPeas from '../assets/SnowPeas.webp';
import '../styles/home.css';

const stats = [
  { icon: Package, number: '500+', label: 'Tonnes Exported Annually' },
  { icon: Globe, number: '15+',  label: 'Countries Served' },
  { icon: Wheat, number: '8+',   label: 'Premium Products' },
  { icon: Leaf, number: '100%', label: 'Sustainably Grown' },
];

const whyChoose = [
  { Icon: Shield,        title: 'Safe',        desc: 'Rigorous food safety protocols from farm to export ensuring zero compromise.' },
  { Icon: Award,         title: 'Quality',     desc: 'HACCP-certified processes with consistent quality across every batch.' },
  { Icon: Leaf,          title: 'Sustainable', desc: "Responsible farming practices protecting Kenya's land and water resources." },
  { Icon: ScanSearch,    title: 'Traceable',   desc: 'Full farm-to-export traceability systems for complete supply chain visibility.' },
  { Icon: CheckCircle2,  title: 'Reliable',    desc: 'Dependable supply schedules and logistics backed by cold chain expertise.' },
];

const products = [
  { name: 'Avocados',       tag: 'Fruits',          desc: 'Hass & Fuerte varieties, export grade',     img: Avocado },
  { name: 'Mangoes',        tag: 'Fruits',          desc: 'Tommy Atkins, Kent & Apple mangoes',         img: Mango },
  { name: 'Pineapples',     tag: 'Fruits',          desc: 'Sweet Kenyan pineapples, year-round',        img: Pineapple },
  { name: 'Passion Fruits', tag: 'Fruits',          desc: 'Purple passion fruits, vibrant flavour',     img: PassionFruit },
  { name: 'Fine Beans',     tag: 'Vegetables',      desc: 'Tender fine beans, premium quality',         img: FineBeans },
  { name: 'Chilies',        tag: 'Herbs & Spices',  desc: 'Long Cayenne, Bullet & Thin varieties',      img: Chilies },
  { name: 'Snap Peas',      tag: 'Vegetables',      desc: 'Crisp snap peas, air-freight ready',         img: SnapPeas },
  { name: 'Snow Peas',      tag: 'Vegetables',      desc: 'Tender snow peas, European market',          img: SnowPeas },
];

const certifications = [
  { Icon: BadgeCheck,  title: 'HACCP Certified',          desc: 'Hazard Analysis Critical Control Points compliance for food safety.' },
  { Icon: Sprout,      title: 'Good Agricultural Practices', desc: 'GAP-certified farms following international best practices.' },
  { Icon: Link2,       title: 'Full Traceability',         desc: 'End-to-end product traceability from seed to shipment.' },
  { Icon: Thermometer, title: 'Cold Chain Management',     desc: 'Maintained cold chain from harvest to delivery point.' },
];

const exportRegions = [
  {
    Icon: Globe,
    region: 'Europe',
    markets: 'UK, Netherlands, Germany, France',
    desc: 'Premium supermarket chains and food processors.',
    image: Europe
  },
  {
    Icon: Globe,
    region: 'Middle East',
    markets: 'UAE, Saudi Arabia, Qatar',
    desc: 'Major importers and hospitality groups.',
    image: MiddleEast
  },
  {
    Icon: Globe,
    region: 'Asia',
    markets: 'Singapore, Malaysia, Hong Kong',
    desc: 'Specialty food retailers and distributors.',
    image: Asia
  },
  {
    Icon: Globe,
    region: 'Africa',
    markets: 'Rwanda, Uganda, Tanzania',
    desc: 'Regional wholesale and retail markets.',
    image: Africa
  },
];

const divider = (
  <div className="divider-gold" style={{ margin: '1rem auto' }} />
);

const dividerLeft = (
  <div className="divider-gold" style={{ margin: '1rem 0' }} />
);

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero">
        <div
          className="hero-bg-image loaded"
          role="img"
          aria-label="Fresh produce farm in Kenya"
          style={{ backgroundImage: `url(${HeroBannerr})` }}
        />

        <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content">

            <h1 className="hero-title">
              Premium Fresh<br />
              Produce from<br />
              <span className="accent">Kenya</span>
            </h1>

            <p className="hero-subtitle">
              Sustainably Grown in Kenya
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                <Leaf size={16} /> Explore Products
              </Link>
              <Link to="/contact#quote" className="btn-gold">
                <FileText size={16} /> Request a Quote
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>

            <div className="hero-tagline">
              {['Safe', 'Quality', 'Sustainable'].map((t) => (
                <div key={t} className="hero-tagline-item">
                  <span className="hero-tagline-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="stats-bar" aria-label="Key statistics">
        <div className="container-xl">
          <div className="stats-bar-inner">
            {stats.map((s) => {
                const Icon = s.icon;

                return (
                  <div key={s.label} className="stats-bar-item">
                    <Icon className="stats-icon" />

                    <div className="stats-bar-number">
                      {s.number}
                    </div>

                    <div className="stats-bar-label">
                      {s.label}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="about-strip page-section" aria-label="About Carl Fresh">
        <div className="container-xl">
          <div className="about-strip-grid">
            <div className="about-strip-image">
              <img
                src={AboutBanner}
                alt="Farm workers harvesting fresh produce in Kenya"
                loading="lazy"
              />
              <div className="about-strip-image-badge">
                <Leaf size={28} color="var(--color-green-primary)" strokeWidth={1.5} />
                <div className="text">
                  <strong>15+ Years</strong>
                  <span>of Farming Excellence</span>
                </div>
              </div>
            </div>

            <div className="about-strip-text">
              <div className="section-label">About Carl Fresh</div>
              <h2 className="section-title">Fresh Produce From Kenya To The World</h2>
              {dividerLeft}
              <p>
                Carl Fresh Produce connects global markets with
                premium fruits and vegetables grown in Kenya's fertile
                 agricultural regions.
              </p>
              <p>
                A premium exporter of fresh produce, Carl Fresh Produce Limited 
                is dedicated to delivering the finest fruits and vegetables to international markets.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary">
                  Our Story <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="btn-secondary">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="why-choose page-section" aria-label="Why choose Carl Fresh">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Advantage</div>
            <h2 className="section-title">Why Choose Carl Fresh?</h2>
            {divider}
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We stand out through our unwavering commitment to quality, safety,
              sustainability and reliable supply across global markets.
            </p>
          </div>

          <div className="why-grid">
            {whyChoose.map(({ Icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="icon">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="products-showcase page-section" aria-label="Featured products">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Premium Export Produce</h2>
            {divider}
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From the fertile highlands of Kenya, we export a diverse range of
              fresh produce that meets the highest international quality standards.
            </p>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <div className="products-grid">
              {products.map((p) => (
                <Link to="/products" key={p.name} className="product-card" style={{ textDecoration: 'none' }}>
                  <div className="product-card-image">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-tag">{p.tag}</div>
                    <div className="product-card-name">{p.name}</div>
                    <div className="product-card-desc">{p.desc}</div>
                    <div className="product-card-arrow">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn-primary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="certifications page-section" aria-label="Certifications">
        <div className="container-xl">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
              Compliance
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Certifications & Quality Standards
            </h2>
            {divider}
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
              Our quality management system is built on internationally recognised
              standards, giving our buyers confidence in every shipment.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map(({ Icon, title, desc }) => (
              <div key={title} className="cert-card">
                <div className="icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/quality" className="btn-outline-white">
              Learn About Our Standards
            </Link>
          </div>
        </div>
      </section>

      {/* ── Export Markets ── */}
      <section className="export-teaser page-section" aria-label="Export markets">
        <div className="container-xl">
          <div className="export-teaser-header">
            <div>
              <div className="section-label">Global Reach</div>
              <h2 className="section-title">Our Export Markets</h2>
            </div>
            <Link to="/export-markets" className="btn-primary">
              Explore All Markets <ArrowRight size={16} />
            </Link>
          </div>

          <div className="export-regions">
            {exportRegions.map(({ region, markets, desc, image }) => (
              <div
                key={region}
                className="export-region-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(6,38,12,0.10), rgba(6,38,12,0.78)), url(${image})` }}
              >
                <div className="export-region-card-content">
                  <span className="export-region-card-tag">{region}</span>
                  <h3>{markets}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container-xl">
          <div className="section-label" style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)', margin: '0 auto 1rem' }}>
            Get In Touch
          </div>
          <h2>Let's Grow Together</h2>
          <p>
            Connect with our export team to discuss bulk sourcing, supply chain
            partnerships and customised packaging solutions.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">
              <Mail size={16} /> Send an Inquiry
            </Link>
            <Link to="/contact#quote" className="btn-outline-white">
              <FileText size={16} /> Request a Quote
            </Link>
            <a
              href="https://wa.me/254712365084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

