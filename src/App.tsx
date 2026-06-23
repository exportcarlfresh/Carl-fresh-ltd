import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const AllProducts = lazy(() => import('./pages/AllProducts'));
const Quality = lazy(() => import('./pages/Quality'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const ExportMarkets = lazy(() => import('./pages/ExportMarkets'));
const Packaging = lazy(() => import('./pages/Packaging'));
const News = lazy(() => import('./pages/News'));
const NewsArticle = lazy(() => import('./pages/NewsArticle'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-green-primary)', marginBottom: '0.75rem' }}>
        404
      </h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-gray-mid)', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="btn-primary">← Back to Home</a>
    </div>
  );
}

function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '3px solid rgba(27, 94, 32, 0.15)',
        borderTopColor: 'var(--color-green-primary)',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div style={{ flex: 1 }}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/all" element={<AllProducts />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/export-markets" element={<ExportMarkets />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
