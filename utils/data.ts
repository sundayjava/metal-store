
export const metals = [
  {
    id: 1,
    value: "gold",
  },
  {
    id: 2,
    value: "silver",
  },
  {
    id: 3,
    value: "platinum",
  },
  {
    id: 4,
    value: "palladium",
  },
];

export const footerItem = [
  {
    id: 1,
    label: "SHOP",
    values: [
      {
        id: 1,
        label: "Gold",
        url: "/en/buy/Gold",
      },
      {
        id: 2,
        label: "Silver",
        url: "/en/buy/Silver",
      },
      {
        id: 3,
        label: "Platinum",
        url: "/en/buy/Platinum",
      },
      {
        id: 4,
        label: "Palladium",
        url: "/en/buy/Palladium",
      },
    ],
  },
  {
    id: 2,
    label: "BUYING & SELLING",
    values: [
      {
        id: 4,
        label: "Storage solution",
        url: "/en/physical-gold-storage-switzerland",
      },
      {
        id: 5,
        label: "Pricing",
        url: "/en/Pricing",
      },
    ],
  },
  {
    id: 3,
    label: "KNOWLEDGE",
    values: [
      {
        id: 1,
        label: "Precious metal guide",
        url: "https://www.youtube.com/watch?v=uGXRCvrlZnE",
      },
      {
        id: 2,
        label: "Faq",
        url: "",
      },
      {
        id: 3,
        label: "Tutorial Video",
        url: "https://www.youtube.com/watch?v=uGXRCvrlZnE",
      },
    ],
  },
  {
    id: 4,
    label: "WHO ARE WE",
    values: [
      {
        id: 1,
        label: "About us",
        url: "/en/about-us",
      },
      {
        id: 3,
        label: "Contact us",
        url: "/en/about-us",
      },
    ],
  },
  {
    id: 5,
    label: "MY ACCOUNT",
    values: [
      {
        id: 3,
        label: "Storage fees",
        url: "/en/physical-gold-storage-switzerland",
      },
    ],
  },
];

