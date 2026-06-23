import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, Clock, Newspaper } from "lucide-react";
import "../styles/news.css";
import { articles, categories } from "../data/news";

export default function News() {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory =
    requestedCategory && categories.includes(requestedCategory)
      ? requestedCategory
      : "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  const filtered =
    activeCategory === "All"
      ? rest
      : rest.filter((a) => a.category === activeCategory);

  return (
    <main>
      {/*<div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
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
            <span>News & Insights</span>
          </div>
        </div>
      </div>*/}{" "}
      <br />
      <br />
      {/* Featured */}
      {featured && (
        <section className="news-featured page-section" id="featured">
          <div className="container-xl">
            <div style={{ textAlign: "center", marginBottom: "0" }}>
              <div className="section-label">News & Insights</div>
              <h2 className="section-title">Latest Highlight</h2>
              <div
                className="divider-gold"
                style={{
                  width: "60px",
                  height: "3px",
                  background: "var(--color-gold)",
                  borderRadius: "2px",
                  margin: "1rem auto",
                }}
              />
            </div>

            <div className="news-featured-card">
              <div className="news-featured-image">
                <img
                  src={featured.img}
                  alt={featured.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="news-featured-body">
                <span className="news-featured-tag">{featured.category}</span>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--color-gray-mid)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <Calendar size={13} /> {featured.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--color-gray-mid)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <Clock size={13} /> {featured.readTime}
                  </span>
                </div>
                <Link
                  to={`/news/${featured.id}?from=featured`}
                  className="btn-primary"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* All Articles */}
      <section
        className="news-page page-section"
        style={{ paddingTop: "2rem" }}
        id="all-articles"
      >
        <div className="container-xl">
          <div style={{ marginBottom: "2rem" }}>
            <div className="section-label">All Articles</div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              More Stories
            </h2>
            <div className="news-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
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
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="news-card-category">{article.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <div className="news-card-footer">
                    <Link
                      to={`/news/${article.id}?from=all-articles${
                        activeCategory !== "All"
                          ? `&category=${encodeURIComponent(activeCategory)}`
                          : ""
                      }`}
                      className="read-more"
                    >
                      Read More <span>→</span>
                    </Link>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "var(--color-gray-mid)",
                fontFamily: "var(--font-body)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Newspaper
                  size={48}
                  strokeWidth={1.25}
                  color="var(--color-gray-light)"
                />
              </div>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
      {/* Newsletter CTA */}
      <section
        style={{ background: "var(--color-off-white)", padding: "4rem 0" }}
      >
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label">Stay Informed</div>
          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
            Subscribe to Our Updates
          </h2>
          <div
            className="divider-gold"
            style={{
              width: "60px",
              height: "3px",
              background: "var(--color-gold)",
              borderRadius: "2px",
              margin: "1rem auto",
            }}
          />
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Get the latest news on Kenyan fresh produce markets, product updates
            and sustainability initiatives delivered to your inbox.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              maxWidth: "480px",
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: "0.75rem 1.25rem",
                borderRadius: "999px",
                border: "1.5px solid #ddd",
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                outline: "none",
                minWidth: "200px",
              }}
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
