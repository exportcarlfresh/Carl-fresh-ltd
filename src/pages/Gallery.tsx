import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageOff, X } from 'lucide-react';
import '../styles/gallery.css';
import Avocado from '../assets/Avocados.webp';
import Mango from '../assets/Mangoes.webp';
import Pineapple from '../assets/Pineapples.webp';
import PassionFruit from '../assets/PassionFruits.png';
import FineBeans from '../assets/FineBeans.webp';
import Chilies from '../assets/Chillies.webp';
import SnapPeas from '../assets/SnapPeas.webp';
import SnowPeas from '../assets/SnowPeas.webp';
import Gallery0 from '../assets/Gallery0.jpeg';
import Gallery1 from '../assets/Gallery1.jpeg';
import Gallery2 from '../assets/Gallery2.jpeg';
import Gallery3 from '../assets/Gallery3.jpeg';
import Gallery4 from '../assets/Gallery4.png';
import Gallery5 from '../assets/Gallery5.png';
import Gallery6 from '../assets/Gallery6.png';

interface GalleryItem {
  id: number;
  category: string;
  caption: string;
  img: string;
  size?: 'tall' | 'wide' | 'normal';
}

const galleryItems: GalleryItem[] = [
  { id: 101, category: 'Harvesting', caption: 'Hand-Picking Fine Beans in the Field', img: Gallery0, size: 'tall' },
  { id: 102, category: 'Products',   caption: 'Freshly Picked Fine Beans',            img: Gallery1 },
  { id: 103, category: 'Export',     caption: 'Loading Crates for Export',            img: Gallery2, size: 'wide' },
  { id: 104, category: 'Farms',      caption: 'Fine Beans Farm — Open Fields',        img: Gallery3 },
  { id: 105, category: 'Products',   caption: 'Fine Beans Ready for Harvest',         img: Gallery4, size: 'tall' },
  { id: 106, category: 'Farms',      caption: 'Farm Visit — Inspecting the Bean Crop', img: Gallery5 },
  { id: 107, category: 'Packing',    caption: 'Sorted Fine Beans Ready for Packing',  img: Gallery6, size: 'wide' },
  { id: 1,  category: 'Farms',      caption: 'Avocado Farm — Central Highlands',   img: Avocado, size: 'tall' },
  { id: 2,  category: 'Products',   caption: 'Premium Export Avocados',             img: Avocado },
  { id: 3,  category: 'Products',   caption: 'Long Cayenne Chilies',                img: Chilies },
  { id: 4,  category: 'Harvesting', caption: 'Harvest Season — Fine Beans',         img: FineBeans, size: 'wide' },
  { id: 5,  category: 'Packing',    caption: 'Export Packing Facility',             img: Avocado },
  { id: 6,  category: 'Products',   caption: 'Fresh Mangoes — Export Grade',        img: Mango, size: 'tall' },
  { id: 7,  category: 'Farms',      caption: 'Green Farms — Rift Valley',           img: Pineapple },
  { id: 8,  category: 'Export',     caption: 'Ready for Air Freight — JKIA',        img: PassionFruit },
  { id: 9,  category: 'Products',   caption: 'Snap Peas — Premium Quality',         img: SnapPeas },
  { id: 10, category: 'Harvesting', caption: 'Passion Fruit Harvest',               img: PassionFruit, size: 'wide' },
  { id: 11, category: 'Packing',    caption: 'Quality Control & Inspection',        img: FineBeans },
  { id: 12, category: 'Farms',      caption: 'Pineapple Farm — Western Kenya',      img: Pineapple },
  { id: 13, category: 'Products',   caption: 'Snow Peas — Export Ready',            img: SnowPeas },
  { id: 14, category: 'Export',     caption: 'Reefer Container Loading',            img: PassionFruit },
  { id: 15, category: 'Harvesting', caption: 'Chili Harvest — Eastern Kenya',       img: Chilies },
];

const categories = ['All', 'Farms', 'Products', 'Harvesting', 'Packing', 'Export'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeFilter);

  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            Gallery
          </div>
          <h1>Our Gallery</h1>
          <p>
            A visual journey through our farms, products, harvesting operations
            and export facilities across Kenya.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      {/* Filter Nav */}
      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="gallery-page page-section" style={{ paddingTop: '2rem' }}>
        <div className="container-xl">
          <div className="gallery-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.size || ''}`}
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.caption}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
              >
                <div className="gallery-item-inner">
                  <img
                    src={item.img}
                    alt={item.caption}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="gallery-item-overlay">
                  <div>
                    <span className="gallery-item-category">{item.category}</span>
                    <span className="gallery-item-caption">{item.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-gray-mid)', fontFamily: 'var(--font-body)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <ImageOff size={48} strokeWidth={1.25} color="var(--color-gray-light)" />
              </div>
              <p>No images in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <div style={{
              background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px',
              position: 'relative',
            }}>
              <img
                src={lightbox.img}
                alt={lightbox.caption}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div style={{ padding: '1rem 1.5rem', background: '#fff' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {lightbox.category}
              </span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-green-primary)', marginTop: '0.25rem' }}>
                {lightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
