import { Link } from "react-router-dom";
import { Package, Eye, FileText } from "lucide-react";
import type { Product } from "../data/products";

export default function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView: (p: Product) => void;
}) {
  return (
    <div
      className="product-card"
      onClick={() => onView(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onView(product)}
    >
      {product.badge && (
        <span className="product-card-badge">{product.badge}</span>
      )}
      <div className="product-card-image">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-name">{product.name}</h3>
        <span className="product-card-pack">
          <Package size={12} /> From {product.packaging[0]}
        </span>
        <div className="product-card-footer">
          <button
            className="product-card-view"
            onClick={(e) => {
              e.stopPropagation();
              onView(product);
            }}
          >
            <Eye size={14} /> View Details
          </button>
          <Link
            to="/contact#quote"
            className="product-card-quote"
            aria-label={`Request a quote for ${product.name}`}
            title="Request a Quote"
            onClick={(e) => e.stopPropagation()}
          >
            <FileText size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
