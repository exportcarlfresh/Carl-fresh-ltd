import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Calendar, ClipboardList, Globe, Package, ArrowRight,
} from 'lucide-react';
import '../styles/products.css';

interface Product {
  name: string;
  category: string;
  desc: string;
  origin: string;
  season: string;
  packaging: string[];
  specs: string;
  markets: string;
  img: string;
}

const allProducts: Product[] = [
  {
    name: 'Avocados', category: 'Fruits',
    desc: 'Kenyan avocados are renowned for their creamy texture, rich flavour, and high oil content. We supply Hass and Fuerte varieties sourced from the fertile highlands of central Kenya, harvested at optimal maturity for extended shelf life.',
    origin: 'Central Kenya Highlands', season: 'March – September',
    packaging: ['4kg carton', '6kg carton', '10kg carton', 'Bulk bins'],
    specs: 'Grade A, size 10–24, firmness index 3–5 kg/cm²',
    markets: 'Europe, Middle East, Asia',
    img: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=600&q=80',
  },
  {
    name: 'Mangoes', category: 'Fruits',
    desc: "Kenya produces some of Africa's finest mangoes. Our Tommy Atkins, Kent and Apple mango varieties are carefully sorted, graded and packed to international specifications, ensuring maximum shelf life and buyer satisfaction.",
    origin: 'Coastal Kenya & Rift Valley', season: 'October – February',
    packaging: ['4kg tray', '5kg carton', '8kg carton'],
    specs: 'Export Grade A, Min weight 200g, Brix 14–18°',
    markets: 'Europe, Middle East, Africa',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80',
  },
  {
    name: 'Pineapples', category: 'Fruits',
    desc: "Kenyan pineapples are prized for their exceptional sweetness and golden flesh. Sourced from tropical growing regions, our pineapples are harvested at peak ripeness and packed for both air and sea freight.",
    origin: 'Western & Coastal Kenya', season: 'Year-round',
    packaging: ['5 count carton', '8 count carton', '10 count carton'],
    specs: 'MD2 & Queen varieties, Brix min 12°, diameter 10–15cm',
    markets: 'Europe, Middle East',
    img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80',
  },
  {
    name: 'Purple Passion Fruits', category: 'Fruits',
    desc: "Purple passion fruit from Kenya's highland regions is celebrated for its intense, aromatic flavour. High in vitamin C and antioxidants, our passion fruits are ideal for juice processing and premium fresh markets.",
    origin: 'Central Kenya Highlands', season: 'Year-round',
    packaging: ['3kg punnet tray', '5kg carton', 'Bulk 10kg'],
    specs: 'Grade A, min weight 40g, Brix 14°+, deep purple colour',
    markets: 'Europe, Middle East, Asia',
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80',
  },
  {
    name: 'Fine Beans', category: 'Vegetables',
    desc: 'Our fine beans are grown under strict GAP protocols in the highlands of Kenya. With their characteristic bright green colour, tender texture and excellent shelf life, they are a favourite with European supermarkets.',
    origin: 'Rift Valley & Central Kenya', season: 'Year-round',
    packaging: ['200g punnet', '500g bag', '3kg clamshell', '5kg bulk box'],
    specs: 'Length 8–13cm, diameter 5–7mm, no defects, bright green',
    markets: 'UK, Netherlands, Germany, France',
    img: 'https://images.unsplash.com/photo-1506389225426-7b19e8060b35?w=600&q=80',
  },
  {
    name: 'Snap Peas', category: 'Vegetables',
    desc: "Sweet, crunchy snap peas sourced from Kenya's cool highland farms. Our snap peas arrive at European markets at peak freshness thanks to our efficient cold chain and air freight partnerships.",
    origin: 'Mt. Kenya Region', season: 'Year-round',
    packaging: ['150g punnet', '200g bag', '3kg carton', '5kg box'],
    specs: 'Pod length 7–10cm, firm and crisp, bright green, no strings',
    markets: 'Europe, UK, Middle East',
    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&q=80',
  },
  {
    name: 'Snow Peas', category: 'Vegetables',
    desc: 'Flat-podded snow peas with their delicate, sweet flavour are a premium product in European and Asian markets. Grown at altitude for enhanced sweetness, packed and dispatched within 24 hours of harvest.',
    origin: 'Central Highlands of Kenya', season: 'Year-round',
    packaging: ['100g punnet', '200g bag', '3kg flat carton', '5kg carton'],
    specs: 'Pod length 6–9cm, flat profile, bright green, string-free',
    markets: 'Netherlands, UK, Germany, Singapore',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  },
  {
    name: 'Long Cayenne Chili', category: 'Herbs & Spices',
    desc: "Long Cayenne chilies are one of Carl Fresh's flagship export products. These bright red, intensely flavoured chilies are in high demand in European, Middle Eastern and Asian markets for both fresh and food processing use.",
    origin: 'Eastern & Coastal Kenya', season: 'Year-round',
    packaging: ['3kg carton', '5kg carton', '10kg bulk', 'Retail 100g bags'],
    specs: 'Length 15–20cm, Scoville 30,000–50,000 SHU, bright red, no blemish',
    markets: 'Europe, Middle East, Asia',
    img: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&q=80',
  },
  {
    name: 'Thin Chili', category: 'Herbs & Spices',
    desc: 'Slender, high-heat thin chilies with exceptional colour and pungency. Popular with spice processors and specialty food manufacturers, these chilies are harvested at full maturity for maximum capsaicin content.',
    origin: 'Eastern Kenya', season: 'Year-round',
    packaging: ['3kg carton', '5kg carton', '10kg bulk'],
    specs: 'Length 8–12cm, Scoville 50,000–80,000 SHU, deep red to green',
    markets: 'Europe, Asia, Middle East',
    img: 'https://images.unsplash.com/photo-1596365960028-70eeab6d2d10?w=600&q=80',
  },
  {
    name: 'Bullet Chili', category: 'Herbs & Spices',
    desc: 'Compact, round bullet chilies with intense heat and vibrant red colour. A popular variety for Asian cuisines and food processing, our bullet chilies offer consistent size, colour and heat levels.',
    origin: 'Coast & Eastern Regions', season: 'Year-round',
    packaging: ['2kg carton', '3kg carton', '5kg bulk'],
    specs: 'Diameter 1.5–3cm, Scoville 50,000–100,000 SHU, deep red, firm',
    markets: 'Asia, Middle East, Africa',
    img: 'https://images.unsplash.com/photo-1560457099-12c8d84ad3d6?w=600&q=80',
  },
];

