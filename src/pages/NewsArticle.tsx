import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { articles } from "../data/news";
import "../styles/news.css";

export default function NewsArticle() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const fromSection = searchParams.get("from");
  const fromCategory = searchParams.get("category");

  const backTo =
    fromSection === "featured" || fromSection === "all-articles"
      ? `/news${fromCategory ? `?category=${encodeURIComponent(fromCategory)}` : ""}#${fromSection}`
      : "/news";

  const relatedQuery = `?from=${fromSection ?? "all-articles"}${
    fromCategory ? `&category=${encodeURIComponent(fromCategory)}` : ""
  }`;

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <main>
      <div className="news-article-top container-xl">
        <Link to={backTo} className="news-article-back">
          <ArrowLeft size={16} /> Back to News
        </Link>
      </div>

      <section className="news-article-hero container-xl">
        <div
          className="news-article-hero-media"
          style={{ backgroundImage: `url(${article.img})` }}
        >
          <div className="news-article-hero-overlay" />
          <div className="news-article-hero-content">
            <span className="news-article-tag">{article.category}</span>
            <h1 className="news-article-title">{article.title}</h1>
            <div className="news-article-meta">
              <span>
                <Calendar size={14} /> {article.date}
              </span>
              <span>
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="news-article-body-section page-section">
        <div className="container-xl news-article-container">
          <div className="news-article-body">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="news-related page-section">
          <div className="container-xl">
            <div style={{ textAlign: "center" }}>
              <div className="section-label">Keep Reading</div>
              <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
                More Stories
              </h2>
            </div>
            <div className="news-related-grid">
              {related.map((a) => (
                <Link
                  key={a.id}
                  to={`/news/${a.id}${relatedQuery}`}
                  className="news-related-card"
                >
                  <div className="news-related-image">
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="news-related-category">{a.category}</span>
                  <h3>{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner">
        <div className="container-xl">
          <h2>Want to Source Premium Kenyan Produce?</h2>
          <p>
            Speak to our export team about tailored supply agreements and
            pricing.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">
              Contact Our Team
            </Link>
            <Link to="/products" className="btn-outline-white">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
