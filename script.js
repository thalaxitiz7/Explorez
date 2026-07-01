/**
 * EXPLOREZ – script.js
 * Main JavaScript file for all interactivity, data, charts, and UI logic.
 * Author: EXPLOREZ Team | 2026
 */

/* ============================================================
   GLOBAL DATA STORE
   All mock product, news, review, deal, blog data
   ============================================================ */

const PRODUCTS = [
  {
    id: 1, name: "iPhone 16 Pro", brand: "Apple", category: "smartphone",
    icon: "📱", price: 189000, priceFormatted: "Rs. 1,89,000",
    badge: "perf", badgeLabel: "Best Performance",
    ram: "8 GB", storage: "256 GB", processor: "A18 Pro", battery: "3274 mAh",
    camera: "48 MP Triple", display: "6.3\" Super Retina XDR OLED",
    os: "iOS 18", connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
    build: "Titanium + Ceramic Shield", rating: 4.7, ratingCount: 2840,
    benchmarkScore: 96, gamingPerf: 95, cameraPerf: 94, batteryPerf: 72,
    bestFor: ["Content Creators", "Professionals", "Photographers", "Travelers"],
    pros: ["Best-in-class A18 Pro chip", "Exceptional camera system", "Premium titanium build", "Long software support"],
    cons: ["Very high price", "No charger included", "Battery life could be better", "USB-C limited to USB 3.2"],
    verdict: "The iPhone 16 Pro is the pinnacle of smartphone engineering. If you're deep in the Apple ecosystem and want the absolute best camera and performance, this is the phone to get — budget permitting.",
    stores: [
      { name: "Oliz Store", price: "Rs. 1,89,000", available: true, link: "#" },
      { name: "Daraz", price: "Rs. 1,91,500", available: true, link: "#" },
      { name: "Hukut", price: "Rs. 1,88,000", available: false, link: "#" },
      { name: "Evo Store", price: "Rs. 1,92,000", available: true, link: "#" }
    ],
    priceHistory: {
      daily: [188000,189000,190000,188500,187500,189000,189000],
      weekly: [195000,192000,190000,188000,187000,189000,189000],
      monthly: [210000,205000,200000,195000,192000,190000,189000],
      yearly: [220000,215000,210000,205000,200000,195000,189000]
    },
    stats: { current: "Rs. 1,89,000", low: "Rs. 1,72,000", high: "Rs. 2,10,000", avg: "Rs. 1,96,000" },
    storePrices: [
      { store: "Oliz Store", price: "Rs. 1,89,000", available: true },
      { store: "Daraz", price: "Rs. 1,91,500", available: true },
      { store: "Hukut", price: "Rs. 1,88,000", available: false },
      { store: "Evo Store", price: "Rs. 1,92,000", available: true }
    ]
  },
  {
    id: 2, name: "Samsung Galaxy S25", brand: "Samsung", category: "smartphone",
    icon: "📱", price: 155000, priceFormatted: "Rs. 1,55,000",
    badge: "value", badgeLabel: "Best Value",
    ram: "12 GB", storage: "256 GB", processor: "Snapdragon 8 Elite", battery: "4000 mAh",
    camera: "50 MP Triple", display: "6.2\" Dynamic AMOLED 2X",
    os: "Android 15 / One UI 7", connectivity: "5G, Wi-Fi 7, Bluetooth 5.3",
    build: "Armor Aluminum + Gorilla Glass Victus 2", rating: 4.5, ratingCount: 1920,
    benchmarkScore: 92, gamingPerf: 93, cameraPerf: 88, batteryPerf: 82,
    bestFor: ["Android Enthusiasts", "Gamers", "Office Users", "Students"],
    pros: ["Powerful Snapdragon 8 Elite", "Excellent battery life", "Beautiful AMOLED display", "7 years of OS updates"],
    cons: ["Bezels slightly thicker", "Average ultrawide camera", "Bixby can be intrusive", "Price increased vs S24"],
    verdict: "The Galaxy S25 is Samsung's most refined flagship yet. With the Snapdragon 8 Elite and 7 years of updates, it's an excellent long-term investment for Android fans who want top performance.",
    stores: [
      { name: "Oliz Store", price: "Rs. 1,55,000", available: true, link: "#" },
      { name: "Daraz", price: "Rs. 1,57,000", available: true, link: "#" },
      { name: "Hukut", price: "Rs. 1,54,500", available: true, link: "#" },
      { name: "Evo Store", price: "Rs. 1,58,000", available: false, link: "#" }
    ],
    priceHistory: {
      daily: [155000,154000,156000,155000,154500,155000,155000],
      weekly: [162000,160000,158000,156000,155000,155000,155000],
      monthly: [175000,170000,165000,162000,158000,156000,155000],
      yearly: [185000,180000,175000,170000,165000,160000,155000]
    },
    stats: { current: "Rs. 1,55,000", low: "Rs. 1,40,000", high: "Rs. 1,75,000", avg: "Rs. 1,60,000" },
    storePrices: [
      { store: "Oliz Store", price: "Rs. 1,55,000", available: true },
      { store: "Daraz", price: "Rs. 1,57,000", available: true },
      { store: "Hukut", price: "Rs. 1,54,500", available: true }
    ]
  },
  {
    id: 3, name: "MacBook Air M3", brand: "Apple", category: "laptop",
    icon: "💻", price: 145000, priceFormatted: "Rs. 1,45,000",
    badge: "value", badgeLabel: "Best Value",
    ram: "16 GB", storage: "512 GB SSD", processor: "Apple M3", battery: "15 hrs",
    camera: "1080p FaceTime", display: "13.6\" Liquid Retina",
    os: "macOS Sequoia", connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt",
    build: "100% Recycled Aluminum", rating: 4.8, ratingCount: 3100,
    benchmarkScore: 91, gamingPerf: 65, cameraPerf: 70, batteryPerf: 97,
    bestFor: ["Students", "Content Creators", "Office Users", "Travelers"],
    pros: ["Exceptional M3 performance", "15+ hrs battery life", "Fanless silent operation", "Beautiful Retina display"],
    cons: ["Limited to 24GB RAM", "No gaming GPU", "Only 2 Thunderbolt ports", "Price premium"],
    verdict: "The MacBook Air M3 is the best laptop for most people. Its combination of performance, battery life, and thin design is unmatched. Perfect for students, professionals, and creators who value efficiency.",
    stores: [
      { name: "Oliz Store", price: "Rs. 1,45,000", available: true, link: "#" },
      { name: "Daraz", price: "Rs. 1,48,000", available: true, link: "#" },
      { name: "Hukut", price: "Rs. 1,44,000", available: false, link: "#" },
      { name: "Evo Store", price: "Rs. 1,47,000", available: true, link: "#" }
    ],
    priceHistory: {
      daily: [145000,144500,146000,145000,144000,145000,145000],
      weekly: [150000,148000,147000,146000,145000,145000,145000],
      monthly: [160000,155000,152000,150000,148000,146000,145000],
      yearly: [170000,165000,160000,155000,152000,148000,145000]
    },
    stats: { current: "Rs. 1,45,000", low: "Rs. 1,30,000", high: "Rs. 1,68,000", avg: "Rs. 1,50,000" },
    storePrices: [
      { store: "Oliz Store", price: "Rs. 1,45,000", available: true },
      { store: "Daraz", price: "Rs. 1,48,000", available: true }
    ]
  },
  {
    id: 4, name: "Yamaha R15 V4", brand: "Yamaha", category: "bike",
    icon: "🏍️", price: 425000, priceFormatted: "Rs. 4,25,000",
    badge: "perf", badgeLabel: "Best Performance",
    ram: "N/A", storage: "N/A", processor: "155cc VVA Engine", battery: "N/A",
    camera: "N/A", display: "Full-Color TFT LCD",
    os: "N/A", connectivity: "Bluetooth App (Y-Connect)",
    build: "Deltabox Aluminum Frame", rating: 4.6, ratingCount: 890,
    benchmarkScore: 88, gamingPerf: 0, cameraPerf: 0, batteryPerf: 0,
    bestFor: ["Riders", "Daily Commuters", "Track Enthusiasts", "Young Adults"],
    pros: ["VVA variable valve actuation", "Sporty aerodynamic design", "Quick shifter (optional)", "Bluetooth connectivity"],
    cons: ["Aggressive riding position", "Hard seat for long rides", "No fuel gauge", "Pillion not very comfortable"],
    verdict: "The Yamaha R15 V4 is the quintessential sporty commuter. With VVA tech and an advanced chassis, it delivers a thrilling ride that punches well above its price point.",
    stores: [
      { name: "Jagdamba Motors", price: "Rs. 4,25,000", available: true, link: "#" },
      { name: "Motozone", price: "Rs. 4,28,000", available: true, link: "#" }
    ],
    priceHistory: {
      daily: [425000,425000,426000,425000,424000,425000,425000],
      weekly: [428000,427000,426000,425000,425000,425000,425000],
      monthly: [430000,428000,427000,426000,425000,425000,425000],
      yearly: [440000,435000,432000,430000,428000,426000,425000]
    },
    stats: { current: "Rs. 4,25,000", low: "Rs. 4,10,000", high: "Rs. 4,40,000", avg: "Rs. 4,28,000" },
    storePrices: [
      { store: "Jagdamba Motors", price: "Rs. 4,25,000", available: true },
      { store: "Motozone Nepal", price: "Rs. 4,28,000", available: true }
    ]
  },
  {
    id: 5, name: "Redmi Note 14 Pro", brand: "Xiaomi", category: "smartphone",
    icon: "📱", price: 42000, priceFormatted: "Rs. 42,000",
    badge: "budget", badgeLabel: "Budget Pick",
    ram: "8 GB", storage: "128 GB", processor: "Dimensity 7300 Ultra", battery: "5500 mAh",
    camera: "200 MP Triple", display: "6.67\" AMOLED 120Hz",
    os: "Android 14 / HyperOS", connectivity: "4G, Wi-Fi 6, Bluetooth 5.3",
    build: "Glass Back + Aluminum Frame", rating: 4.3, ratingCount: 4200,
    benchmarkScore: 74, gamingPerf: 76, cameraPerf: 80, batteryPerf: 88,
    bestFor: ["Students", "Budget Buyers", "Photography Enthusiasts", "First-time smartphone users"],
    pros: ["200MP camera at this price", "Massive 5500mAh battery", "120Hz AMOLED display", "Excellent value for money"],
    cons: ["Dimensity 7300 is mid-range", "HyperOS has lots of bloatware", "Average low-light video", "Slower charging than flagship"],
    verdict: "The Redmi Note 14 Pro is an outstanding budget choice offering features usually found in phones costing twice as much. For students and value-conscious buyers in Nepal, this is the one to beat.",
    stores: [
      { name: "Daraz", price: "Rs. 42,000", available: true, link: "#" },
      { name: "Hukut", price: "Rs. 41,500", available: true, link: "#" },
      { name: "Oliz Store", price: "Rs. 43,000", available: true, link: "#" }
    ],
    priceHistory: {
      daily: [42000,41500,42500,42000,41000,42000,42000],
      weekly: [46000,45000,44000,43500,43000,42500,42000],
      monthly: [52000,50000,48000,46000,44000,43000,42000],
      yearly: [60000,56000,52000,49000,46000,44000,42000]
    },
    stats: { current: "Rs. 42,000", low: "Rs. 38,000", high: "Rs. 60,000", avg: "Rs. 49,000" },
    storePrices: [
      { store: "Daraz", price: "Rs. 42,000", available: true },
      { store: "Hukut", price: "Rs. 41,500", available: true },
      { store: "Oliz Store", price: "Rs. 43,000", available: true }
    ]
  },
  {
    id: 6, name: "Sony Bravia 55\" 4K", brand: "Sony", category: "tv",
    icon: "📺", price: 95000, priceFormatted: "Rs. 95,000",
    badge: "perf", badgeLabel: "Best Performance",
    ram: "N/A", storage: "N/A", processor: "Cognitive XR Processor", battery: "N/A",
    camera: "N/A", display: "55\" 4K OLED Google TV",
    os: "Google TV", connectivity: "Wi-Fi, HDMI 2.1, Bluetooth, Airplay",
    build: "Premium Aluminum Stand", rating: 4.5, ratingCount: 650,
    benchmarkScore: 89, gamingPerf: 91, cameraPerf: 0, batteryPerf: 0,
    bestFor: ["Home Theater", "Gamers", "Movie Lovers", "Family"],
    pros: ["Exceptional picture quality", "Google TV smart features", "Low input lag for gaming", "Dolby Vision & Atmos"],
    cons: ["Expensive for 55 inch", "No free-sync premium pro", "Can get warm during use", "Limited HDR brightness"],
    verdict: "The Sony Bravia 55\" 4K is one of the best TVs money can buy in Nepal. Its OLED panel and Cognitive XR processor deliver breathtaking visuals for movies and gaming alike.",
    stores: [
      { name: "Oliz Store", price: "Rs. 95,000", available: true, link: "#" },
      { name: "Daraz", price: "Rs. 97,500", available: true, link: "#" }
    ],
    priceHistory: {
      daily: [95000,95000,96000,95000,94000,95000,95000],
      weekly: [100000,98000,97000,96000,95000,95000,95000],
      monthly: [110000,107000,104000,101000,98000,96000,95000],
      yearly: [125000,118000,112000,107000,103000,98000,95000]
    },
    stats: { current: "Rs. 95,000", low: "Rs. 88,000", high: "Rs. 1,25,000", avg: "Rs. 1,03,000" },
    storePrices: [
      { store: "Oliz Store", price: "Rs. 95,000", available: true },
      { store: "Daraz", price: "Rs. 97,500", available: true }
    ]
  }
];

