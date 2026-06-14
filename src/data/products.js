import Img1 from "../assets/product/p-1.jpg";
import Img2 from "../assets/product/p-2.jpg";
import Img3 from "../assets/product/p-3.jpg";
import Img4 from "../assets/product/p-4.jpg";
import Img5 from "../assets/product/p-5.jpg";
import Img6 from "../assets/product/p-6.jpg";
import Img7 from "../assets/product/p-7.jpg";

import headphoneImg from "../assets/hero/headphone.png";
import vrImg from "../assets/category/vr.png";
import macbookImg from "../assets/category/macbook.png";
import watchImg from "../assets/category/watch2.png";
import speakerImg from "../assets/category/speaker.png";

export const ShopProducts = [
  {
    id: 1,
    name: "Boat Bassheads",
    price: 120,
    category: "Headphones",
    img: Img1,
    rating: 4.5,
    isNew: true,
    isTrending: true,
    isBestSelling: false,
    description: "Experience high-fidelity bass with the Boat Bassheads. Designed for comfort and engineered for power, these headphones deliver punchy audio for all your needs.",
    specs: {
      driver: "40mm Dynamic",
      frequency: "20Hz - 20kHz",
      battery: "Up to 20 hours",
      connectivity: "Bluetooth 5.0 / Aux"
    }
  },
  {
    id: 2,
    name: "Rocky Mountain Smartwatch",
    price: 420,
    category: "Smartwatch",
    img: Img2,
    rating: 4.8,
    isNew: false,
    isTrending: false,
    isBestSelling: true,
    description: "Track your fitness, notifications, and vital metrics on the go. Designed with a premium stainless steel frame and long-lasting battery life.",
    specs: {
      display: "1.43\" AMOLED",
      sensors: "Heart Rate, SpO2, Sleep Tracker",
      battery: "Up to 7 days",
      waterproof: "IP68 Certified"
    }
  },
  {
    id: 3,
    name: "Gamer Elite Edition",
    price: 320,
    category: "Headphones",
    img: Img3,
    rating: 4.2,
    isNew: true,
    isTrending: false,
    isBestSelling: false,
    description: "Get the competitive edge. Custom-tuned spatial audio lets you locate enemies with pinpoint precision, while the memory foam cushions provide long-term comfort.",
    specs: {
      surround: "7.1 Virtual Surround",
      mic: "Detachable Noise-Cancelling",
      weight: "280g",
      compatibility: "PC, PS5, Xbox, Switch"
    }
  },
  {
    id: 4,
    name: "Wireless VR Virtual Pro",
    price: 590,
    category: "VR Headsets",
    img: vrImg,
    rating: 4.9,
    isNew: true,
    isTrending: true,
    isBestSelling: false,
    description: "Step into virtual worlds with standalone power. Micro-OLED displays offer breathtaking visuals with ultra-low latency tracking.",
    specs: {
      resolution: "2K per eye",
      refresh: "120Hz",
      tracking: "6DoF inside-out",
      storage: "128GB / 256GB"
    }
  },
  {
    id: 5,
    name: "Zenith Laptop Air",
    price: 1290,
    category: "Laptops",
    img: macbookImg,
    rating: 4.7,
    isNew: false,
    isTrending: false,
    isBestSelling: true,
    description: "The ultimate laptop for creators. Unleash extreme performance with all-day battery life in a sleek, lightweight aluminum body.",
    specs: {
      processor: "Next-Gen 8-Core",
      ram: "16GB Unified",
      storage: "512GB NVMe SSD",
      display: "13.6\" Liquid Retina"
    }
  },
  {
    id: 6,
    name: "Sonic Boom 360",
    price: 150,
    category: "Speakers",
    img: speakerImg,
    rating: 4.4,
    isNew: false,
    isTrending: false,
    isBestSelling: false,
    description: "Fill the room with rich 360-degree acoustics. Portable, rugged, and waterproof, it is your ultimate travel music companion.",
    specs: {
      power: "30W Stereo",
      battery: "Up to 15 hours",
      waterproof: "IPX7 Waterproof",
      range: "100 ft Bluetooth"
    }
  },
  {
    id: 7,
    name: "Premium Solo Active Pro",
    price: 220,
    category: "Headphones",
    img: headphoneImg,
    rating: 4.6,
    isNew: false,
    isTrending: true,
    isBestSelling: false,
    description: "Acoustically tuned for active lifestyles. Built-in Active Noise Cancellation isolates you from your surroundings so you can focus on the sound.",
    specs: {
      anc: "Hybrid Active Noise Cancelling",
      battery: "Up to 35 hours (ANC on)",
      charging: "USB-C Fast Charging",
      weight: "220g"
    }
  },
  {
    id: 8,
    name: "Quantum Watch 2.0",
    price: 290,
    category: "Smartwatch",
    img: watchImg,
    rating: 4.3,
    isNew: true,
    isTrending: false,
    isBestSelling: true,
    description: "The sleek watch that monitors everything. From sleep stages to stress metrics, stay in sync with your health effortlessly.",
    specs: {
      display: "1.28\" Rounded Display",
      battery: "Up to 10 days",
      GPS: "Built-in GPS tracking",
      modes: "100+ Workout Modes"
    }
  },
  {
    id: 9,
    name: "Active Noise Cancelling V2",
    price: 180,
    category: "Headphones",
    img: Img4,
    rating: 4.5,
    isNew: false,
    isTrending: false,
    isBestSelling: false,
    description: "Enjoy your playlists without outside interruptions. Long-lasting wireless comfort with adjustable headband fit.",
    specs: {
      driver: "40mm Neodymium",
      anc: "Active Noise Isolation",
      battery: "Up to 25 hours",
      foldable: "Yes"
    }
  },
  {
    id: 10,
    name: "Deep Bass Earbuds",
    price: 80,
    category: "Headphones",
    img: Img5,
    rating: 4.1,
    isNew: false,
    isTrending: false,
    isBestSelling: false,
    description: "Ultra-compact true wireless earbuds offering immersive deep bass and seamless touch controls.",
    specs: {
      battery: "6h + 24h case",
      latency: "Low latency Gaming Mode",
      waterproof: "IPX4 sweat resistant",
      type: "True Wireless"
    }
  },
  {
    id: 11,
    name: "Retro Style Beats",
    price: 250,
    category: "Headphones",
    img: Img6,
    rating: 4.6,
    isNew: true,
    isTrending: true,
    isBestSelling: false,
    description: "Classic retro style meets modern wireless engineering. Experience premium acoustics in a nostalgic aesthetic.",
    specs: {
      design: "Retro On-Ear",
      material: "Premium leather and steel",
      battery: "Up to 30 hours",
      aux: "3.5mm input included"
    }
  },
  {
    id: 12,
    name: "Professional Studio Monitor",
    price: 350,
    category: "Headphones",
    img: Img7,
    rating: 4.9,
    isNew: false,
    isTrending: false,
    isBestSelling: true,
    description: "Engineered for music production, mixing, and critical listening. Offers a flat, neutral sound signature with maximum accuracy.",
    specs: {
      driver: "45mm Large-Aperture",
      magnet: "Rare Earth Neodymium",
      frequency: "5Hz - 40kHz",
      cables: "3 detachable cables included"
    }
  }
];
