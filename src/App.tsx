import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import AllProducts from './pages/AllProducts';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import ExportMarkets from './pages/ExportMarkets';
import Packaging from './pages/Packaging';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

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

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div style={{ flex: 1 }}>
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
