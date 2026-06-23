import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { allProducts, categories, categoryCircles } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import "../styles/products.css";

export default function AllProducts() {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory =
    requestedCategory && categories.includes(requestedCategory)
      ? requestedCategory
      : "All";

  const fromSection = searchParams.get("from");
  const backTo =
    fromSection === "shop-by-category" || fromSection === "featured"
      ? `/products#${fromSection}`
      : "/products";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [prevInitialCategory, setPrevInitialCategory] = useState(initialCategory);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [scrolled, setScrolled] = useState(false);

  if (initialCategory !== prevInitialCategory) {
    setPrevInitialCategory(initialCategory);
    setActiveCategory(initialCategory);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <main>
      <section className="all-products-header">
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label">All Products</div>
          <h1 className="section-title">Shop by Category</h1>
        </div>
      </section>

      <div className={`all-products-sticky-bar ${scrolled ? "compact" : ""}`}>
        <div className="container-xl">
          <div className="sticky-bar-row">
            <Link to={backTo} className="back-button">
              <ArrowLeft size={16} /> Back
            </Link>
            <div className="category-circles">
              {categoryCircles.map(({ name, img }) => (
                <button
                  key={name}
                  className={`category-circle ${activeCategory === name ? "active" : ""}`}
                  onClick={() => setActiveCategory(name)}
                >
                  <span className="category-circle-img">
                    <img src={img} alt={name} loading="lazy" />
                  </span>
                  <span className="category-circle-label">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="products-page page-section">
        <div className="container-xl">
          <div className="products-grid all-products-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onView={setModalProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </main>
  );
}