/* Reviews data */
const REVIEWS = {
  expert: [
    { name: "TechNepali Team", role: "Expert Review", avatar: "TN", avatarColor: "#2563eb", product: "iPhone 16 Pro", score: 9.1, stars: 5, date: "May 2026", text: "The iPhone 16 Pro sets a new benchmark for flagship smartphones. The A18 Pro chip's performance is unparalleled, and the camera system with its improved computational photography sets it miles apart from the competition.", pros: ["Industry-leading performance", "Best-in-class cameras", "Premium build quality"], cons: ["Extremely expensive", "Battery could be bigger"] },
    { name: "GadgetByte Nepal", role: "Senior Reviewer", avatar: "GB", avatarColor: "#7c3aed", product: "Samsung S25", score: 8.7, stars: 4, date: "Apr 2026", text: "Samsung has finally addressed the Snapdragon exclusivity issue and the Galaxy S25 is the most polished Galaxy S series device in years. The software experience is significantly cleaner and One UI 7 is a delight.", pros: ["Snapdragon 8 Elite exclusive", "7 years of updates promise", "Clean One UI 7"], cons: ["Incremental upgrade from S24", "Bezels could be slimmer"] },
    { name: "YetTech Review", role: "Lead Reviewer", avatar: "YT", avatarColor: "#059669", product: "MacBook Air M3", score: 9.3, stars: 5, date: "Mar 2026", text: "Year after year, the MacBook Air keeps redefining what a thin-and-light laptop should be. The M3 chip brings tangible gains in GPU performance and with up to 24GB of unified memory, it handles even demanding creative tasks effortlessly.", pros: ["Silent fanless operation", "Incredible battery endurance", "macOS optimization"], cons: ["Needs external display for multitasking", "USB-A adapter required"] }
  ],
  user: [
    { name: "Bikash Shrestha", role: "Verified Buyer", avatar: "BS", avatarColor: "#d97706", product: "Redmi Note 14 Pro", score: 8.5, stars: 4, date: "May 2026", text: "Bought this for my daughter's college use. The 200MP camera is genuinely impressive for social media content and the battery easily lasts two full days. Best phone I've found under Rs. 50,000 in Nepal.", pros: ["Amazing camera for the price", "2-day battery life", "Fast charging"], cons: ["A bit heavy", "Bloatware pre-installed"] },
    { name: "Priya Tamang", role: "Verified Buyer", avatar: "PT", avatarColor: "#dc2626", product: "MacBook Air M3", score: 9.0, stars: 5, date: "Apr 2026", text: "As a graphic design student, the MacBook Air M3 changed everything. It handles Adobe Illustrator and Photoshop without breaking a sweat, and I only charge it every 2 days. The display is gorgeous.", pros: ["Handles creative apps perfectly", "Display quality", "Build quality feels premium"], cons: ["Price is high but worth it"] },
    { name: "Roshan KC", role: "Verified Buyer", avatar: "RK", avatarColor: "#0891b2", product: "Samsung Galaxy S25", score: 8.2, stars: 4, date: "May 2026", text: "Switched from my iPhone 13 to the S25 and couldn't be happier. The camera flexibility with the zoom options is incredible, and the 5000mAh battery keeps me going all day even with heavy use.", pros: ["Excellent zoom camera", "Long battery life", "Great display"], cons: ["Expensive accessories", "Samsung account push"] }
  ],
  community: [
    { name: "MobileNepal Forum", role: "Community Thread", avatar: "MN", avatarColor: "#7c3aed", product: "iPhone 16 Pro", score: 8.9, stars: 5, date: "May 2026", text: "Community consensus: The 16 Pro is worth it if you can afford it. The camera improvements are not just marketing — real-world shots are dramatically better than the 15 Pro in low light. Price remains the biggest complaint.", pros: ["Camera much improved", "Titanium feels great", "iOS ecosystem"], cons: ["Price too high for Nepal", "No charger in box"] },
    { name: "TechTalk Nepal", role: "Community Poll", avatar: "TT", avatarColor: "#f97316", product: "Redmi Note 14 Pro", score: 8.8, stars: 4, date: "Apr 2026", text: "This was voted 'Best Budget Phone 2026' by 15,000+ community members. The consistent theme in 500+ reviews: the camera punches way above its weight class and the battery life is genuinely impressive.", pros: ["Community favorite", "200MP camera", "Massive battery"], cons: ["Build not as premium", "MIUI/HyperOS ads"] }
  ]
};

