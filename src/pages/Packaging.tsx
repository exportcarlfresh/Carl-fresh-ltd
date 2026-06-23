import { Link } from 'react-router-dom';
import {
  Package, ShieldCheck, Waves, Leaf, Tag, Thermometer,
  Sprout, Truck, Warehouse, Plane, PackageCheck,
  ClipboardList, QrCode, BarChart2, Ship, Mail,
} from 'lucide-react';
import '../styles/packaging.css';
import Shipment from '../assets/Logistics.png';

const packagingTypes = [
  {
    Icon: Package, title: 'Export Cartons',
    desc: 'Standard corrugated cartons designed for air and sea freight, available in multiple sizes with custom branding options.',
    sizes: ['2kg', '3kg', '4kg', '5kg', '6kg', '10kg'],
  },
  {
    Icon: ShieldCheck, title: 'Retail Punnets',
    desc: 'Consumer-ready punnets and clamshell packaging designed for supermarket shelves, with optional modified atmosphere packaging (MAP).',
    sizes: ['100g', '150g', '200g', '250g', '500g'],
  },
  {
    Icon: Waves, title: 'Bulk Packaging',
    desc: 'High-volume bulk packaging for food processors and distributors, optimised for sea freight and large-volume orders.',
    sizes: ['10kg', '15kg', '20kg', 'Bulk bins'],
  },
  {
    Icon: Leaf, title: 'Eco-Friendly Options',
    desc: 'Sustainable packaging alternatives including recyclable cartons, compostable films and reduced-plastic solutions for eco-conscious buyers.',
    sizes: ['Custom sizes available'],
  },
  {
    Icon: Tag, title: 'Custom Branding',
    desc: 'Private label and custom-branded packaging for supermarket own-brand lines and distributor-branded products.',
    sizes: ['All sizes', 'Custom print'],
  },
  {
    Icon: Thermometer, title: 'Insulated Packaging',
    desc: 'Specialised insulated liners and gel packs for temperature-sensitive products requiring extended cold chain protection.',
    sizes: ['Various sizes', 'Temperature-rated'],
  },
];

const coldChainSteps = [
  { Icon: Sprout,       title: 'Farm Harvest',    desc: 'Products harvested at optimal maturity in the cool of the morning.' },
  { Icon: Truck,        title: 'Field Transport',  desc: 'Refrigerated vehicles transfer produce to packing facility within hours.' },
  { Icon: Warehouse,    title: 'Cold Storage',     desc: 'Products stored at optimal temperatures during grading and packing.' },
  { Icon: Plane,        title: 'Air Freight',      desc: 'Priority loading on scheduled air cargo flights from Nairobi JKIA.' },
  { Icon: PackageCheck, title: 'Delivery',         desc: "Consignment delivered to buyer's warehouse at destination." },
];

const traceSteps = [
  { num: '01', text: 'Farm & Plot Registration' },
  { num: '02', text: 'Harvest Date & Lot Number' },
  { num: '03', text: 'Packing Line Assignment' },
  { num: '04', text: 'Export Documentation' },
  { num: '05', text: 'Shipment Tracking ID' },
  { num: '06', text: 'Buyer Delivery Confirmation' },
];

const traceCards = [
  { Icon: ClipboardList, title: 'Lot Numbering',       desc: 'Every carton carries a unique lot number traceable to the source farm and harvest date.' },
  { Icon: QrCode,        title: 'QR Code Traceability', desc: 'QR codes on packaging enable buyers to verify origin and supply chain details instantly.' },
  { Icon: BarChart2,     title: 'Digital Records',      desc: 'All traceability data is captured and stored in our digital farm management system.' },
];

const divider = (margin = '1rem auto') => (
  <div className="divider-gold" style={{ margin }} />
);

