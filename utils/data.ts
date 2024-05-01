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