/* Social opinions data */
const SOCIAL_OPINIONS = {
  reddit: [
    { user: "u/techgeek_ktm", time: "2h ago", text: "iPhone 16 Pro camera system is legitimately incredible. Shot my cousin's wedding entirely on it and people thought I had a DSLR. The computational photography is mind-blowing.", sentiment: "pos", upvotes: 2341 },
    { user: "u/NepaliTechFan", time: "5h ago", text: "Finally got the Samsung S25 and honestly it's the complete package. Battery, camera, software — everything is polished. Only gripe is the price hike from last year.", sentiment: "neu", upvotes: 874 },
    { user: "u/BudgetTechNP", time: "1d ago", text: "Can't justify spending 1.89 lakh on a phone when the Redmi Note 14 Pro at 42k does 90% of what most people need. The 200MP camera is insane for the price.", sentiment: "neg", upvotes: 1560 },
    { user: "u/MacUserKathmandu", time: "3d ago", text: "MacBook Air M3 for video editing is absolutely wild. M1 to M3 is a huge jump. My 4K edit export times dropped by 40%.", sentiment: "pos", upvotes: 445 }
  ],
  twitter: [
    { user: "@NepalTechReview", time: "1h ago", text: "Just tested the iPhone 16 Pro in Pokhara — the landscape shots with the new photography styles are absolutely stunning. Nepal needs this camera. 🏔️ #iPhone16Pro", sentiment: "pos", upvotes: 892 },
    { user: "@TechPricingNP", time: "4h ago", text: "Samsung S25 price in Nepal is 1.55 lakh. Same phone is $800 in USA. We're paying ~30% premium. Still the best Android flagship you can buy here though.", sentiment: "neu", upvotes: 2104 },
    { user: "@GadgetBuyerNP", time: "8h ago", text: "Redmi Note 14 Pro price drop alert! Down to 41,500 on Hukut today. At this price it's an absolute no-brainer. Buy it before it goes back up! 🔥", sentiment: "pos", upvotes: 567 }
  ],
  youtube: [
    { user: "TechNepali Official", time: "3 days ago", text: "FULL REVIEW: iPhone 16 Pro in Nepal — Our most detailed review yet. Tested camera vs iPhone 15 Pro, gaming benchmarks, and real-world battery life. Verdict: it's incredible but only if budget is not a concern.", sentiment: "pos", upvotes: 14200 },
    { user: "GadgetByte Nepal", time: "1 week ago", text: "Samsung Galaxy S25 vs iPhone 16 Pro CAMERA BATTLE in Nepal — Which phone takes better photos in Nepal's lighting conditions? Spoiler: it's closer than you think!", sentiment: "neu", upvotes: 8900 },
    { user: "Budget Tech Nepal", time: "2 weeks ago", text: "Redmi Note 14 Pro — 200MP camera tested: Is it real? We put it through real-world tests and the results genuinely surprised us. Best budget phone under 50k.", sentiment: "pos", upvotes: 11500 }
  ]
};

/* Deals data */
const DEALS = [
  { type: "flash", typeLabel: "Flash Sale", icon: "📱", name: "Redmi Note 14 Pro 8/256", store: "Hukut Nepal", originalPrice: 46000, currentPrice: 41500, discount: 10, hours: 5, minutes: 23, seconds: 47 },
  { type: "festival", typeLabel: "Festival Offer", icon: "💻", name: "HP Pavilion 15 Intel i5", store: "Oliz Store", originalPrice: 85000, currentPrice: 69999, discount: 18, hours: 23, minutes: 59, seconds: 59 },
  { type: "drop", typeLabel: "Price Drop", icon: "🎧", name: "Sony WH-1000XM5", store: "Daraz Nepal", originalPrice: 45000, currentPrice: 37500, discount: 17, hours: 11, minutes: 45, seconds: 30 },
  { type: "flash", typeLabel: "Flash Sale", icon: "📺", name: "Samsung 43\" Crystal 4K", store: "Evo Store", originalPrice: 65000, currentPrice: 54999, discount: 15, hours: 2, minutes: 17, seconds: 12 },
  { type: "festival", typeLabel: "Limited Deal", icon: "⌚", name: "Apple Watch Series 10", store: "Oliz Store", originalPrice: 65000, currentPrice: 56500, discount: 13, hours: 47, minutes: 59, seconds: 59 },
  { type: "drop", typeLabel: "Price Drop", icon: "🎮", name: "PS5 Slim Console", store: "Daraz Nepal", originalPrice: 95000, currentPrice: 82000, discount: 14, hours: 8, minutes: 34, seconds: 22 }
];

/* News data */
const NEWS = [
  { cat: "smartphones", icon: "📱", gradient: "linear-gradient(135deg,#1e3a8a,#7c3aed)", title: "Apple Launches iPhone 16 Pro in Nepal: Everything You Need to Know", excerpt: "Apple's latest flagship arrives in Nepal with massive camera improvements, the powerful A18 Pro chip, and a new titanium design. We break down everything that matters for Nepali buyers.", date: "May 28, 2026", readTime: "5 min read", featured: true },
  { cat: "laptops", icon: "💻", gradient: "linear-gradient(135deg,#312e81,#1e40af)", title: "Best Laptops Under Rs. 80,000 in Nepal 2026", excerpt: "Our updated guide to the best laptops available in Nepal at different price points.", date: "May 27, 2026", readTime: "8 min read" },
  { cat: "ai", icon: "🤖", gradient: "linear-gradient(135deg,#0c4a6e,#0891b2)", title: "How AI is Changing Smartphone Photography in 2026", excerpt: "From computational photography to real-time scene enhancement, AI is revolutionizing how we take photos.", date: "May 26, 2026", readTime: "6 min read" },
  { cat: "automobiles", icon: "🏍️", gradient: "linear-gradient(135deg,#7c2d12,#f97316)", title: "Yamaha Launches New R15 M Limited Edition in Nepal", excerpt: "Yamaha Nepal has quietly launched a new limited-edition R15 M with updated colors and optional quick-shifter.", date: "May 25, 2026", readTime: "3 min read" },
  { cat: "gaming", icon: "🎮", gradient: "linear-gradient(135deg,#4c1d95,#dc2626)", title: "PlayStation 5 Pro Review: Is It Worth the Upgrade?", excerpt: "We test the PS5 Pro with the latest games and compare performance to the original PS5.", date: "May 24, 2026", readTime: "10 min read" },
  { cat: "smartphones", icon: "📱", gradient: "linear-gradient(135deg,#064e3b,#059669)", title: "Google Pixel 10 Pro: Everything We Know So Far", excerpt: "Leaks and rumors paint a picture of Google's upcoming flagship that could shake up the Android market.", date: "May 23, 2026", readTime: "4 min read" }
  
];

