import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Newspaper } from 'lucide-react';
import '../styles/news.css';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Kenya Avocado Exports Hit Record Highs in 2024',
    excerpt: 'Kenyan avocado exports reached unprecedented volumes in 2024, with European demand continuing to surge. Carl Fresh Produce played a significant role in meeting this demand through our premium Hass and Fuerte varieties.',
    category: 'Market Trends',
    date: 'March 2025',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Water Conservation Wins: Our New Drip Irrigation Programme',
    excerpt: 'Carl Fresh Produce has rolled out a comprehensive drip irrigation programme across 15 partner farms, reducing water usage by 40% while maintaining exceptional crop quality.',
    category: 'Sustainability',
    date: 'February 2025',
    readTime: '3 min read',
    img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
  },
  {
    id: 3,
    title: 'Understanding Maximum Residue Levels (MRLs) for EU Export',
    excerpt: 'A practical guide to EU Maximum Residue Level requirements for fresh produce exporters, and how Carl Fresh ensures all our products comply with the strictest European standards.',
    category: 'Farming Practices',
    date: 'January 2025',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
  },
  {
    id: 4,
    title: 'New Cold Storage Facility Enhances Export Capacity',
    excerpt: 'We are excited to announce the completion of our expanded cold storage facility in Nairobi, which doubles our pre-export storage capacity and enhances our ability to serve multiple markets simultaneously.',
    category: 'Product Updates',
    date: 'December 2024',
    readTime: '2 min read',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  },
  {
    id: 5,
    title: 'The Growing Demand for Kenyan Chilies in Asia',
    excerpt: 'Asian markets are developing a strong appetite for Kenyan chili varieties. We explore the drivers behind this trend and how Carl Fresh is positioning itself to meet rising demand.',
    category: 'Market Trends',
    date: 'November 2024',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 6,
    title: "Farmer Training Programme: 2024 Year in Review",
    excerpt: "In 2024, Carl Fresh's farmer training programme reached over 100 smallholder farmers with education on GAP compliance, water management and post-harvest handling.",
    category: 'Sustainability',
    date: 'October 2024',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1592979585344-4ca01a9fe0ca?w=600&q=80',
  },
  {
    id: 7,
    title: "Fine Beans: A Deep Dive into Kenya's Premium Export Vegetable",
    excerpt: "Kenya's fine beans are among the most sought-after fresh vegetables in European supermarkets. This comprehensive overview covers growing regions, varieties, quality standards and logistics.",
    category: 'Farming Practices',
    date: 'September 2024',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1506389225426-7b19e8060b35?w=600&q=80',
  },
  {
    id: 8,
    title: 'Carl Fresh Achieves HACCP Recertification',
    excerpt: 'We are pleased to announce successful HACCP recertification following a comprehensive audit of our packing and quality management operations. This milestone reaffirms our commitment to food safety excellence.',
    category: 'Product Updates',
    date: 'August 2024',
    readTime: '2 min read',
    img: 'https://images.unsplash.com/photo-1614727187331-2756554eb2a0?w=600&q=80',
  },
];

const categories = ['All', 'Market Trends', 'Sustainability', 'Farming Practices', 'Product Updates'];

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  const filtered = activeCategory === 'All'
    ? rest
    : rest.filter(a => a.category === activeCategory);

  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label" style={{ borderColor: 'rgba(201,168,76,0.5)', color: 'var(--color-gold-light)' }}>
            News & Insights
          </div>
          <h1>News & Insights</h1>
          <p>
            Market trends, farming practices, sustainability initiatives
            and the latest from Carl Fresh Produce.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--color-gold-light)' }}>News & Insights</span>
          </div>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <section className="news-featured page-section">
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '0' }}>
              <div className="section-label">Featured Story</div>
              <h2 className="section-title">Latest Highlight</h2>
              <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
            </div>

            <div className="news-featured-card">
              <div className="news-featured-image">
                <img
                  src={featured.img}
                  alt={featured.title}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="news-featured-body">
                <span className="news-featured-tag">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-gray-mid)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} /> {featured.date}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-gray-mid)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} /> {featured.readTime}
                  </span>
                </div>
                <button className="btn-primary">Read Full Article</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="news-page page-section" style={{ paddingTop: '2rem' }}>
        <div className="container-xl">
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label">All Articles</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>More Stories</h2>
            <div className="news-filters">
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

          <div className="news-grid">
            {filtered.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-card-image">
                  <img
                    src={article.img}
                    alt={article.title}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="news-card-category">{article.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <div className="news-card-footer">
                    <span className="read-more">Read More <span>→</span></span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-gray-mid)', fontFamily: 'var(--font-body)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Newspaper size={48} strokeWidth={1.25} color="var(--color-gray-light)" />
              </div>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: 'var(--color-off-white)', padding: '4rem 0' }}>
        <div className="container-xl" style={{ textAlign: 'center' }}>
          <div className="section-label">Stay Informed</div>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Subscribe to Our Updates
          </h2>
          <div className="divider-gold" style={{ width: '60px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', margin: '1rem auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            Get the latest news on Kenyan fresh produce markets, product updates
            and sustainability initiatives delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: '0.75rem 1.25rem',
                borderRadius: '999px',
                border: '1.5px solid #ddd',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                outline: 'none',
                minWidth: '200px',
              }}
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