const categories = ['All', 'Fruits', 'Vegetables', 'Herbs & Spices'];

const specIcons: Record<string, React.ReactNode> = {
  origin:  <MapPin size={15} strokeWidth={1.75} />,
  season:  <Calendar size={15} strokeWidth={1.75} />,
  specs:   <ClipboardList size={15} strokeWidth={1.75} />,
  markets: <Globe size={15} strokeWidth={1.75} />,
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            Our Products
          </div>
          <h1>Premium Export Produce</h1>
          <p>
            From the fertile highlands of Kenya — fresh fruits, vegetables,
            herbs and spices grown for the world's premium markets.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <div className="products-category-nav">
        <div className="products-category-nav-inner">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className="products-page page-section" style={{ paddingTop: '3rem' }}>
        <div className="container-xl">
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gray-mid)', marginBottom: '2rem', fontSize: '0.9rem' }}>
            Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>

          {filtered.map((product, idx) => (
            <div key={product.name} className="product-detail-card">
              <div className="product-detail-image">
                <img
                  src={product.img}
                  alt={product.name}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="product-detail-body">
                <div className="product-detail-tag">{product.category}</div>
                <h2 className="product-detail-name">{product.name}</h2>
                <p className="product-detail-desc">{product.desc}</p>

                <div className="product-specs">
                  {(
                    [
                      { key: 'origin',  label: 'Origin',          value: product.origin },
                      { key: 'season',  label: 'Harvest Season',  value: product.season },
                      { key: 'specs',   label: 'Quality Specs',   value: product.specs },
                      { key: 'markets', label: 'Export Markets',  value: product.markets },
                    ] as const
                  ).map(({ key, label, value }) => (
                    <div key={key} className="product-spec">
                      <span className="spec-icon">{specIcons[key]}</span>
                      <div className="spec-content">
                        <span className="spec-label">{label}</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gray-mid)', display: 'block', marginBottom: '0.5rem' }}>
                    Packaging Options
                  </span>
                  <div className="product-packaging-chips">
                    {product.packaging.map(p => (
                      <span key={p} className="packaging-chip">
                        <Package size={11} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact#quote" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                  Request a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Need a Custom Order?</h2>
          <p>Contact our export team for tailored packaging, volume pricing and supply schedule discussions.</p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Send an Inquiry</Link>
            <Link to="/contact#quote" className="btn-outline-white">Request a Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