/* Blog data */
const BLOGS = [
  { tag: "Guide", icon: "📱", gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)", title: "Best Phones Under Rs. 50,000 in Nepal — 2026 Edition", excerpt: "We tested 15 smartphones in the 30k–50k range to find the absolute best options for different use cases. Here are our top picks.", date: "May 29, 2026", readTime: "12 min", author: "TechNepali Team",link: "articles/phone-guide.html" },
  { tag: "Buying Guide", icon: "💻", gradient: "linear-gradient(135deg,#312e81,#7c3aed)", title: "Laptop Buying Guide 2026: What to Look For Before You Buy", excerpt: "RAM, storage, processor, display — we explain every spec in plain English and tell you what actually matters for your use case.", date: "May 26, 2026", readTime: "15 min", author: "Kshitiz Sapkota",link: "articles/buying-guide.html" },
  { tag: "Comparison", icon: "🏍️", gradient: "linear-gradient(135deg,#7c2d12,#dc2626)", title: "Best Mileage Bikes in Nepal 2026 — Complete Comparison", excerpt: "We compared fuel efficiency, maintenance cost, comfort, and reliability of 10 popular bikes in Nepal.", date: "May 24, 2026", readTime: "10 min", author: "Pratik Khadka",link: "articles/bike-comp.html" },
  { tag: "Camera", icon: "📷", gradient: "linear-gradient(135deg,#064e3b,#10b981)", title: "Smartphone Camera Comparison Guide: Which Phone Takes Best Photos?", excerpt: "We put the iPhone 16 Pro, Samsung S25, and Pixel 10 Pro through rigorous real-world camera tests in Nepal.", date: "May 21, 2026", readTime: "18 min", author: "GadgetByte Nepal",link:"articles/camara.html" },
  { tag: "Tips", icon: "💡", gradient: "linear-gradient(135deg,#0c4a6e,#06b6d4)", title: "5 Things to Always Check Before Buying Electronics in Nepal", excerpt: "Warranty, import duty, service centers — these are the things most buyers overlook and regret later.", date: "May 18, 2026", readTime: "6 min", author: "EXPLOREZ Team",link:"articles/tips.html" },
  { tag: "Review", icon: "📺", gradient: "linear-gradient(135deg,#1e1b4b,#4338ca)", title: "Best Smart TVs Under Rs. 1 Lakh in Nepal — 2026 Picks", excerpt: "4K, OLED, QLED — we cut through the jargon and tell you which TV is actually worth your money.", date: "May 15, 2026", readTime: "11 min", author: "AV Expert Nepal",link:"articles/Smart-tv.html" }
];
/* END DATA STORE */

/* ============================================================
   INITIALIZATION
   Called on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroChart();
  initScrollBehavior();
  initHeaderScroll();
  initIntersectionObserver();
  renderProductCards();
  initPriceChart();
  renderDeals();
  renderNews();
  renderBlog();
  renderReviews();
  renderSocialOpinions();
  initCountdowns();
  initHeaderSearch();
  initMainSearch();
  initPickerList();
  initCounterAnimations();
  initMobileMenu();
  initBackToTop();
});

/* ============================================================
   HERO MINI CHART
   Small sparkline chart on the hero section
   ============================================================ */
function initHeroChart() {
  const ctx = document.getElementById('heroMiniChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['','','','','','',''],
      datasets: [{
        data: [62000, 58000, 65000, 55000, 52000, 57000, 50000],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.12)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
}
/* END HERO CHART */

/* ============================================================
   SCROLL BEHAVIOR
   Smooth scroll to sections from nav links and buttons
   ============================================================ */
function initScrollBehavior() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      scrollToSection(section);
      // Close mobile menu if open
      document.getElementById('mainNav').classList.remove('open');
    });
  });
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
/* END SCROLL BEHAVIOR */

/* ============================================================
   HEADER SCROLL EFFECT
   Adds scrolled class to header when page is scrolled
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });
}

function updateActiveNavLink() {
  const sections = ['home','compare','price-tracker','reviews','deals','news','blog','about'];
  const offset = 200;
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - offset) {
      current = id;
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === current) link.classList.add('active');
  });
}
/* END HEADER SCROLL */

/* ============================================================
   INTERSECTION OBSERVER
   Triggers fade-in animations as elements scroll into view
   ============================================================ */
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}
/* END INTERSECTION OBSERVER */

/* ============================================================
   PRODUCT CARDS RENDERING
   Renders default product showcase cards in compare section
   ============================================================ */
function renderProductCards() {
  const container = document.getElementById('defaultProductCards');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<div class="pc-badge ${p.badge}">${p.badgeLabel}</div>` : ''}
      <div class="pc-icon">${p.icon}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-brand">${p.brand}</div>
      <div class="pc-price">${p.priceFormatted}</div>
      <div class="pc-specs">
        <div class="pc-spec"><span>Processor</span><span>${p.processor}</span></div>
        <div class="pc-spec"><span>RAM</span><span>${p.ram}</span></div>
        <div class="pc-spec"><span>Storage</span><span>${p.storage}</span></div>
        <div class="pc-spec"><span>Battery</span><span>${p.battery}</span></div>
      </div>
      <div class="pc-rating">
        <span class="pc-stars">${getStarsHTML(p.rating)}</span>
        <span class="pc-rcount">(${p.ratingCount.toLocaleString()})</span>
      </div>
      <div class="pc-actions">
        <button class="pc-btn primary" onclick="openDetailsModal(${p.id})">View Details</button>
        <button class="pc-btn outline" onclick="openProductPicker(null, ${p.id})">Compare</button>
      </div>
    </div>
  `).join('');
}

function getStarsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
/* END PRODUCT CARDS */

/* ============================================================
   PRODUCT DETAILS MODAL
   Opens a rich details popup for a selected product
   ============================================================ */
function openDetailsModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const content = document.getElementById('detailsModalContent');
  content.innerHTML = `
    <div class="dm-header">
      <div class="dm-icon">${p.icon}</div>
      <div class="dm-title-area">
        <div class="dm-name">${p.name}</div>
        <div class="dm-brand">by ${p.brand}</div>
        <div class="dm-price-row">
          <span class="dm-price">${p.priceFormatted}</span>
          <span class="dm-stars">${'★'.repeat(Math.floor(p.rating))}</span>
          <span class="dm-rating-count">${p.rating}/5 (${p.ratingCount.toLocaleString()} reviews)</span>
        </div>
      </div>
    </div>

    <div class="dm-tabs">
      <button class="dm-tab active" onclick="switchDetailTab('specs', this)">Specifications</button>
      <button class="dm-tab" onclick="switchDetailTab('performance', this)">Performance</button>
      <button class="dm-tab" onclick="switchDetailTab('recommendation', this)">Buying Guide</button>
      <button class="dm-tab" onclick="switchDetailTab('stores', this)">Buy Now</button>
    </div>

    <!-- SPECIFICATIONS TAB -->
    <div class="dm-tab-content active" id="dm-specs">
      <h4 style="font-family:'Syne',sans-serif;margin-bottom:16px;font-size:1rem;">Full Specifications</h4>
      <div class="dm-specs-grid">
        <div class="dm-spec-row"><span>Display</span><span>${p.display}</span></div>
        <div class="dm-spec-row"><span>Processor</span><span>${p.processor}</span></div>
        <div class="dm-spec-row"><span>RAM</span><span>${p.ram}</span></div>
        <div class="dm-spec-row"><span>Storage</span><span>${p.storage}</span></div>
        <div class="dm-spec-row"><span>Camera</span><span>${p.camera}</span></div>
        <div class="dm-spec-row"><span>Battery</span><span>${p.battery}</span></div>
        <div class="dm-spec-row"><span>Operating System</span><span>${p.os}</span></div>
        <div class="dm-spec-row"><span>Connectivity</span><span>${p.connectivity}</span></div>
        <div class="dm-spec-row"><span>Build Quality</span><span>${p.build}</span></div>
        <div class="dm-spec-row"><span>Benchmark Score</span><span>${p.benchmarkScore}/100</span></div>
      </div>
    </div>

    <!-- PERFORMANCE TAB -->
    <div class="dm-tab-content" id="dm-performance">
      <h4 style="font-family:'Syne',sans-serif;margin-bottom:20px;font-size:1rem;">Performance Analysis</h4>
      <div class="perf-bars">
        <div class="perf-bar-row">
          <div class="pbr-label"><span>Overall Benchmark</span><span>${p.benchmarkScore}/100</span></div>
          <div class="pbr-track"><div class="pbr-fill" style="width:${p.benchmarkScore}%"></div></div>
        </div>
        ${p.gamingPerf > 0 ? `<div class="perf-bar-row">
          <div class="pbr-label"><span>Gaming Performance</span><span>${p.gamingPerf}/100</span></div>
          <div class="pbr-track"><div class="pbr-fill" style="width:${p.gamingPerf}%"></div></div>
        </div>` : ''}
        ${p.cameraPerf > 0 ? `<div class="perf-bar-row">
          <div class="pbr-label"><span>Camera Performance</span><span>${p.cameraPerf}/100</span></div>
          <div class="pbr-track"><div class="pbr-fill" style="width:${p.cameraPerf}%"></div></div>
        </div>` : ''}
        ${p.batteryPerf > 0 ? `<div class="perf-bar-row">
          <div class="pbr-label"><span>Battery Performance</span><span>${p.batteryPerf}/100</span></div>
          <div class="pbr-track"><div class="pbr-fill" style="width:${p.batteryPerf}%"></div></div>
        </div>` : ''}
      </div>
    </div>

    <!-- BUYING GUIDE TAB -->
    <div class="dm-tab-content" id="dm-recommendation">
      <h4 style="font-family:'Syne',sans-serif;margin-bottom:16px;font-size:1rem;">Best For</h4>
      <div class="dm-best-for">${p.bestFor.map(b => `<div class="bf-tag"><i class="fa-solid fa-check"></i> ${b}</div>`).join('')}</div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
        <div>
          <h5 style="color:var(--green);margin-bottom:10px;font-size:0.85rem;">✓ Pros</h5>
          <ul style="display:flex;flex-direction:column;gap:6px;">
            ${p.pros.map(pro => `<li style="font-size:0.84rem;color:var(--text-muted);padding-left:16px;position:relative;"><span style="position:absolute;left:0;color:var(--green);">✓</span>${pro}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h5 style="color:var(--red);margin-bottom:10px;font-size:0.85rem;">✗ Cons</h5>
          <ul style="display:flex;flex-direction:column;gap:6px;">
            ${p.cons.map(con => `<li style="font-size:0.84rem;color:var(--text-muted);padding-left:16px;position:relative;"><span style="position:absolute;left:0;color:var(--red);">✗</span>${con}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="dm-verdict">
        <h4><i class="fa-solid fa-star"></i> Expert Verdict</h4>
        <p>${p.verdict}</p>
      </div>

      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:0.85rem;color:var(--text-dim);">Overall Rating:</span>
        <span style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;color:var(--blue-light);">${p.rating}/5</span>
        <span style="color:#f59e0b;">${'★'.repeat(Math.floor(p.rating))}</span>
      </div>
    </div>

    <!-- STORES / BUY NOW TAB -->
    <div class="dm-tab-content" id="dm-stores">
      <h4 style="font-family:'Syne',sans-serif;margin-bottom:16px;font-size:1rem;">Where to Buy in Nepal</h4>
      <div class="dm-stores">
        ${p.stores.map(s => `
          <div class="dm-store-row">
            <div class="dsr-name">${s.name}</div>
            <div class="dsr-avail ${s.available ? 'in' : 'out'}">${s.available ? 'In Stock' : 'Out of Stock'}</div>
            <div class="dsr-price">${s.price}</div>
            <button class="dsr-buy" onclick="handleBuyClick('${s.name}','${p.name}')" ${!s.available ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
              ${s.available ? 'Buy Now' : 'Unavailable'}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  openModal('detailsModal');
}

function handleBuyClick(store, product) {
  showToast(`Opening ${store} for ${product}...`, 'info');
}

function switchDetailTab(tabName, btn) {
  document.querySelectorAll('.dm-tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dm-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById(`dm-${tabName}`);
  if (el) el.classList.add('active');
  if (btn) btn.classList.add('active');
}

function closeDetailsModal(e) {
  if (e && e.target !== document.getElementById('detailsModal')) return;
  if (!e) closeModal('detailsModal');
  else closeModal('detailsModal');
}
/* END PRODUCT DETAILS MODAL */

/* ============================================================
   PRODUCT PICKER MODAL
   Lets users pick products for comparison slots
   ============================================================ */
let activePickerSlot = null;
let selectedProducts = [null, null, null];

function initPickerList() {
  renderPickerList(PRODUCTS);
}

function openProductPicker(slot, preSelectId) {
  activePickerSlot = slot || 1;
  if (preSelectId) {
    const found = selectedProducts.indexOf(null);
    if (found !== -1) {
      activePickerSlot = found + 1;
    }
  }
  renderPickerList(PRODUCTS);
  openModal('productPickerModal');
}

function closeProductPicker(e) {
  if (e && e.target !== document.getElementById('productPickerModal')) return;
  closeModal('productPickerModal');
}

function filterPickerProducts() {
  const q = document.getElementById('pickerSearchInput').value.toLowerCase();
  const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  renderPickerList(filtered);
}

function renderPickerList(products) {
  const list = document.getElementById('pickerList');
  if (!list) return;
  list.innerHTML = products.map(p => `
    <div class="picker-item" onclick="selectProduct(${p.id})">
      <div class="pi-icon">${p.icon}</div>
      <div class="pi-info">
        <div class="pi-name">${p.name}</div>
        <div class="pi-price">${p.priceFormatted}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="color:var(--text-dim);font-size:0.8rem;"></i>
    </div>
  `).join('');
}

function selectProduct(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !activePickerSlot) return;

  selectedProducts[activePickerSlot - 1] = p;
  renderCompareSlot(activePickerSlot, p);
  closeModal('productPickerModal');

  const filledCount = selectedProducts.filter(Boolean).length;
  if (filledCount >= 2) {
    buildCompareTable();
    showToast('Comparison table updated!', 'success');
  }
}

function renderCompareSlot(slot, product) {
  const container = document.getElementById(`compareSlot${slot}`);
  if (!container) return;
  container.classList.add('has-product');
  container.innerHTML = `
    <div class="csc-product">
      <div class="csp-icon">${product.icon}</div>
      <div class="csp-name">${product.name}</div>
      <div class="csp-price">${product.priceFormatted}</div>
      <button class="csp-remove" onclick="removeCompareProduct(${slot})">✕ Remove</button>
    </div>
  `;
}

function removeCompareProduct(slot) {
  selectedProducts[slot - 1] = null;
  const container = document.getElementById(`compareSlot${slot}`);
  container.classList.remove('has-product');
  container.innerHTML = `
    <div class="csc-placeholder" onclick="openProductPicker(${slot})">
      <i class="fa-solid fa-plus"></i>
      <span>Add Product ${slot}</span>
    </div>
  `;
  const filled = selectedProducts.filter(Boolean);
  if (filled.length < 2) {
    document.getElementById('compareTableWrapper').style.display = 'none';
    document.getElementById('defaultProductCards').style.display = 'grid';
  } else {
    buildCompareTable();
  }
}

function buildCompareTable() {
  const products = selectedProducts.filter(Boolean);
  if (products.length < 2) return;

  document.getElementById('defaultProductCards').style.display = 'none';
  document.getElementById('compareTableWrapper').style.display = 'block';

  const specs = ['Price','Processor','RAM','Storage','Battery','Camera','Display','OS','Build','Rating','Benchmark'];
  const specMap = {
    'Price': p => p.priceFormatted,
    'Processor': p => p.processor,
    'RAM': p => p.ram,
    'Storage': p => p.storage,
    'Battery': p => p.battery,
    'Camera': p => p.camera,
    'Display': p => p.display,
    'OS': p => p.os,
    'Build': p => p.build,
    'Rating': p => `${p.rating}/5 ⭐`,
    'Benchmark': p => `${p.benchmarkScore}/100`
  };

  // Find best product for each category
  const bestPrice = products.reduce((a,b) => a.price < b.price ? a : b);
  const bestPerf  = products.reduce((a,b) => a.benchmarkScore > b.benchmarkScore ? a : b);
  const bestRating = products.reduce((a,b) => a.rating > b.rating ? a : b);

  const thead = document.getElementById('compareTableHead');
  const tbody = document.getElementById('compareTableBody');

  thead.innerHTML = `<tr>
    <th>Specification</th>
    ${products.map(p => `
      <th>
        <div style="font-size:1.5rem;margin-bottom:6px;">${p.icon}</div>
        <div>${p.name}</div>
        <div style="font-size:0.75rem;color:var(--text-dim);font-weight:400;margin-top:4px;">${p.brand}</div>
        ${p.id === bestPrice.id ? '<div class="tag-best">Best Value</div>' : ''}
        ${p.id === bestPerf.id ? '<div class="tag-perf">Best Performance</div>' : ''}
        ${p.id === bestRating.id && p.id !== bestPerf.id ? '<div class="tag-budget">Top Rated</div>' : ''}
      </th>
    `).join('')}
  </tr>`;

  tbody.innerHTML = specs.map(spec => `
    <tr>
      <td>${spec}</td>
      ${products.map(p => {
        const val = specMap[spec](p);
        const isBest = (spec === 'Price' && p.id === bestPrice.id) ||
                       (spec === 'Benchmark' && p.id === bestPerf.id) ||
                       (spec === 'Rating' && p.id === bestRating.id);
        return `<td class="${isBest ? 'best-cell' : ''}">${val}</td>`;
      }).join('')}
    </tr>
  `).join('');
}
/* END PRODUCT PICKER */

/* ============================================================
   PRICE TRACKER CHART
   Interactive Chart.js price history chart with tab switching
   ============================================================ */
let priceChart = null;
let currentChartType = 'daily';

const CHART_LABELS = {
  daily:   ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  weekly:  ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'],
  monthly: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
  yearly:  ['2020','2021','2022','2023','2024','2025','2026']
};

function initPriceChart() {
  const ctx = document.getElementById('priceChart');
  if (!ctx) return;

  const product = PRODUCTS[0];
  const data = product.priceHistory[currentChartType];

  priceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: CHART_LABELS[currentChartType],
      datasets: [{
        label: 'Price (Rs.)',
        data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.08)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a2744',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleColor: '#fff',
          bodyColor: '#94a3b8',
          padding: 12,
          callbacks: {
            label: ctx => `Rs. ${ctx.parsed.y.toLocaleString()}`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: {
            color: '#64748b',
            font: { size: 11 },
            callback: val => `Rs.${(val/1000).toFixed(0)}k`
          }
        }
      }
    }
  });

  updateProductStats(PRODUCTS[0]);
  renderStorePrices(PRODUCTS[0]);
}

