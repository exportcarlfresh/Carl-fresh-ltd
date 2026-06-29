import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Lock,
  CheckCircle2,
  Briefcase,
  Users,
  Camera,
  CirclePlay,
  ClipboardList,
  Plus,
  Trash2,
} from "lucide-react";
import "../styles/contact.css";
import { allProducts } from "../data/products";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyRZtCWw4yVmQhluIg07ko9Ka9lMy2ALJNddcwgsy4QAnKCjy4v-wj34KMPS4_dUx5eyg/exec";

type FormTab = "inquiry" | "quote";

const initialInquiry = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};
const initialQuote = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  products: "",
  volume: "",
  destination: "",
  packaging: "",
  frequency: "",
  notes: "",
};

const countries = [
  "Select Country",
  "United Kingdom",
  "Netherlands",
  "Germany",
  "France",
  "Belgium",
  "Spain",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Singapore",
  "Malaysia",
  "Hong Kong",
  "Japan",
  "China",
  "Rwanda",
  "Uganda",
  "Tanzania",
  "South Africa",
  "Ethiopia",
  "United States",
  "Canada",
  "Australia",
  "Other",
];

const productNames = allProducts.map((p) => p.name);
const productList = ["Select Product", ...productNames, "Multiple Products"];

interface ProductVolumeRow {
  product: string;
  volume: string;
}

const emptyProductVolumeRow = (): ProductVolumeRow => ({
  product: "",
  volume: "",
});

