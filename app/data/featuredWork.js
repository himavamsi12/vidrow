// logo.zoom: how far the mobile card scales its logo up inside the white
// corner block. The logo files are squares with the mark taking very
// different shares of them, so each is worked out from its own mark's
// bounds — the most the mark can grow while still fitting about 80% of the
// block's width and height, never cropped.
export const FEATURED_WORK = [
  {
    id: "helium",
    logo: { type: "image", src: "/featured%20works/helium.png", alt: "Helium", trim: 0.146, scale: 1.4, zoom: 2.4 },
    name: "Helium Smart Air",
    category: "Consumer Hardware",
    photos: [
      { src: "/Helium.png", cls: "fw-ph1" },
      { src: "/work/Aman Helium.png", cls: "fw-ph2" },
    ],
    plates: [
      { name: "Ashish Sharma", role: "Founder & CEO", cls: "fw-plate1" },
      { name: "Aman Munka", role: "Co-founder & CTO", cls: "fw-plate2" },
    ],
    quote:
      "**Vidrow has been with us since day one. Over the past six months, they helped us position and launch Helium as a disruptor.**\n\nTheir work across brand, performance and social made Helium go viral and got us to product-market fit faster than we expected. What stood out was their engineering mindset. Every creative decision came from live testing, not opinion.\n\nThey think brand-first and stay ahead of the curve. We\u2019re deepening the partnership as we take Helium from 1 to 10, and 10 to 100.",
    // the shorter testimonial the mobile card runs; [[…]] marks the lines set darker
    mobileQuote:
      "Vidrow has been with us since day one, helping us position and launch Helium as a disruptor. Their work across brand, performance and social drove genuine virality and [[accelerated our path to product-market fit.]]\n\nWhat stood out was their engineering mindset - every creative decision came from live testing, not opinion. [[They think brand-first and stay ahead of the curve.]]\n\nWe’re excited to deepen the partnership as Helium scales.",
    line: "Helium sold 500 ACs a day within a month of launch.",
  },
  {
    id: "platinum-rx",
    href: "/case-study/platinumrx",
    logo: { type: "image", src: "/featured%20works/platinum.png", alt: "PlatinumRx", trim: 0.25, zoom: 1.6 },
    name: "Platinum RX",
    category: "Consumer Health",
    photos: [
      { src: "/ashish.png", cls: "fw-ph1" },
      { src: "/work/Piyush Platinum.png", cls: "fw-ph2" },
    ],
    plates: [
      { name: "Ashutosh Pandey", role: "Founder & CEO", cls: "fw-plate1" },
      { name: "Piyush Kumar", role: "Co-founder & CTO", cls: "fw-plate2" },
    ],
    quote:
      "**Vidrow helped scale our performance marketing in the first three months,** built our UGC engine, and ran two celebrity campaigns plus our brand ambassador launch. They work with the urgency of an in-house team. Would definitely recommend.",
    line: "PlatinumRx crosses 1 million customers",
  },
  {
    id: "inkpen-labs",
    logo: { type: "image", src: "/featured%20works/inkpen%20labs.png", alt: "Inkpen Labs", trim: 0.069, zoom: 1.2 },
    name: "Inkpen Labs",
    category: "inkpenlabs.com",
    solo: true,
    photos: [{ src: "/featured%20works/shashank.png", cls: "fw-ph fw-phSolo" }],
    plates: [{ name: "Shashank Shekhar", role: "Founder & CEO", cls: "fw-plate1 fw-plateSolo" }],
    quote:
      "**I\u2019ve followed Aditya & Anushank\u2019s entrepreneurial and creative journey closely, and the work they\u2019ve built with Vidrow has always inspired me.** So when we needed a thought partner to move faster, they were the obvious choice.\n\nOver the past six months, they\u2019ve helped us test and iterate towards PMF, bringing expertise across performance marketing, content, research, and product. Their team strikes a rare balance of analytical rigor and creative innovation.",
    line: "Inkpen Labs achieved PMF 2X faster",
  },
  {
    id: "masai-school",
    href: "/case-study/masai",
    logo: { type: "image", src: "/featured%20works/masai.png", alt: "Masai School", trim: 0.049, zoom: 1.85 },
    name: "Masai School",
    category: "masaischool.com",
    photos: [
      { src: "/featured%20works/Prateek%20Shukla.png", cls: "fw-ph1" },
      { src: "/featured%20works/Ankit%20Agrawal.png", cls: "fw-ph2 fw-phGrow" },
    ],
    plates: [
      { name: "Prateek Shukla", role: "Co-founder & CEO", cls: "fw-plate1" },
      { name: "Ankit Agrawal", role: "Co-founder & CTO", cls: "fw-plate2" },
    ],
    quote:
      "**We\u2019ve been working with Vidrow for the past eight months, and they\u2019ve been a strong partner to our marketing and growth team at Masai.** Their deep understanding of our category has helped us strengthen and scale performance marketing, diversify our acquisition mix, and reduce our dependence on influencer-led marketing.\n\nWhat stands out is Vidrow\u2019s data-backed creative approach, strong performance marketing expertise, and speed of execution. They\u2019ve brought greater predictability and control to how we allocate and scale marketing spends. I\u2019d recommend Vidrow to companies looking to complement and accelerate their internal growth efforts.",
    line: "Masai School reaches \u20b9250+ crore in revenue in Edtech",
  },
  {
    id: "grexa-ai",
    logo: { type: "image", src: "/featured%20works/grexa.png", alt: "Grexa AI", trim: 0.042, zoom: 1.9 },
    name: "Grexa AI",
    category: "grexa.ai",
    solo: true,
    photos: [{ src: "/featured%20works/Narendra%20Agrawal.png", cls: "fw-ph fw-phSolo" }],
    plates: [{ name: "Narendra Agarwal", role: "Founder & CEO", cls: "fw-plate1 fw-plateSolo" }],
    quote:
      "**Six years. Two startups. Vidrow has been with us through both.** From 2020 to 2023, they were deep in the trenches with us at Testbook, executing campaigns across categories and helping launch new ones. They weren\u2019t just an agency - they were partners we relied on.\n\nWhen we started Grexa AI, Vidrow was our first call for marketing. What sets them apart is their ability to understand the business, technology, and audience - and turn that into campaigns that deliver.\n\nSix years in, the partnership only keeps getting stronger.",
    line: "Grexa crosses 500,000+ business owner network in a year",
  },
  {
    id: "apnamart",
    logo: { type: "image", src: "/casestudy%20images/apna%20amrt.png", alt: "Apnamart", scale: 0.75, zoom: 0.85 },
    name: "Apnamart",
    category: "apnamart.in",
    solo: true,
    photos: [{ src: "/featured%20works/Abhishek%20Singh.png", cls: "fw-ph fw-phSolo fw-phShrink" }],
    plates: [{ name: "Abhishek Singh", role: "Founder & CEO", cls: "fw-plate1 fw-plateSolo" }],
    quote:
      "We\u2019ve worked with Vidrow for two years, and they\u2019ve become an extension of the Apnamart team. **From brand positioning to performance and offline marketing, they go deep, challenge our thinking, and stay focused on outcomes.**\n\nWhen we handed them our toughest challenge - rebranding Apnamart - they delivered a new positioning that will shape our next chapter of growth. Vidrow is a partner we genuinely trust.",
    line: "Apnamart grew it\u2019s revenue 2.5\u00d7 in FY26 to around \u20b9500 crore",
  },
];