export const category = [
  {
    id: 'gold',
    parent: 'gold',
    url: '/:language/productdetails',
    children: [
      {
        id: 'gold-bar',
        value: 'Gold bar',
        url: '/:language/productdetails',
        items: [
          { id: 'gold-bar-1', value: '1 gram', url: '' },
          { id: 'gold-bar-2', value: '100 gram', url: '' },
          { id: 'gold-bar-3', value: '5 gram', url: '' },
          { id: 'gold-bar-4', value: '10 gram', url: '' },
          { id: 'gold-bar-5', value: '1 kg', url: '' },
          { id: 'gold-bar-6', value: 'PAMP bars', url: '' },
          { id: 'gold-bar-7', value: '1 oz', url: '' },
          { id: 'gold-bar-8', value: '50 gram', url: '' },
        ],
      },
      {
        id: 'gold-coins',
        value: 'Gold coins',
        url: '/:language/productdetails',
        items: [
          { id: 'gold-coins-1', value: '1 oz', url: '' },
          { id: 'gold-coins-2', value: 'French Francs', url: '' },
          { id: 'gold-coins-3', value: 'Maple Leaf', url: '' },
          { id: 'gold-coins-4', value: 'Sovereign', url: '' },
          { id: 'gold-coins-5', value: 'Philharmonic', url: '' },
          { id: 'gold-coins-6', value: 'Britannia', url: '' },
          { id: 'gold-coins-7', value: 'Krugerrand', url: '' },
          { id: 'gold-coins-8', value: 'American Eagle', url: '' },
          { id: 'gold-coins-9', value: 'Vreneli', url: '' },
        ],
      },
      {
        id: 'gold-price',
        value: 'Gold Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'silver',
    parent: 'silver',
    url: '/:language/productdetails',
    children: [
      {
        id: 'silver-bar',
        value: 'Silver bar',
        url: '/:language/productdetails',
        items: [
          { id: 'silver-bar-1', value: '1 oz', url: '' },
          { id: 'silver-bar-2', value: '100 gram', url: '' },
          { id: 'silver-bar-3', value: '100 oz', url: '' },
          { id: 'silver-bar-4', value: '10 oz', url: '' },
          { id: 'silver-bar-5', value: '1 kg', url: '' },
          { id: 'silver-bar-6', value: 'PAMP bars', url: '' },
        ],
      },
      {
        id: 'silver-coins',
        value: 'Silver coins',
        url: '/:language/productdetails',
        items: [
          { id: 'silver-coins-1', value: '1 oz', url: '' },
          { id: 'silver-coins-2', value: 'Maple Leaf', url: '' },
          { id: 'silver-coins-3', value: 'Philharmonic', url: '' },
          { id: 'silver-coins-4', value: 'Britannia', url: '' },
        ],
      },
      {
        id: 'silver-price',
        value: 'Silver Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'platinum',
    parent: 'platinum',
    url: '/:language/productdetails',
    children: [
      {
        id: 'platinum-bar',
        value: 'Platinum bar',
        url: '/:language/productdetails',
        items: [{ id: 'platinum-bar-1', value: 'PAMP bars', url: '' }],
      },
      {
        id: 'platinum-coins',
        value: 'Platinum coins',
        url: '/:language/productdetails',
      },
      {
        id: 'platinum-price',
        value: 'Platinum Price',
        url: '/:language/productdetails',
      },
    ],
  },
  {
    id: 'palladium',
    parent: 'palladium',
    url: '/:language/productdetails',
    children: [
      {
        id: 'palladium-bar',
        value: 'Palladium bar',
        url: '/:language/productdetails',
        items: [{ id: 'palladium-bar-1', value: 'PAMP bars', url: '' }],
      },
      {
        id: 'palladium-price',
        value: 'Palladium price',
        url: '/:language/productdetails',
      },
    ],
  },
];


export const goldData = [
  {
    id: 1,
    value: "Gold bar",
    items: [
      { id: 1, value: "1 gram", url: "" },
      { id: 2, value: "100 gram", url: "" },
      { id: 3, value: "5 gram", url: "" },
      { id: 4, value: "10 gram", url: "" },
      { id: 5, value: "1 kg", url: "" },
      { id: 6, value: "PAMP bars", url: "" },
      { id: 7, value: "1 oz", url: "" },
      { id: 8, value: "50 gram", url: "" },
    ],
  },
  {
    id: 2,
    value: "Gold coins",
    items: [
      { id: 1, value: "1 oz", url: "" },
      { id: 2, value: "French Francs", url: "" },
      { id: 3, value: "Maple Leaf", url: "" },
      { id: 4, value: "Sovereign", url: "" },
      { id: 5, value: "Philharmonic", url: "" },
      { id: 6, value: "Britannia", url: "" },
      { id: 7, value: "Krugerrand", url: "" },
      { id: 8, value: "American Eagle", url: "" },
      { id: 9, value: "Vreneli", url: "" },
    ],
  },
  {
    id: 3,
    value: "Gold Price",
  },
];

export const silverData = [
  {
    id: 1,
    value: "Silver bar",
    items: [
      { id: 1, value: "1 oz", url: "" },
      { id: 2, value: "100 gram", url: "" },
      { id: 3, value: "100 oz", url: "" },
      { id: 4, value: "10 oz", url: "" },
      { id: 5, value: "1 kg", url: "" },
      { id: 6, value: "PAMP bars", url: "" },
    ],
  },
  {
    id: 2,
    value: "Silver coins",
    items: [
      { id: 1, value: "1 oz", url: "" },
      { id: 2, value: "Maple Leaf", url: "" },
      { id: 3, value: "Philharmonic", url: "" },
      { id: 4, value: "Britannia", url: "" },
    ],
  },
  {
    id: 3,
    value: "Silver Price",
  },
];

export const platinumData = [
  {
    id: 1,
    value: "Platinum bar",
    items: [{ id: 1, value: "PAMP bars", url: "" }],
  },
  {
    id: 2,
    value: "Platinum coins",
  },
  {
    id: 3,
    value: "Platinum Price",
  },
];

export const palladium = [
  {
    id: 1,
    value: "Palladium bar",
    items: [{ id: 1, value: "PAMP bars", url: "" }],
  },
  {
    id: 2,
    value: "Palladium price",
  },
];

export const navData = [
  {
    id: 1,
    value: "About us",
    url: "/en/about-us",
  },
  {
    id: 2,
    value: "Storage solution",
    url: "/en/physical-gold-storage-switzerland",
  },
  { id: 3, value: "Pricing", url: "/en/Pricing" },
];

export const userReviews = [
  {
    id: 1,
    title: "Effective communication and quick action",
    desc: "Effective communication and quick action",
    name: "Sendil Arasu Vijaya Ku..",
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Simple Purchase",
    desc: "Simple Purchase, free storage of precious metals, excellent offer of small and other.",
    name: "Peter",
    time: "March 29",
  },
  {
    id: 3,
    title: "I like investing in gold and silver.",
    desc: "I like investing in gold and silver. You are excellently organised, you are an excell..",
    name: "Peter",
    time: "March 27",
  },
  {
    id: 4,
    title: "Reliable and very good experience",
    desc: "I am very satisfied with Gold Avenue: -interface is easy to find what i want - it i....",
    name: "Sameh Mahmoud",
    time: "March 26",
  },
  {
    id: 5,
    title: "Great company",
    desc: "Easy, straightforward purchase procedure. Good stock choice and good prices.",
    name: "Morag",
    time: "March 26",
  },
  {
    id: 6,
    title: "Good choice of products",
    desc: "I have always found WaretGold very efficient to deal with. They offer many choices in...",
    name: "Thomas McGrath",
    time: "March 25",
  },
  {
    id: 7,
    title: "It was easy and fast",
    desc: "It was easy and fast. I am very happy with the order! Actually I`ll order more today",
    name: "Peter",
    time: "March 29",
  },
  {
    id: 8,
    title: "Easy intuitive & efficient service",
    desc: "Easy intuitive website makes it easy & quick to choose & buy. Transfer of funds works",
    name: "Peter",
    time: "March 27",
  },
];

export const bestSellData = [
  {
    id: 1,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1364%2Fsmall_3x_webp_Invest_in_1_kg_Fine_Silver_Cast_Bar_-_PAMP_Suisse_-_Front.webp&w=1920&q=75",
    title: "1kg Silver bar - PAMP Suisse",
    price: "921.29",
    perprice: "2.71",
  },
  {
    id: 2,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1383%2Fsmall_3x_webp_Box-full02_whiteBG.webp&w=1920&q=75",
    title: "Monster Box 500 oz Silver Bars - PAMP Suisse",
    price: "14,026.50",
    perprice: "2.10",
  },
  {
    id: 3,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F5%2Fsmall_3x_webp_Buy-50-grams-Fine-gold-Cast-Bar---PAMP-Swiss---Front.webp&w=1920&q=75",
    title: "50 gram Gold Bar - PAMP Suisse",
    price: "3,573.31",
    perprice: "53.17",
  },
  {
    id: 4,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F4%2Fsmall_3x_webp_Invest-in-100-grams-Fine-gold-Cast-Bar---PAMP-Swiss---Front.webp&w=1920&q=75",
    title: "100 gram Gold Bar - PAMP Suisse",
    price: "7,136.05",
    perprice: "49.19",
  },
  {
    id: 5,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1528%2Fsmall_3x_webp_1-Arche_Noah_2022_1oz_Silbermuenze.webp&w=1920&q=75",
    title: "1 oz Silver Coin - Noah`s Ark Armenia",
    price: "29.16",
    perprice: "3.21",
  },
  {
    id: 6,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1380%2Fsmall_3x_webp_Box-open_1out.webp&w=1920&q=75",
    title: "Monster Box 15x1 kg Silver Bars - PAMP Suisse",
    price: "13,605.73",
    perprice: "2.26",
  },
  {
    id: 7,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2435%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Ag_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Fine Silver - Lady Fortuna 45th Anniversary",
    price: "63.02",
    perprice: "Limited edition",
  },
  {
    id: 8,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2316%2Fsmall_3x_webp_2023-australia-1-oz-gold-lunar-rabbit-bu-series-iii_260595_slab.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Australia Lunar Rabbit (Series III)",
    price: "2,341.89",
    perprice: "Limited edition",
  },
  {
    id: 9,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2329%2Fsmall_3x_webp_Silbermuenzen_Myths_and_Legends_LeFay_1oz_VS.webp&w=1920&q=75",
    title: "1 oz silver Coin - Maple Leaf BU",
    price: "2,315.21",
    perprice: "Limited Edition",
  },
  {
    id: 10,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2296%2Fsmall_3x_webp_1oz_merlin2023_1.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Helvetia",
    price: "469.42",
    perprice: "63.55",
  },
];

export const limitedEditionData = [
  {
    id: 1,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2441%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Au_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Lady Fortuna 45th Anniversary",
    price: "2,314.48",
    perprice: "Limited Edition",
  },
  {
    id: 2,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2445%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_5g_Au_certipamp_front.webp&w=1920&q=75",
    title: "5 gram Gold Bar - Lady Fortuna 45th Anniversary",
    price: "14,026.50",
    perprice: "Limited Edition",
  },
  {
    id: 3,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2435%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Ag_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Fine Silver Bar - Lady Fortuna 45th Anniversary",
    price: "63.02",
    perprice: "Limited Edition",
  },
  {
    id: 4,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2316%2Fsmall_3x_webp_2023-australia-1-oz-gold-lunar-rabbit-bu-series-iii_260595_slab.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Autralia Lunar Rabbit (Series III)",
    price: "7,136.05",
    perprice: "Limited Edition",
  },
  {
    id: 5,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F998%2Fsmall_3x_webp_ZAUFS00574_11.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - PAMP Suisse Lunar Ox",
    price: "2,315.21",
    perprice: "Limited Edition",
  },
  {
    id: 6,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F591%2Fsmall_3x_webp_REV_JEWISH_AU_1oz.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - PAMP Suisse Am Yirael Chai",
    price: "3,213.46",
    perprice: "Limited Edition",
  },
];

export const coinsData = [
  {
    id: 1,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1132%2Fsmall_3x_webp_1-oz-Gold-South-African-Mint-Krugerrand-Goldavenue.webp&w=1920&q=75",
    title: "1 ounce Gold Coin - Krugerrand Mixed Years",
    price: "2,206.91",
    perprice: "36.49",
  },
  {
    id: 2,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1528%2Fsmall_3x_webp_1-Arche_Noah_2022_1oz_Silbermuenze.webp&w=1920&q=75",
    title: "1 oz Silver Coin - Noah`s Ark Armenia",
    price: "29.16",
    perprice: "3.21",
  },
  {
    id: 3,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2224%2Fsmall_3x_webp_20_ceres_gold_1.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Ceres 1849 - 1851",
    price: "447.55",
    perprice: "41.68",
  },
  {
    id: 4,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F132%2Fsmall_3x_webp_Buy_20_Swiss_Francs_Helvetia_Vreneli_Coins_-_Fine_Gold_Coin_900.0_by_Swissmint_-_Front.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Helvetia Vreneli",
    price: "427.46",
    perprice: "21.59",
  },
  {
    id: 5,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F1834%2Fsmall_3x_webp_1_oz_Fine_Silver_Coin_999.9_-_Maple_Leaf_BU_Mixed_Years__1___1_.webp&w=1920&q=75",
    title: "1 oz silver Coin - Maple Leaf BU",
    price: "2,315.21",
    perprice: "Limited Edition",
  },
  {
    id: 6,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2219%2Fsmall_3x_webp_20_helvetia_1.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Helvetia",
    price: "469.42",
    perprice: "63.55",
  },
];

export const newlyArrivedData = [
  {
    id: 1,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2445%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_5g_Au_certipamp_front.webp&w=1920&q=75",
    title: "1 gram Gold Bar - Lady Fortuna 45th Anniversary",
    price: "443.66",
    perprice: "Limited edition",
  },
  {
    id: 2,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2441%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Au_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Lady Fortuna 45th Anniversary",
    price: "2,314.48",
    perprice: "Limited edition",
  },
  {
    id: 3,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2435%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Ag_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Fine Silver - Lady Fortuna 45th Anniversary",
    price: "63.02",
    perprice: "Limited edition",
  },
  {
    id: 4,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2316%2Fsmall_3x_webp_2023-australia-1-oz-gold-lunar-rabbit-bu-series-iii_260595_slab.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Australia Lunar Rabbit (Series III)",
    price: "2,341.89",
    perprice: "Limited edition",
  },
  {
    id: 5,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2329%2Fsmall_3x_webp_Silbermuenzen_Myths_and_Legends_LeFay_1oz_VS.webp&w=1920&q=75",
    title: "1 oz silver Coin - Maple Leaf BU",
    price: "2,315.21",
    perprice: "Limited Edition",
  },
  {
    id: 6,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2296%2Fsmall_3x_webp_1oz_merlin2023_1.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Helvetia",
    price: "469.42",
    perprice: "63.55",
  },
  {
    id: 7,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2435%2Fsmall_3x_webp_lady_fortuna_45th__anniversary_1oz_Ag_certipamp_front.webp&w=1920&q=75",
    title: "1 ounce Fine Silver - Lady Fortuna 45th Anniversary",
    price: "63.02",
    perprice: "Limited edition",
  },
  {
    id: 8,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2316%2Fsmall_3x_webp_2023-australia-1-oz-gold-lunar-rabbit-bu-series-iii_260595_slab.webp&w=1920&q=75",
    title: "1 ounce Gold Bar - Australia Lunar Rabbit (Series III)",
    price: "2,341.89",
    perprice: "Limited edition",
  },
  {
    id: 9,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2329%2Fsmall_3x_webp_Silbermuenzen_Myths_and_Legends_LeFay_1oz_VS.webp&w=1920&q=75",
    title: "1 oz silver Coin - Maple Leaf BU",
    price: "2,315.21",
    perprice: "Limited Edition",
  },
  {
    id: 10,
    img: "https://www.goldavenue.com/_next/image?url=https%3A%2F%2Fassets.goldavenue.com%2Fuploads%2Fproduct_image%2Fimage%2F2296%2Fsmall_3x_webp_1oz_merlin2023_1.webp&w=1920&q=75",
    title: "20 Swiss Francs Gold Coin - Helvetia",
    price: "469.42",
    perprice: "63.55",
  },
];