export default function Packaging() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-xl" style={{ position: 'relative' }}>
          <div className="section-label">
            Packaging & Logistics
          </div>
          <h1>Packaging & Logistics Solutions</h1>
          <p>
            From farm-fresh to your warehouse — our end-to-end logistics and
            packaging solutions deliver quality every time.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Packaging & Logistics</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="packaging-intro page-section">
        <div className="container-xl">
          <div className="packaging-intro-grid">
            <div>
              <div className="section-label">Our Approach</div>
              <h2 className="section-title">Tailored Packaging for Every Market</h2>
              {divider('1rem 0')}
              <div className="packaging-intro-text">
                <p>
                  Effective packaging and logistics are as important as the quality of
                  the produce itself. At Carl Fresh Produce Limited, we invest in packaging
                  solutions that protect product integrity, extend shelf life, and meet
                  the specific requirements of each destination market.
                </p>
                <p>
                  From consumer-ready retail punnets to bulk export cartons, our packaging
                  team works closely with buyers to deliver exactly what the market demands.
                  Custom branding and private-label options are available.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src={Shipment}
                alt="Fresh produce packaging facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="packaging-types page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label">Packaging Options</div>
            <h2 className="section-title">Our Packaging Solutions</h2>
            {divider()}
          </div>

          <div className="packaging-types-grid">
            {packagingTypes.map(({ Icon, title, desc, sizes }) => (
              <div key={title} className="packaging-type-card">
                <div className="icon"><Icon size={28} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="packaging-sizes">
                  {sizes.map(s => <span key={s} className="size-chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freight Options */}
      <section className="freight-section page-section">
        <div className="container-xl">
          <div className="freight-layout">
            <div className="freight-intro">
              <div className="section-label">Freight Solutions</div>
              <h2 className="section-title">Air & Sea Freight</h2>
              {divider('1rem 0')}
              <p>
                We match every shipment to the right transport mode so your produce
                arrives fresh, compliant, and on schedule.
              </p>
              <div className="freight-highlights">
                <span>Fast delivery</span>
                <span>Cold chain control</span>
                <span>Custom logistics</span>
              </div>
            </div>

            <div className="freight-cards">
              <div className="freight-card air">
                <div className="freight-card-content">
                  <div className="freight-card-badge">Priority Cargo</div>
                  <div className="freight-card-header">
                    <div className="freight-icon"><Plane size={28} strokeWidth={1.5} /></div>
                    <div>
                      <h3>Air Freight</h3>
                      <p>Fast delivery for perishable products</p>
                    </div>
                  </div>
                  <div className="freight-card-body">
                    {[
                      'Direct flights from Nairobi JKIA to key hubs',
                      'Transit time: 24–72 hours to Europe & Middle East',
                      'Best for fine beans, snap peas & snow peas',
                      'Cold room handling and export documentation included',
                    ].map(f => <div key={f} className="freight-feature">{f}</div>)}
                  </div>
                </div>
              </div>

              <div className="freight-card sea">
                <div className="freight-card-content">
                  <div className="freight-card-badge">Bulk Shipping</div>
                  <div className="freight-card-header">
                    <div className="freight-icon"><Ship size={28} strokeWidth={1.5} /></div>
                    <div>
                      <h3>Sea Freight</h3>
                      <p>Cost-effective for high-volume orders</p>
                    </div>
                  </div>
                  <div className="freight-card-body">
                    {[
                      'Reefer containers from Mombasa Port',
                      'Transit time: 14–28 days depending on destination',
                      'Ideal for avocados, mangoes & pineapples',
                      'FCL and LCL options with destination customs support',
                    ].map(f => <div key={f} className="freight-feature">{f}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cold Chain */}
      <section className="cold-chain page-section">
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div className="section-label" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
              Cold Chain
            </div>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Our Cold Chain Process
            </h2>
            {divider()}
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
              Maintaining the cold chain from farm to buyer is our highest logistics priority.
            </p>
          </div>

          <div className="cold-chain-steps">
            {coldChainSteps.map(({ Icon, title, desc }) => (
              <div key={title} className="cold-step">
                <div className="step-icon"><Icon size={26} strokeWidth={1.5} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="traceability page-section">
        <div className="container-xl">
          <div className="traceability-content">
            <div className="traceability-text">
              <div className="section-label">Traceability</div>
              <h2 className="section-title">Full Product Traceability</h2>
              {divider('1rem 0')}
              <p>
                Our traceability system links every exported consignment to its source
                farm, harvest date, packer and export documentation. Buyers can verify
                the complete history of any product they receive from Carl Fresh.
              </p>
              <p>
                This transparency builds trust, simplifies regulatory compliance, and
                enables rapid response in the event of any quality query or food safety concern.
              </p>

              <div className="traceability-steps">
                {traceSteps.map(step => (
                  <div key={step.num} className="trace-step">
                    <span className="trace-num">{step.num}</span>
                    <span className="trace-text">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="traceability-visual">
              {traceCards.map(({ Icon, title, desc }) => (
                <div key={title} className="trace-card">
                  <div className="tc-icon"><Icon size={22} strokeWidth={1.6} /></div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}

              <div style={{
                background: 'linear-gradient(135deg, var(--color-green-primary), var(--color-green-mid))',
                borderRadius: '12px',
                padding: '1.5rem',
                color: '#fff',
                textAlign: 'center',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Need Custom Packaging?
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                  Our team can develop custom packaging solutions for your specific market needs.
                </p>
                <Link to="/contact" className="btn-gold" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
                  Discuss Your Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-xl">
          <h2>Ready to Discuss Logistics?</h2>
          <p>
            Talk to our export logistics team about freight options, packaging
            specifications and delivery timelines.
          </p>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-gold">Get Logistics Quote</Link>
            <Link to="/export-markets" className="btn-outline-white">Export Markets</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