function updatePriceChart() {
  const idx = parseInt(document.getElementById('trackerProductSelect').value);
  const product = PRODUCTS[idx];
  updateChartData(product, currentChartType);
  updateProductStats(product);
  renderStorePrices(product);
}

function switchChartTab(type, btn) {
  currentChartType = type;
  document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const idx = parseInt(document.getElementById('trackerProductSelect').value);
  updateChartData(PRODUCTS[idx], type);
}

function updateChartData(product, type) {
  if (!priceChart) return;
  priceChart.data.labels   = CHART_LABELS[type];
  priceChart.data.datasets[0].data = product.priceHistory[type];
  priceChart.update('active');
}

function updateProductStats(product) {
  document.getElementById('statCurrent').textContent = product.stats.current;
  document.getElementById('statLow').textContent     = product.stats.low;
  document.getElementById('statHigh').textContent    = product.stats.high;
  document.getElementById('statAvg').textContent     = product.stats.avg;
}

function renderStorePrices(product) {
  const container = document.getElementById('storePriceList');
  if (!container) return;
  container.innerHTML = product.storePrices.map(s => `
    <div class="spl-item">
      <span class="spl-store">🏪 ${s.store}</span>
      <span class="spl-avail ${s.available ? 'in' : 'out'}">${s.available ? 'In Stock' : 'Out of Stock'}</span>
      <span class="spl-price">${s.price}</span>
      <button class="spl-btn" onclick="showToast('Opening ${s.store}...', 'info')">Buy</button>
    </div>
  `).join('');
}
/* END PRICE TRACKER */

/* ============================================================
   SENTIMENT DONUT CHART
   ============================================================ */
