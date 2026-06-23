export interface Article {
  id: number;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  readTime: string;
  img: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Kenya Avocado Exports Hit Record Highs in 2024",
    excerpt:
      "Kenyan avocado exports reached unprecedented volumes in 2024, with European demand continuing to surge. Carl Fresh Produce played a significant role in meeting this demand through our premium Hass and Fuerte varieties.",
    body: [
      "Kenyan avocado exports reached unprecedented volumes in 2024, with European demand continuing to surge across the Netherlands, France, the UK and Spain. Industry data shows export tonnage grew by over 20% year-on-year, driven by strong consumer appetite for premium Hass avocados and a steady recovery in shipping capacity out of the Port of Mombasa.",
      "Carl Fresh Produce played a significant role in meeting this demand through our premium Hass and Fuerte varieties, sourced from partner farms across Murang'a, Kiambu and Nakuru counties. Our quality control teams conducted pre-harvest dry matter testing on every consignment to ensure fruit met the maturity standards required by European retailers.",
      "Beyond volume growth, 2024 also saw tighter coordination between exporters, KEPHIS inspectors and shipping lines to reduce transit delays. Carl Fresh invested in additional pre-cooling capacity at our Nairobi packhouse, cutting average dispatch-to-cold-store time and helping preserve fruit quality over the multi-week sea freight journey to Europe.",
      "Looking ahead to the new season, we are expanding our partner farmer network and rolling out additional agronomic training to maintain the consistency and food safety standards that have made Kenyan avocados a trusted choice for international buyers.",
    ],
    category: "Market Trends",
    date: "March 2025",
    readTime: "4 min read",
    img: "https://healthynibblesandbits.com/wp-content/uploads/2014/03/avocados.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Water Conservation Wins: Our New Drip Irrigation Programme",
    excerpt:
      "Carl Fresh Produce has rolled out a comprehensive drip irrigation programme across 15 partner farms, reducing water usage by 40% while maintaining exceptional crop quality.",
    body: [
      "Carl Fresh Produce has rolled out a comprehensive drip irrigation programme across 15 partner farms, reducing water usage by 40% while maintaining exceptional crop quality. The initiative responds directly to increasingly unpredictable rainfall patterns across our growing regions and forms a core part of our broader sustainability strategy.",
      "Drip irrigation delivers water directly to the root zone of each plant through a network of tubing and emitters, virtually eliminating the runoff and evaporation losses associated with traditional flood or sprinkler irrigation. For water-sensitive crops like fine beans and snow peas, this also means more consistent soil moisture, which translates into more uniform crop sizing and fewer rejected consignments at the packhouse.",
      "Implementation was carried out in phases, starting with our highest water-stress farms in Kajiado and parts of Machakos, before expanding to vegetable growers supplying our snap pea and fine bean export lines. Farmers received hands-on training on system maintenance, scheduling and troubleshooting to ensure the technology delivers value long after installation.",
      "We are now evaluating solar-powered pumping stations to pair with the drip systems already in place, with the goal of further reducing both water and energy costs for our partner farmers over the coming planting seasons.",
    ],
    category: "Sustainability",
    date: "February 2025",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
  },
  {
    id: 3,
    title: "Understanding Maximum Residue Levels (MRLs) for EU Export",
    excerpt:
      "A practical guide to EU Maximum Residue Level requirements for fresh produce exporters, and how Carl Fresh ensures all our products comply with the strictest European standards.",
    body: [
      "Maximum Residue Levels, or MRLs, define the highest concentration of a pesticide residue that is legally permitted in or on food sold within the European Union. For fresh produce exporters, understanding and consistently meeting MRL requirements is one of the most critical — and most technical — parts of doing business with European buyers.",
      "The EU maintains some of the strictest MRL thresholds in the world, and limits vary by crop and by active ingredient. A residue level that is acceptable on one vegetable may be rejected outright on another, which means blanket spraying programmes are no longer a viable approach for export-oriented farms.",
      "At Carl Fresh, compliance starts at the farm level. Every partner farm operates under an agreed spray programme aligned to GlobalG.A.P. standards, with strict pre-harvest intervals enforced before any crop is eligible for harvest. We then carry out independent residue testing on representative samples from each consignment ahead of export, using accredited laboratories, so that any issue is caught well before a shipment reaches the port.",
      "This layered approach — agronomic training, documented spray records, and independent lab verification — is what allows Carl Fresh to give buyers confidence that every shipment will clear EU border inspections without delay.",
    ],
    category: "Farming Practices",
    date: "January 2025",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
  },
  {
    id: 4,
    title: "New Cold Storage Facility Enhances Export Capacity",
    excerpt:
      "We are excited to announce the completion of our expanded cold storage facility in Nairobi, which doubles our pre-export storage capacity and enhances our ability to serve multiple markets simultaneously.",
    body: [
      "We are excited to announce the completion of our expanded cold storage facility in Nairobi, which doubles our pre-export storage capacity and enhances our ability to serve multiple markets simultaneously. The new facility brings our total pre-cooling and cold-room capacity to levels that allow us to handle peak-season volumes without compromising on temperature consistency.",
      "Maintaining the right temperature from the moment produce leaves the farm to the moment it is loaded onto a vessel or aircraft is one of the most important factors in preserving shelf life. The expanded facility includes dedicated pre-cooling tunnels for delicate crops such as fine beans and snow peas, as well as separate cold rooms calibrated for different temperature and humidity requirements across our fruit, vegetable and herb categories.",
      "The investment also allows us to consolidate consignments bound for different markets — Europe, the Middle East and Asia — under one roof, improving coordination between our quality team, freight forwarders and airline or shipping line partners.",
      "This expansion reflects our long-term commitment to building export infrastructure that keeps pace with growing demand from our international buyers, while giving us the flexibility to onboard new partner farmers without straining our existing capacity.",
    ],
    category: "Product Updates",
    date: "December 2024",
    readTime: "2 min read",
    img: "https://www.inboundlogistics.com/wp-content/uploads/cold-storage-warehouse.jpg",
  },
  {
    id: 5,
    title: "The Growing Demand for Kenyan Chilies in Asia",
    excerpt:
      "Asian markets are developing a strong appetite for Kenyan chili varieties. We explore the drivers behind this trend and how Carl Fresh is positioning itself to meet rising demand.",
    body: [
      "Asian markets are developing a strong appetite for Kenyan chili varieties, with buyers in Singapore, Malaysia and Hong Kong increasingly looking to Kenya as a reliable, year-round supply alternative to traditional Asian growing regions affected by seasonal disruptions.",
      "Kenyan bullet chilies and bird's eye varieties are particularly well suited to this demand, offering the intense heat and vibrant colour that Asian food processors and retailers look for, while benefiting from Kenya's favourable growing conditions and well-established air freight links to the region.",
      "Carl Fresh is positioning itself to meet this rising demand by expanding our network of chili growers in Kenya's eastern and central regions, and by investing in sorting and grading equipment that ensures consistent size, colour and heat levels across every consignment — a key requirement for buyers supplying retail and food processing channels.",
      "As demand continues to grow, we are also exploring value-added options such as pre-sorted retail-ready packaging, designed to reduce handling time for our Asian distribution partners and support faster turnaround once shipments arrive.",
    ],
    category: "Market Trends",
    date: "November 2024",
    readTime: "5 min read",
    img: "https://www.simplyseed.co.uk/user/blog-images/Different%20Types%20of%20Chillies.webp",
  },
  {
    id: 6,
    title: "Farmer Training Programme: 2024 Year in Review",
    excerpt:
      "In 2024, Carl Fresh's farmer training programme reached over 100 smallholder farmers with education on GAP compliance, water management and post-harvest handling.",
    body: [
      "In 2024, Carl Fresh's farmer training programme reached over 100 smallholder farmers with education on GAP compliance, water management and post-harvest handling. The programme is designed to help our partner farmers meet the increasingly rigorous standards demanded by international buyers, while improving yields and reducing post-harvest losses.",
      "Training sessions covered a wide range of topics, from correct pesticide application and record-keeping under GlobalG.A.P. protocols, to practical water management techniques such as drip irrigation scheduling and rainwater harvesting. A dedicated module on post-harvest handling addressed common causes of quality loss between the field and the packhouse, including bruising, improper crate stacking and delayed cooling.",
      "Feedback from participating farmers has been strongly positive, with many reporting measurable improvements in both crop quality and the proportion of harvest accepted for export grade — directly improving farmer incomes.",
      "Building on this momentum, our 2025 training calendar will introduce new modules on integrated pest management and climate-resilient farming practices, as we continue to invest in the long-term capability of the farming communities we work with.",
    ],
    category: "Sustainability",
    date: "October 2024",
    readTime: "4 min read",
    img: "https://farmersreviewafrica.com/wp-content/uploads/2019/04/lemag-e1555311646395.jpg",
  },
  {
    id: 7,
    title: "Fine Beans: A Deep Dive into Kenya's Premium Export Vegetable",
    excerpt:
      "Kenya's fine beans are among the most sought-after fresh vegetables in European supermarkets. This comprehensive overview covers growing regions, varieties, quality standards and logistics.",
    body: [
      "Kenya's fine beans are among the most sought-after fresh vegetables in European supermarkets, prized for their slim profile, tenderness and consistent quality. Grown predominantly in the highland regions around Mount Kenya and the Rift Valley, fine beans benefit from the cool temperatures and fertile volcanic soils that produce the slender, stringless pods European buyers expect.",
      "Several varieties are grown for export, with buyers typically specifying pod length and diameter tolerances as tight as a few millimetres. Meeting these specifications consistently requires careful management of planting density, irrigation and harvest timing, since fine beans can quickly grow past the desired size if left even a day or two too long in the field.",
      "Quality standards for export-grade fine beans extend well beyond size — pods must be free of blemishes, properly snapped or trimmed, and packed swiftly after harvest to preserve crispness. Because fine beans are highly perishable, the journey from farm to packhouse to airport is tightly choreographed, often completed within hours of picking to maximise shelf life on arrival in Europe.",
      "At Carl Fresh, our fine bean supply chain is built around this urgency — same-day collection from partner farms, rapid pre-cooling, and consolidated air freight bookings that get fresh, crisp beans onto supermarket shelves as quickly as possible.",
    ],
    category: "Farming Practices",
    date: "September 2024",
    readTime: "7 min read",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFL8JOAC77W16VrkQcXlCzyQ-KuUNIfkPjODNQlsFltUGU5aUy8p4DD8&s=10",
  },
  {
    id: 8,
    title: "Carl Fresh Achieves HACCP Recertification",
    excerpt:
      "We are pleased to announce successful HACCP recertification following a comprehensive audit of our packing and quality management operations. This milestone reaffirms our commitment to food safety excellence.",
    body: [
      "We are pleased to announce successful HACCP recertification following a comprehensive audit of our packing and quality management operations. This milestone reaffirms our commitment to food safety excellence and our ability to consistently meet the standards expected by international buyers and regulatory bodies alike.",
      "The recertification audit examined every stage of our operation, from incoming raw material checks at the packhouse, through processing, packaging and cold storage, to final dispatch. Auditors reviewed our documented hazard analysis, critical control points, monitoring procedures and corrective action records to confirm that our food safety management system continues to meet international best practice.",
      "Maintaining HACCP certification is not a one-time achievement but an ongoing discipline — our quality team conducts regular internal audits, staff retraining and equipment calibration checks throughout the year to ensure the system remains effective in practice, not just on paper.",
      "This recertification gives our buyers continued assurance that every consignment leaving our facilities has passed through a rigorously controlled, internationally recognised food safety system, from farm to final export.",
    ],
    category: "Product Updates",
    date: "August 2024",
    readTime: "2 min read",
    img: "https://media.licdn.com/dms/image/v2/C5112AQHk2uEGLu_N7A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1565332609852?e=2147483647&v=beta&t=wZ7v0YNcvMiroNGiHw6AgJjHkNzDM1rvGDlaVKVwzoY",
  },
];

export const categories = [
  "All",
  "Market Trends",
  "Sustainability",
  "Farming Practices",
  "Product Updates",
];