export default function Contact() {
  const [activeTab, setActiveTab] = useState<FormTab>("inquiry");
  const [inquiryForm, setInquiryForm] = useState(initialInquiry);
  const [quoteForm, setQuoteForm] = useState(initialQuote);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [inquirySending, setInquirySending] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);
  const [inquiryProducts, setInquiryProducts] = useState<string[]>([""]);
  const [quoteProducts, setQuoteProducts] = useState<ProductVolumeRow[]>([
    emptyProductVolumeRow(),
  ]);

  const handleInquiryChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setInquiryForm({ ...inquiryForm, [e.target.name]: e.target.value });
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleInquiryProductSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = e.target.value;
    setInquiryForm({ ...inquiryForm, product: value });
    if (value !== "Multiple Products") {
      setInquiryProducts([""]);
    }
  };

  const updateInquiryProductRow = (index: number, value: string) => {
    setInquiryProducts((rows) =>
      rows.map((row, i) => (i === index ? value : row)),
    );
  };

  const addInquiryProductRow = () => {
    setInquiryProducts((rows) => [...rows, ""]);
  };

  const removeInquiryProductRow = (index: number) => {
    setInquiryProducts((rows) => rows.filter((_, i) => i !== index));
  };

  const handleQuoteProductsSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = e.target.value;
    setQuoteForm({ ...quoteForm, products: value });
    if (value !== "Multiple Products") {
      setQuoteProducts([emptyProductVolumeRow()]);
    }
  };

  const updateQuoteProductRow = (
    index: number,
    field: keyof ProductVolumeRow,
    value: string,
  ) => {
    setQuoteProducts((rows) =>
      rows.map((row, i) => (i === index ? { ...row, [field]: value } : row)),
    );
  };

  const addQuoteProductRow = () => {
    setQuoteProducts((rows) => [...rows, emptyProductVolumeRow()]);
  };

  const removeQuoteProductRow = (index: number) => {
    setQuoteProducts((rows) => rows.filter((_, i) => i !== index));
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedProductsArray =
      inquiryForm.product === "Multiple Products"
        ? inquiryProducts.filter(Boolean)
        : [inquiryForm.product];

    const payload = {
      formType: "inquiry",
      ...inquiryForm,
      selectedProductsArray,
    };

    setInquirySending(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setInquirySubmitted(true);
      setInquiryForm(initialInquiry);
      setInquiryProducts([""]);
    } finally {
      setInquirySending(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productsAndVolumesArray =
      quoteForm.products === "Multiple Products"
        ? quoteProducts.filter((row) => row.product || row.volume)
        : [
            {
              product: quoteForm.products,
              volume: quoteForm.volume,
            },
          ];

    const payload = {
      formType: "quote",
      ...quoteForm,
      productsAndVolumesArray,
    };

    setQuoteSending(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setQuoteSubmitted(true);
      setQuoteForm(initialQuote);
      setQuoteProducts([emptyProductVolumeRow()]);
    } finally {
      setQuoteSending(false);
    }
  };

  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="section-label">Contact Us</div>
          <h1>Let's Grow Together</h1>
          <p>
            Connect with our export team to discuss products, pricing, logistics
            and partnership opportunities.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <section className="contact-page">
        <div className="container-xl">
          <div className="contact-layout">
            {/* Info Panel */}
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Contact Information</h3>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <MapPin size={18} strokeWidth={1.75} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Phone size={18} strokeWidth={1.75} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Phone / WhatsApp</span>
                    <div className="detail-value">
                      <a href="tel:+254712365084">+254 712 365 084</a>
                      <br />
                      <a href="tel:+254722537995">+254 722 537 995</a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Mail size={18} strokeWidth={1.75} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Email</span>
                    <div className="detail-value">
                      <a href="mailto:export@carlfresh.com">
                        export@carlfresh.com
                      </a>
                      <br />
                      <a href="mailto:info@carlfresh.com">info@carlfresh.com</a>
                      <br />
                      <a href="mailto:carlfresh@gmail.com">
                        carlfresh@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="detail-icon">
                    <Globe size={18} strokeWidth={1.75} />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Website</span>
                    <span className="detail-value">www.carlfresh.com</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="contact-info-card">
                <h3>Follow Us</h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--color-gray-mid)",
                    marginBottom: "1rem",
                  }}
                >
                  Stay updated with our latest news and products.
                </p>
                <div className="contact-social">
                  <a href="#" aria-label="LinkedIn" title="LinkedIn">
                    <Briefcase size={18} strokeWidth={1.75} />
                  </a>
                  <a href="#" aria-label="Facebook" title="Facebook">
                    <Users size={18} strokeWidth={1.75} />
                  </a>
                  <a href="#" aria-label="Instagram" title="Instagram">
                    <Camera size={18} strokeWidth={1.75} />
                  </a>
                  <a href="#" aria-label="YouTube" title="YouTube">
                    <CirclePlay size={18} strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="contact-info-card">
                <h3>Our Location</h3>
                <div className="contact-map">
                  <iframe
                    title="Carl Fresh Produce Location - Nairobi, Kenya"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32349117234!2d36.6823!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699000000000!5m2!1sen!2ske"
                    style={{
                      width: "100%",
                      height: "220px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254712365084?text=Hello%20Carl%20Fresh%20Produce%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#25D366",
                  color: "#fff",
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <MessageCircle size={24} strokeWidth={2} />
                <div>
                  <div>Chat on WhatsApp</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>
                    +254 712 365 084
                  </div>
                </div>
              </a>
            </div>

            {/* Forms Panel */}
            <div className="contact-forms" id="quote">
              <div className="contact-form-tabs">
                <button
                  className={`contact-form-tab ${activeTab === "inquiry" ? "active" : ""}`}
                  onClick={() => setActiveTab("inquiry")}
                >
                  <Mail
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "6px",
                    }}
                  />
                  General Inquiry
                </button>
                <button
                  className={`contact-form-tab ${activeTab === "quote" ? "active" : ""}`}
                  onClick={() => setActiveTab("quote")}
                >
                  <ClipboardList
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "6px",
                    }}
                  />
                  Request a Quote
                </button>
              </div>

              {/* General Inquiry Form */}
              {activeTab === "inquiry" && (
                <div className="contact-form-card">
                  {inquirySubmitted ? (
                    <div className="form-success">
                      <div className="success-icon">
                        <CheckCircle2
                          size={48}
                          strokeWidth={1.5}
                          color="var(--color-green-primary)"
                        />
                      </div>
                      <h4>Message Sent!</h4>
                      <p>
                        Thank you for reaching out. Our export team will respond
                        within 24 hours. For urgent inquiries, please call or
                        WhatsApp us directly.
                      </p>
                      <button
                        className="btn-primary"
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => setInquirySubmitted(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3>Send Us a Message</h3>
                      <p>
                        Complete the form below and we'll respond within 24
                        hours.
                      </p>

                      <form onSubmit={handleInquirySubmit}>
                        <div className="form-grid">
                          <div className="form-group">
                            <label htmlFor="inq-name">
                              Full Name <span>*</span>
                            </label>
                            <input
                              id="inq-name"
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Your name"
                              required
                              value={inquiryForm.name}
                              onChange={handleInquiryChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inq-company">Company</label>
                            <input
                              id="inq-company"
                              name="company"
                              type="text"
                              className="form-control"
                              placeholder="Company name"
                              value={inquiryForm.company}
                              onChange={handleInquiryChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inq-email">
                              Email Address <span>*</span>
                            </label>
                            <input
                              id="inq-email"
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="your@email.com"
                              required
                              value={inquiryForm.email}
                              onChange={handleInquiryChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inq-phone">Phone Number</label>
                            <input
                              id="inq-phone"
                              name="phone"
                              type="tel"
                              className="form-control"
                              placeholder="+254 234 567 890"
                              value={inquiryForm.phone}
                              onChange={handleInquiryChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="inq-country">
                              Country <span>*</span>
                            </label>
                            <select
                              id="inq-country"
                              name="country"
                              className="form-control"
                              required
                              value={inquiryForm.country}
                              onChange={handleInquiryChange}
                            >
                              {countries.map((c) => (
                                <option
                                  key={c}
                                  value={c === "Select Country" ? "" : c}
                                >
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="inq-product">
                              Product of Interest
                            </label>
                            <select
                              id="inq-product"
                              name="product"
                              className="form-control"
                              value={inquiryForm.product}
                              onChange={handleInquiryProductSelect}
                            >
                              {productList.map((p) => (
                                <option
                                  key={p}
                                  value={p === "Select Product" ? "" : p}
                                >
                                  {p}
                                </option>
                              ))}
                            </select>
                          </div>

                          {inquiryForm.product === "Multiple Products" && (
                            <div className="form-group full">
                              <label>
                                Select Products <span>*</span>
                              </label>
                              <div className="multi-product-list">
                                {inquiryProducts.map((value, i) => (
                                  <div key={i} className="multi-product-row">
                                    <select
                                      className="form-control"
                                      required
                                      value={value}
                                      onChange={(e) =>
                                        updateInquiryProductRow(
                                          i,
                                          e.target.value,
                                        )
                                      }
                                    >
                                      <option value="">Select Product</option>
                                      {productNames.map((p) => (
                                        <option key={p} value={p}>
                                          {p}
                                        </option>
                                      ))}
                                    </select>
                                    <button
                                      type="button"
                                      className="multi-product-remove"
                                      aria-label="Remove product"
                                      disabled={inquiryProducts.length === 1}
                                      onClick={() => removeInquiryProductRow(i)}
                                    >
                                      <Trash2 size={15} strokeWidth={1.75} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                type="button"
                                className="btn-add-product"
                                onClick={addInquiryProductRow}
                              >
                                <Plus size={14} strokeWidth={2} /> Add Product
                              </button>
                            </div>
                          )}

                          <div className="form-group full">
                            <label htmlFor="inq-message">
                              Message <span>*</span>
                            </label>
                            <textarea
                              id="inq-message"
                              name="message"
                              className="form-control"
                              placeholder="Tell us about your requirements..."
                              required
                              rows={5}
                              value={inquiryForm.message}
                              onChange={handleInquiryChange}
                            />
                          </div>
                        </div>

                        <div className="form-submit">
                          <span className="form-submit-note">
                            <Lock
                              size={13}
                              style={{
                                display: "inline",
                                verticalAlign: "middle",
                                marginRight: "4px",
                              }}
                            />
                            Your information is kept strictly confidential.
                          </span>
                          <button
                            type="submit"
                            className="btn-primary"
                            disabled={inquirySending}
                          >
                            {inquirySending ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              )}

              {/* Quote Request Form */}
              {activeTab === "quote" && (
                <div className="contact-form-card">
                  {quoteSubmitted ? (
                    <div className="form-success">
                      <div className="success-icon">
                        <CheckCircle2
                          size={48}
                          strokeWidth={1.5}
                          color="var(--color-green-primary)"
                        />
                      </div>
                      <h4>Quote Request Received!</h4>
                      <p>
                        Our export team will review your requirements and send a
                        detailed quotation within 24–48 hours. Thank you!
                      </p>
                      <button
                        className="btn-primary"
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => setQuoteSubmitted(false)}
                      >
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3>Request a Quote</h3>
                      <p>
                        Provide your requirements and we'll send a tailored
                        quotation.
                      </p>

                      <form onSubmit={handleQuoteSubmit}>
                        <div className="form-grid">
                          <div className="form-group">
                            <label htmlFor="qt-name">
                              Full Name <span>*</span>
                            </label>
                            <input
                              id="qt-name"
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Your name"
                              required
                              value={quoteForm.name}
                              onChange={handleQuoteChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-company">
                              Company Name <span>*</span>
                            </label>
                            <input
                              id="qt-company"
                              name="company"
                              type="text"
                              className="form-control"
                              placeholder="Company name"
                              required
                              value={quoteForm.company}
                              onChange={handleQuoteChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-email">
                              Email Address <span>*</span>
                            </label>
                            <input
                              id="qt-email"
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="your@email.com"
                              required
                              value={quoteForm.email}
                              onChange={handleQuoteChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-phone">Phone Number</label>
                            <input
                              id="qt-phone"
                              name="phone"
                              type="tel"
                              className="form-control"
                              placeholder="+254 234 567 890"
                              value={quoteForm.phone}
                              onChange={handleQuoteChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-country">
                              Your Country <span>*</span>
                            </label>
                            <select
                              id="qt-country"
                              name="country"
                              className="form-control"
                              required
                              value={quoteForm.country}
                              onChange={handleQuoteChange}
                            >
                              {countries.map((c) => (
                                <option
                                  key={c}
                                  value={c === "Select Country" ? "" : c}
                                >
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-destination">
                              Destination Country <span>*</span>
                            </label>
                            <select
                              id="qt-destination"
                              name="destination"
                              className="form-control"
                              required
                              value={quoteForm.destination}
                              onChange={handleQuoteChange}
                            >
                              {countries.map((c) => (
                                <option
                                  key={c}
                                  value={c === "Select Country" ? "" : c}
                                >
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-products">
                              Products Required <span>*</span>
                            </label>
                            <select
                              id="qt-products"
                              name="products"
                              className="form-control"
                              required
                              value={quoteForm.products}
                              onChange={handleQuoteProductsSelect}
                            >
                              {productList.map((p) => (
                                <option
                                  key={p}
                                  value={p === "Select Product" ? "" : p}
                                >
                                  {p}
                                </option>
                              ))}
                            </select>
                          </div>

                          {quoteForm.products === "Multiple Products" ? (
                            <div className="form-group full">
                              <label>
                                Products &amp; Volumes <span>*</span>
                              </label>
                              <div className="multi-product-list">
                                {quoteProducts.map((row, i) => (
                                  <div key={i} className="multi-product-row">
                                    <select
                                      className="form-control"
                                      required
                                      value={row.product}
                                      onChange={(e) =>
                                        updateQuoteProductRow(
                                          i,
                                          "product",
                                          e.target.value,
                                        )
                                      }
                                    >
                                      <option value="">Select Product</option>
                                      {productNames.map((p) => (
                                        <option key={p} value={p}>
                                          {p}
                                        </option>
                                      ))}
                                    </select>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="e.g. 5 tonnes per week"
                                      value={row.volume}
                                      onChange={(e) =>
                                        updateQuoteProductRow(
                                          i,
                                          "volume",
                                          e.target.value,
                                        )
                                      }
                                    />
                                    <button
                                      type="button"
                                      className="multi-product-remove"
                                      aria-label="Remove product"
                                      disabled={quoteProducts.length === 1}
                                      onClick={() => removeQuoteProductRow(i)}
                                    >
                                      <Trash2 size={15} strokeWidth={1.75} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                type="button"
                                className="btn-add-product"
                                onClick={addQuoteProductRow}
                              >
                                <Plus size={14} strokeWidth={2} /> Add Product
                              </button>
                            </div>
                          ) : (
                            <div className="form-group">
                              <label htmlFor="qt-volume">Volume Required</label>
                              <input
                                id="qt-volume"
                                name="volume"
                                type="text"
                                className="form-control"
                                placeholder="e.g. 5 tonnes per week"
                                value={quoteForm.volume}
                                onChange={handleQuoteChange}
                              />
                            </div>
                          )}

                          <div className="form-group">
                            <label htmlFor="qt-packaging">
                              Packaging Preference
                            </label>
                            <input
                              id="qt-packaging"
                              name="packaging"
                              type="text"
                              className="form-control"
                              placeholder="e.g. 5kg export cartons"
                              value={quoteForm.packaging}
                              onChange={handleQuoteChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qt-frequency">
                              Order Frequency
                            </label>
                            <select
                              id="qt-frequency"
                              name="frequency"
                              className="form-control"
                              value={quoteForm.frequency}
                              onChange={handleQuoteChange}
                            >
                              <option value="">Select frequency</option>
                              <option>Weekly</option>
                              <option>Bi-weekly</option>
                              <option>Monthly</option>
                              <option>Seasonal</option>
                              <option>One-time order</option>
                            </select>
                          </div>
                          <div className="form-group full">
                            <label htmlFor="qt-notes">Additional Notes</label>
                            <textarea
                              id="qt-notes"
                              name="notes"
                              className="form-control"
                              placeholder="Any specific requirements, quality standards, certifications needed, delivery preferences..."
                              rows={4}
                              value={quoteForm.notes}
                              onChange={handleQuoteChange}
                            />
                          </div>
                        </div>

                        <div className="form-submit">
                          <span className="form-submit-note">
                            <Lock
                              size={13}
                              style={{
                                display: "inline",
                                verticalAlign: "middle",
                                marginRight: "4px",
                              }}
                            />
                            Your information is strictly confidential.
                          </span>
                          <button
                            type="submit"
                            className="btn-primary"
                            disabled={quoteSending}
                          >
                            {quoteSending ? "Sending..." : "Request Quote"}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
