import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styles/products.css";
import pbannerImg from "../assets/images/pbanner.png";
import {
  allProducts,
  categories,
  categoryCircles,
  bestSellerNames,
} from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import ProductModal from "../components/ProductModal";

const divider = (margin = "1rem auto") => (
  <div className="divider-gold" style={{ margin }} />
);

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const bestSellers = allProducts.filter((p) =>
    bestSellerNames.includes(p.name),
  );
  const spotlight = allProducts.filter((p) => p.badge === "Seasonal Spotlight");

  return (
    <main>
      {/* Intro banner */}
      <section className="products-intro-banner page-section">
        <div className="container-xl">
          <div
            className="hero-banner"
            style={{ backgroundImage: `url(${pbannerImg})` }}
          >
            <span className="hero-split-eyebrow">Our Products</span>
            <h2>Nature’s Finest Produce</h2>
            <p>
              From carefully selected farms in Kenya, we deliver exceptionally
              fresh fruits, vegetables, herbs, and spices cultivated with
              passion, harvested at peak quality, and trusted by customers
              around the world.
            </p>

            <Link to="/contact#quote" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section
        className="shop-categories page-section"
        style={{ paddingTop: 0 }}
        id="shop-by-category"
      >
        <div className="container-xl">
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Shop by Category
          </h2>
          <div className="category-circles">
            {categoryCircles.map(({ name, img }) => (
              <Link
                key={name}
                to={`/products/all?category=${encodeURIComponent(name)}&from=shop-by-category`}
                className="category-circle"
              >
                <span className="category-circle-img">
                  <img src={img} alt={name} loading="lazy" />
                </span>
                <span className="category-circle-label">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Produce */}
      <section className="products-page page-section" id="featured">
        <div className="container-xl">
          <div className="products-toolbar">
            <h2 className="section-title">Featured Produce</h2>
            <div className="products-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`products-tab ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "All" ? "All Products" : cat}
                </button>
              ))}
            </div>
          </div>

          <ProductCarousel products={filtered} onView={setModalProduct} />

          <div className="view-all-wrap">
            <Link to="/products/all?from=featured" className="btn-secondary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid promo duo */}
      <section className="products-promo-duo-section page-section">
        <div className="container-xl">
          <div className="products-promo-duo">
            <Link to="/contact" className="promo-duo-card promo-duo-orange">
              <h3>Fresh Fruit &amp; Vegetable Basket</h3>
              <p>Mixed export crates tailored to your market needs</p>
              <span className="promo-duo-link">
                Get a Custom Quote <ArrowRight size={14} />
              </span>
            </Link>
            <button
              className="promo-duo-card promo-duo-dark"
              onClick={() => {
                setActiveCategory("Herbs & Spices");
                document
                  .getElementById("featured")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <h3>Bold Flavours, Grown in Kenya</h3>
              <p>Export-grade chilies for global cuisines</p>
              <span className="promo-duo-link">
                Explore Herbs &amp; Spices <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Best Seller */}
      <section
        className="products-page page-section"
        style={{ background: "#fff" }}
      >
        <div className="container-xl">
          <div className="products-toolbar" style={{ marginBottom: "2rem" }}>
            <h2 className="section-title">Best Seller</h2>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--color-gray-mid)",
              }}
            >
              Our most requested export products
            </span>
          </div>
          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onView={setModalProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Month style spotlight */}
      <section className="deal-of-month page-section">
        <div className="container-xl">
          <div style={{ textAlign: "center" }}>
            <div className="section-label">Seasonal Spotlight</div>
            <h2 className="section-title">This Month's Harvest Highlight</h2>
            {divider()}
          </div>

          <div className="deal-grid">
            {spotlight.map((product) => (
              <div key={product.name} className="deal-card">
                <div className="deal-card-image">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="deal-card-body">
                  <span className="product-card-category">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <Link to="/contact#quote" className="btn-gold">
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Need a Custom Order?</h2>
          <p>
            Contact our export team for tailored packaging, volume pricing and
            supply schedule discussions.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">
              Send an Inquiry
            </Link>
            <Link to="/contact#quote" className="btn-outline-white">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </main>
  );
}
