import { Leaf, Carrot, Flame, LayoutGrid } from "lucide-react";
import fruitsImg from "../assets/images/fruits.webp";
import vegetablesImg from "../assets/images/vegetables.webp";
import herbsCategoryImg from "../assets/images/chilli banner.png";
import allImg from "../assets/images/all.webp";
import longCayenneChiliImg from "../assets/images/long chilli.jpg";
import thinChiliImg from "../assets/images/thin chilli.jpg";
import bulletChiliImg from "../assets/images/bullet chilli.jpg";

export interface Product {
  name: string;
  category: string;
  badge?: string;
  desc: string;
  origin: string;
  season: string;
  packaging: string[];
  specs: string;
  markets: string;
  img: string;
}

export const allProducts: Product[] = [
  {
    name: "Long Cayenne Chili",
    category: "Herbs & Spices",
    badge: "Seasonal Spotlight",
    desc: "Long Cayenne chilies are one of Carl Fresh's flagship export products. These bright red, intensely flavoured chilies are in high demand in European, Middle Eastern and Asian markets for both fresh and food processing use.",
    origin: "Eastern & Coastal Kenya",
    season: "Year-round",
    packaging: ["3kg carton", "5kg carton", "10kg bulk", "Retail 100g bags"],
    specs: "Length 15–20cm, Scoville 30,000–50,000 SHU, bright red, no blemish",
    markets: "Europe, Middle East, Asia",
    img: longCayenneChiliImg,
  },
  {
    name: "Thin Chili",
    category: "Herbs & Spices",
    desc: "Slender, high-heat thin chilies with exceptional colour and pungency. Popular with spice processors and specialty food manufacturers, these chilies are harvested at full maturity for maximum capsaicin content.",
    origin: "Eastern Kenya",
    season: "Year-round",
    packaging: ["3kg carton", "5kg carton", "10kg bulk"],
    specs: "Length 8–12cm, Scoville 50,000–80,000 SHU, deep red to green",
    markets: "Europe, Asia, Middle East",
    img: thinChiliImg,
  },
  {
    name: "Bullet Chili",
    category: "Herbs & Spices",
    badge: "Seasonal Spotlight",
    desc: "Compact, round bullet chilies with intense heat and vibrant red colour. A popular variety for Asian cuisines and food processing, our bullet chilies offer consistent size, colour and heat levels.",
    origin: "Coast & Eastern Regions",
    season: "Year-round",
    packaging: ["2kg carton", "3kg carton", "5kg bulk"],
    specs: "Diameter 1.5–3cm, Scoville 50,000–100,000 SHU, deep red, firm",
    markets: "Asia, Middle East, Africa",
    img: bulletChiliImg,
  },
  {
    name: "Avocados",
    category: "Fruits",
    badge: "Flagship Export",
    desc: "Kenyan avocados are renowned for their creamy texture, rich flavour, and high oil content. We supply Hass and Fuerte varieties sourced from the fertile highlands of central Kenya, harvested at optimal maturity for extended shelf life.",
    origin: "Central Kenya Highlands",
    season: "March – September",
    packaging: ["4kg carton", "6kg carton", "10kg carton", "Bulk bins"],
    specs: "Grade A, size 10–24, firmness index 3–5 kg/cm²",
    markets: "Europe, Middle East, Asia",
    img: "https://www.soulflower.in/cdn/shop/articles/avocado-1_335cdafd-3f2d-4de4-a016-37f8476e6ecf-1508942.jpg?v=1780126278&width=1100",
  },
  {
    name: "Mangoes",
    category: "Fruits",
    desc: "Kenya produces some of Africa's finest mangoes. Our Tommy Atkins, Kent and Apple mango varieties are carefully sorted, graded and packed to international specifications, ensuring maximum shelf life and buyer satisfaction.",
    origin: "Coastal Kenya & Rift Valley",
    season: "October – February",
    packaging: ["4kg tray", "5kg carton", "8kg carton"],
    specs: "Export Grade A, Min weight 200g, Brix 14–18°",
    markets: "Europe, Middle East, Africa",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/1/close-up-of-mangoes-red-with-yellow-skins.jpg.rend.hgtvcom.1280.720.85.suffix/1685646276107.webp",
  },
  {
    name: "Pineapples",
    category: "Fruits",
    desc: "Kenyan pineapples are prized for their exceptional sweetness and golden flesh. Sourced from tropical growing regions, our pineapples are harvested at peak ripeness and packed for both air and sea freight.",
    origin: "Western & Coastal Kenya",
    season: "Year-round",
    packaging: ["5 count carton", "8 count carton", "10 count carton"],
    specs: "MD2 & Queen varieties, Brix min 12°, diameter 10–15cm",
    markets: "Europe, Middle East",
    img: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/health_benefits_of_pineapple_slideshow/1800ss_getty_rf_pineapples.jpg?resize=728px:*&output-quality=75",
  },
  {
    name: "Purple Passion Fruits",
    category: "Fruits",
    desc: "Purple passion fruit from Kenya's highland regions is celebrated for its intense, aromatic flavour. High in vitamin C and antioxidants, our passion fruits are ideal for juice processing and premium fresh markets.",
    origin: "Central Kenya Highlands",
    season: "Year-round",
    packaging: ["3kg punnet tray", "5kg carton", "Bulk 10kg"],
    specs: "Grade A, min weight 40g, Brix 14°+, deep purple colour",
    markets: "Europe, Middle East, Asia",
    img: "https://www.yarden.com/wp-content/uploads/Passion-Fruit-Possom-Purple-plant-1.jpg",
  },
  {
    name: "Fine Beans",
    category: "Vegetables",
    desc: "Our fine beans are grown under strict GAP protocols in the highlands of Kenya. With their characteristic bright green colour, tender texture and excellent shelf life, they are a favourite with European supermarkets.",
    origin: "Rift Valley & Central Kenya",
    season: "Year-round",
    packaging: ["200g punnet", "500g bag", "3kg clamshell", "5kg bulk box"],
    specs: "Length 8–13cm, diameter 5–7mm, no defects, bright green",
    markets: "UK, Netherlands, Germany, France",
    img: "https://cropnuts.com/wp-content/uploads/2019/10/french_beans.jpg",
  },
  {
    name: "Snap Peas",
    category: "Vegetables",
    desc: "Sweet, crunchy snap peas sourced from Kenya's cool highland farms. Our snap peas arrive at European markets at peak freshness thanks to our efficient cold chain and air freight partnerships.",
    origin: "Mt. Kenya Region",
    season: "Year-round",
    packaging: ["150g punnet", "200g bag", "3kg carton", "5kg box"],
    specs: "Pod length 7–10cm, firm and crisp, bright green, no strings",
    markets: "Europe, UK, Middle East",
    img: "https://northernwildflowers.ca/cdn/shop/products/SugarSnapPeasshutterstock_45091780.jpg?v=1755013453",
  },
  {
    name: "Snow Peas",
    category: "Vegetables",
    desc: "Flat-podded snow peas with their delicate, sweet flavour are a premium product in European and Asian markets. Grown at altitude for enhanced sweetness, packed and dispatched within 24 hours of harvest.",
    origin: "Central Highlands of Kenya",
    season: "Year-round",
    packaging: ["100g punnet", "200g bag", "3kg flat carton", "5kg carton"],
    specs: "Pod length 6–9cm, flat profile, bright green, string-free",
    markets: "Netherlands, UK, Germany, Singapore",
    img: "https://www.taylorfarms.com/wp-content/uploads/2023/10/Snow-Peas.webp",
  },
];

export const categories = ["All", "Herbs & Spices", "Fruits", "Vegetables"];

export const categoryCircles = [
  { name: "All", Icon: LayoutGrid, img: allImg },
  { name: "Herbs & Spices", Icon: Flame, img: herbsCategoryImg },
  { name: "Fruits", Icon: Leaf, img: fruitsImg },
  { name: "Vegetables", Icon: Carrot, img: vegetablesImg },
];

export const bestSellerNames = [
  "Long Cayenne Chili",
  "Thin Chili",
  "Bullet Chili",
  "Avocados",
  "Mangoes",
  "Pineapples",
  "Purple Passion Fruits",
  "Fine Beans",
  "Snap Peas",
  "Snow Peas",
];