window.addEventListener('load', () => {
  const ctx = document.getElementById('sentimentChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [74, 16, 10],
        backgroundColor: ['#22c55e', '#64748b', '#ef4444'],
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: {
        callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed}%` }
      }},
      responsive: true,
      maintainAspectRatio: true
    }
  });
});
/* END SENTIMENT CHART */

/* ============================================================
   REVIEWS RENDERING
   Renders expert, user, and community reviews dynamically
   ============================================================ */
function renderReviews(type = 'expert') {
  const reviews = REVIEWS[type] || REVIEWS.expert;
  const container = document.getElementById('reviewCardsArea');
  if (!container) return;

  container.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="rc-header">
        <div class="rc-avatar" style="background:${r.avatarColor}20;color:${r.avatarColor};">${r.avatar}</div>
        <div class="rc-info">
          <div class="rc-name">${r.name}</div>
          <div class="rc-meta">
            <span class="rc-stars">${'★'.repeat(r.stars)}</span>
            <span>${r.role}</span>
            <span class="nm-dot"></span>
            <span>${r.date}</span>
            <span class="rc-product-tag">${r.product}</span>
          </div>
        </div>
        <div class="rc-score">${r.score}</div>
      </div>
      <div class="rc-body">
        <p>${r.text}</p>
        <div class="rc-proscons">
          <div class="rc-pros"><h5>✓ Pros</h5><ul>${r.pros.map(p => `<li>${p}</li>`).join('')}</ul></div>
          <div class="rc-cons"><h5>✗ Cons</h5><ul>${r.cons.map(c => `<li>${c}</li>`).join('')}</ul></div>
        </div>
      </div>
    </div>
  `).join('');
}

function switchReviewTab(type, btn) {
  document.querySelectorAll('.rev-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderReviews(type);
}
/* END REVIEWS */

/* ============================================================
   SOCIAL OPINIONS RENDERING
   ============================================================ */
function renderSocialOpinions(platform = 'reddit') {
  const opinions = SOCIAL_OPINIONS[platform] || [];
  const container = document.getElementById('opinionCards');
  if (!container) return;

  const icons = { reddit: '🔴', twitter: '🐦', youtube: '▶️' };

  container.innerHTML = opinions.map(o => `
    <div class="opinion-card">
      <div class="oc-header">
        <span class="oc-platform-icon">${icons[platform]}</span>
        <span class="oc-user">${o.user}</span>
        <span class="oc-time">${o.time}</span>
        <span class="oc-sentiment ${o.sentiment}">${o.sentiment === 'pos' ? '😊 Positive' : o.sentiment === 'neg' ? '😞 Negative' : '😐 Neutral'}</span>
      </div>
      <div class="oc-text">${o.text}</div>
      <div class="oc-upvotes"><i class="fa-solid fa-thumbs-up"></i> ${o.upvotes.toLocaleString()} upvotes</div>
    </div>
  `).join('');
}

function switchOpinionTab(platform, btn) {
  document.querySelectorAll('.op-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderSocialOpinions(platform);
}
/* END SOCIAL OPINIONS */

/* ============================================================
   BUDGET CALCULATORS
   Electronics and automobile total cost calculators
   ============================================================ */
function switchBudgetTab(type, btn) {
  document.querySelectorAll('.budget-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('electronicsCalc').classList.toggle('hidden', type !== 'electronics');
  document.getElementById('automobileCalc').classList.toggle('hidden', type !== 'automobile');
}

function calcElectronics() {
  const price    = parseFloat(document.getElementById('elProductPrice').value) || 0;
  const acc      = parseFloat(document.getElementById('elAccessories').value) || 0;
  const warranty = parseFloat(document.getElementById('elWarranty').value) || 0;
  const upgrades = parseFloat(document.getElementById('elUpgrades').value) || 0;
  const total    = price + acc + warranty + upgrades;

  document.getElementById('elTotal').textContent = `Rs. ${total.toLocaleString()}`;
  document.getElementById('elBreakdown').innerHTML = `
    <div class="cr-line"><span>Product Price</span><span>Rs. ${price.toLocaleString()}</span></div>
    <div class="cr-line"><span>Accessories</span><span>Rs. ${acc.toLocaleString()}</span></div>
    <div class="cr-line"><span>Warranty / Insurance</span><span>Rs. ${warranty.toLocaleString()}</span></div>
    <div class="cr-line"><span>Expected Upgrades</span><span>Rs. ${upgrades.toLocaleString()}</span></div>
  `;
}

function calcAutomobile() {
  const price    = parseFloat(document.getElementById('autoPrice').value) || 0;
  const down     = parseFloat(document.getElementById('autoDown').value) || 0;
  const months   = parseFloat(document.getElementById('autoMonths').value) || 36;
  const fuel     = parseFloat(document.getElementById('autoFuel').value) || 0;
  const insurance = parseFloat(document.getElementById('autoInsurance').value) || 0;
  const maint    = parseFloat(document.getElementById('autoMaint').value) || 0;

  const loanAmount = price - down;
  const rate = 0.10 / 12; // 10% annual interest
  const emi = rate > 0 ? (loanAmount * rate * Math.pow(1+rate, months)) / (Math.pow(1+rate, months) - 1) : loanAmount / months;
  const totalEmi = emi * months;
  const totalFuel = fuel * 36;
  const totalInsurance = insurance * 3;
  const totalMaint = maint * 3;
  const total = down + totalEmi + totalFuel + totalInsurance + totalMaint;

  document.getElementById('autoTotal').textContent = `Rs. ${Math.round(total).toLocaleString()}`;
  document.getElementById('autoBreakdown').innerHTML = `
    <div class="cr-line"><span>Down Payment</span><span>Rs. ${down.toLocaleString()}</span></div>
    <div class="cr-line"><span>Total EMI (${months} months)</span><span>Rs. ${Math.round(totalEmi).toLocaleString()}</span></div>
    <div class="cr-line"><span>Monthly EMI</span><span>Rs. ${Math.round(emi).toLocaleString()}</span></div>
    <div class="cr-line"><span>Fuel Cost (3 yrs)</span><span>Rs. ${totalFuel.toLocaleString()}</span></div>
    <div class="cr-line"><span>Insurance (3 yrs)</span><span>Rs. ${totalInsurance.toLocaleString()}</span></div>
    <div class="cr-line"><span>Maintenance (3 yrs)</span><span>Rs. ${totalMaint.toLocaleString()}</span></div>
  `;
}
/* END BUDGET CALCULATORS */

/* ============================================================
   RECOMMENDATIONS ENGINE
   Filters products based on budget/category/use-case
   ============================================================ */
function getRecommendations() {
  const budget  = parseFloat(document.getElementById('afBudget').value) || 999999;
  const cat     = document.getElementById('afCategory').value;
  const brand   = document.getElementById('afBrand').value.toLowerCase();
  const useCase = document.getElementById('afUseCase').value;

  // Filter and sort products
  let filtered = PRODUCTS.filter(p => {
    const catMatch = p.category === cat || cat === 'all';
    const budgetMatch = p.price <= budget;
    const brandMatch = !brand || p.brand.toLowerCase().includes(brand);
    return catMatch && budgetMatch && brandMatch;
  });

  if (filtered.length === 0) {
    // Relax category filter
    filtered = PRODUCTS.filter(p => p.price <= budget * 1.3).slice(0, 3);
    if (filtered.length === 0) {
      filtered = PRODUCTS.slice(0, 3);
    }
  }

  // Sort by relevance
  filtered.sort((a, b) => b.rating - a.rating);

  const top    = filtered.slice(0,1);
  const value  = filtered.filter(p => p.badge === 'value' || p.badge === 'budget').slice(0,1);
  const premium = filtered.filter(p => p.badge === 'perf').slice(0,1);

  const container = document.getElementById('assistantResults');
  container.innerHTML = `
    <div class="rec-category">
      <div class="rec-cat-label"><i class="fa-solid fa-trophy" style="color:var(--green);"></i> Top Pick</div>
      <div class="rec-cards">${renderRecCards(top)}</div>
    </div>
    ${value.length ? `<div class="rec-category">
      <div class="rec-cat-label"><i class="fa-solid fa-tag" style="color:var(--orange);"></i> Value Pick</div>
      <div class="rec-cards">${renderRecCards(value)}</div>
    </div>` : ''}
    ${premium.length ? `<div class="rec-category">
      <div class="rec-cat-label"><i class="fa-solid fa-gem" style="color:var(--blue-light);"></i> Premium Pick</div>
      <div class="rec-cards">${renderRecCards(premium)}</div>
    </div>` : ''}
  `;

  showToast(`Found ${filtered.length} products matching your criteria!`, 'success');
}

function renderRecCards(products) {
  return products.map(p => `
    <div class="rec-card" onclick="openDetailsModal(${p.id})">
      <div class="rec-icon">${p.icon}</div>
      <div class="rec-info">
        <div class="rec-name">${p.name}</div>
        <div class="rec-why">${p.pros[0]} · ${p.rating}★ rating</div>
      </div>
      <div class="rec-price">${p.priceFormatted}</div>
    </div>
  `).join('');
}
/* END RECOMMENDATIONS */

/* ============================================================
   DEALS RENDERING
   Flash sale and price drop deal cards with countdown timers
   ============================================================ */
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  if (!grid) return;

  grid.innerHTML = DEALS.map((deal, i) => `
    <div class="deal-card">
      <div class="deal-discount">-${deal.discount}%</div>
      <div class="deal-type-badge ${deal.type}">${deal.typeLabel}</div>
      <div class="deal-icon">${deal.icon}</div>
      <div class="deal-name">${deal.name}</div>
      <div class="deal-store">at ${deal.store}</div>
      <div class="deal-prices">
        <span class="deal-current">Rs. ${deal.currentPrice.toLocaleString()}</span>
        <span class="deal-original">Rs. ${deal.originalPrice.toLocaleString()}</span>
      </div>
      <div class="countdown" id="countdown-${i}">
        <span class="countdown-label">Ends in:</span>
        <span class="countdown-unit" id="cd-h-${i}">${String(deal.hours).padStart(2,'0')}</span>
        <span class="countdown-sep">:</span>
        <span class="countdown-unit" id="cd-m-${i}">${String(deal.minutes).padStart(2,'0')}</span>
        <span class="countdown-sep">:</span>
        <span class="countdown-unit" id="cd-s-${i}">${String(deal.seconds).padStart(2,'0')}</span>
      </div>
      <button class="deal-btn" onclick="showToast('Opening deal for ${deal.name}...', 'info')">Grab Deal →</button>
    </div>
  `).join('');
}

/* Countdown timer logic for each deal card */
function initCountdowns() {
  // Store remaining seconds for each deal
  const timers = DEALS.map(d => d.hours * 3600 + d.minutes * 60 + d.seconds);

  setInterval(() => {
    timers.forEach((secs, i) => {
      if (timers[i] <= 0) {
        document.getElementById(`cd-h-${i}`).textContent = '00';
        document.getElementById(`cd-m-${i}`).textContent = '00';
        document.getElementById(`cd-s-${i}`).textContent = '00';
        return;
      }
      timers[i]--;
      const h = Math.floor(timers[i] / 3600);
      const m = Math.floor((timers[i] % 3600) / 60);
      const s = timers[i] % 60;
      const hEl = document.getElementById(`cd-h-${i}`);
      const mEl = document.getElementById(`cd-m-${i}`);
      const sEl = document.getElementById(`cd-s-${i}`);
      if (hEl) hEl.textContent = String(h).padStart(2,'0');
      if (mEl) mEl.textContent = String(m).padStart(2,'0');
      if (sEl) sEl.textContent = String(s).padStart(2,'0');
    });
  }, 1000);
}
/* END DEALS */

/* ============================================================
   NEWS RENDERING
   ============================================================ */
function renderNews(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const filtered = filter === 'all' ? NEWS : NEWS.filter(n => n.cat === filter);

  grid.innerHTML = filtered.map((n, i) => `
    <div class="news-card" onclick="showToast('Opening article: ${n.title.substring(0,40)}...', 'info')">
      <div class="news-thumb" style="background:${n.gradient};">
        <span class="nc-cat-badge ${n.cat}">${n.cat.charAt(0).toUpperCase() + n.cat.slice(1)}</span>
        ${n.icon}
      </div>
      <div class="news-body">
        <div class="news-title">${n.title}</div>
        <div class="news-excerpt">${n.excerpt}</div>
        <div class="news-meta">
          <span>${n.date}</span>
          <span class="nm-dot"></span>
          <span>${n.readTime}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterNews(cat, btn) {
  document.querySelectorAll('.news-cat').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderNews(cat);
}
/* END NEWS */

/* ============================================================
   BLOG RENDERING
   ============================================================ */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  grid.innerHTML = BLOGS.map(b => `
    <div class="blog-card" onclick="window.location.href='${b.link}'">
      <div class="blog-thumb" style="background:${b.gradient};">
        <span class="bc-tag">${b.tag}</span>
        ${b.icon}
      </div>
      <div class="blog-body">
        <div class="blog-title">${b.title}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <div class="blog-meta">
          <span>✍️ ${b.author}</span>
          <span>·</span>
          <span>${b.date}</span>
          <span>·</span>
          <span>${b.readTime} read</span>
        </div>
        <div class="blog-read-more">Read Article <i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </div>
  `).join('');
}
/* END BLOG */

/* ============================================================
   COUNTER ANIMATIONS
   Animates stat numbers in the About section
   ============================================================ */
function initCounterAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + (progress < 1 ? '' : '+');
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
/* END COUNTER */

/* ============================================================
   SEARCH FUNCTIONALITY
   Header search and main search bar with autocomplete
   ============================================================ */
const SEARCH_SUGGESTIONS = [
  'iPhone 16 Pro', 'Samsung Galaxy S25', 'MacBook Air M3', 'Yamaha R15 V4',
  'Redmi Note 14 Pro', 'Sony Bravia 55" 4K', 'Dell XPS 15', 'HP Envy x360',
  'Apple Watch Series 10', 'PS5 Slim', 'AirPods Pro 2', 'OnePlus 13'
];
let recentSearches = JSON.parse(localStorage.getItem('explorez_recent') || '[]');

function initHeaderSearch() {
  const input = document.getElementById('headerSearchInput');
  const dropdown = document.getElementById('headerSearchDropdown');

  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    if (!q) { dropdown.classList.remove('open'); return; }
    const matches = SEARCH_SUGGESTIONS.filter(s => s.toLowerCase().includes(q)).slice(0,5);
    dropdown.innerHTML = matches.map(s => `<div class="sd-item" onclick="headerSearchSelect('${s}')"><i class="fa-solid fa-magnifying-glass"></i> ${s}</div>`).join('');
    dropdown.classList.toggle('open', matches.length > 0);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { headerSearchSelect(input.value); }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target)) dropdown.classList.remove('open');
  });
}

function headerSearchSelect(term) {
  document.getElementById('headerSearchInput').value = term;
  document.getElementById('headerSearchDropdown').classList.remove('open');
  performMainSearch(term);
  showToast(`Searching for "${term}"...`, 'info');
}

function initMainSearch() {
  const input = document.getElementById('mainSearchInput');
  const ac    = document.getElementById('mainAutoComplete');

  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    if (!q) { ac.classList.remove('open'); return; }
    const matches = SEARCH_SUGGESTIONS.filter(s => s.toLowerCase().includes(q)).slice(0,6);
    ac.innerHTML = matches.map(s => `<div class="sd-item" onclick="fillSearch('${s}')"><i class="fa-solid fa-magnifying-glass"></i> ${s}</div>`).join('');
    ac.classList.toggle('open', matches.length > 0);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') performSearch();
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target)) ac.classList.remove('open');
  });

  renderRecentSearches();
}

function fillSearch(term) {
  const input = document.getElementById('mainSearchInput');
  if (input) input.value = term;
  document.getElementById('mainAutoComplete').classList.remove('open');
}

function performSearch() {
  const term = document.getElementById('mainSearchInput').value.trim();
  if (!term) return;
  performMainSearch(term);
}

function performMainSearch(term) {
  // Add to recent searches
  recentSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0,5);
  try { localStorage.setItem('explorez_recent', JSON.stringify(recentSearches)); } catch(e) {}
  renderRecentSearches();

  // Scroll to compare with matched product
  const match = PRODUCTS.find(p => p.name.toLowerCase().includes(term.toLowerCase()));
  if (match) {
    scrollToSection('compare');
    showToast(`Found: ${match.name} — View Details below`, 'success');
  } else {
    scrollToSection('compare');
    showToast(`Showing all products for "${term}"`, 'info');
  }
}

function renderRecentSearches() {
  const container = document.getElementById('recentSearches');
  if (!container) return;
  if (!recentSearches.length) { container.style.display = 'none'; return; }
  container.style.display = 'flex';
  container.innerHTML = `<span class="tag-label">Recent:</span>` +
    recentSearches.map(s => `<button class="search-tag" onclick="fillSearch('${s}')">${s}</button>`).join('');
}
/* END SEARCH */

/* ============================================================
   MODAL OPEN/CLOSE UTILITIES
   ============================================================ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
/* END MODALS */

/* ============================================================
   AUTH MODALS
   ============================================================ */
function openLoginModal() { openModal('loginModal'); }
function closeLoginModal(e) {
  if (e && e.target !== document.getElementById('loginModal')) return;
  closeModal('loginModal');
}

function openSignupModal() { openModal('signupModal'); }
function closeSignupModal(e) {
  if (e && e.target !== document.getElementById('signupModal')) return;
  closeModal('signupModal');
}

function switchToSignup() { closeModal('loginModal'); openModal('signupModal'); }
function switchToLogin()  { closeModal('signupModal'); openModal('loginModal'); }

function handleLogin() {
  showToast('Login successful! Welcome back.', 'success');
  closeModal('loginModal');
}
function handleSignup() {
  showToast('Account created! Welcome to EXPLOREZ.', 'success');
  closeModal('signupModal');
}
/* END AUTH */

/* ============================================================
   TOAST NOTIFICATION SYSTEM
   Shows temporary toast messages to the user
   ============================================================ */
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = '0.35s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    setTimeout(() => toast.remove(), 350);
  }, duration);
}
/* END TOAST */

/* ============================================================
   MOBILE MENU
   Toggle hamburger nav on mobile
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (nav.classList.contains('open')) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}
/* END MOBILE MENU */

/* ============================================================
   BACK TO TOP BUTTON
   Shows/hides based on scroll position
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
}
/* END BACK TO TOP */

/* ============================================================
   KEYBOARD SHORTCUTS
   ESC key closes any open modals
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['detailsModal','loginModal','signupModal','productPickerModal'].forEach(id => closeModal(id));
  }
});
/* END KEYBOARD */