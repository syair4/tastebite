export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Margherita",
    description: "Fresh mozzarella, San Marzano tomatoes, basil on hand-tossed dough",
    price: 14.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    vegetarian: true,
    popular: true,
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    description: "Arborio rice, wild mushrooms, truffle oil, parmesan",
    price: 18.50,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
    vegetarian: true,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Atlantic salmon, lemon butter sauce, roasted vegetables",
    price: 24.99,
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: 4,
    name: "Spicy Thai Curry",
    description: "Red curry paste, coconut milk, bamboo shoots, jasmine rice",
    price: 16.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    spicy: true,
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, house-made Caesar dressing",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop",
    vegetarian: true,
  },
  {
    id: 6,
    name: "BBQ Bacon Burger",
    description: "Angus beef patty, smoked bacon, cheddar, BBQ sauce, brioche bun",
    price: 17.49,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: 7,
    name: "Lobster Bisque",
    description: "Creamy lobster soup with a hint of sherry and fresh herbs",
    price: 13.99,
    category: "Soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Chicken Tikka Masala",
    description: "Tender chicken in rich tomato-cream curry sauce with naan",
    price: 15.99,
    category: "Mains",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    spicy: true,
    popular: true,
  },
  {
    id: 9,
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting",
    price: 9.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    vegetarian: true,
  },
  {
    id: 10,
    name: "Spaghetti Carbonara",
    description: "Al dente spaghetti, pancetta, egg yolk, pecorino romano",
    price: 15.49,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Fish & Chips",
    description: "Beer-battered cod, thick-cut fries, tartar sauce, mushy peas",
    price: 16.49,
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1579208030886-b1f5b8dbfef5?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream",
    price: 11.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    vegetarian: true,
    popular: true,
  },
];

export const categories = [
  "All",
  "Pizza",
  "Pasta",
  "Burgers",
  "Mains",
  "Seafood",
  "Salads",
  "Soups",
  "Desserts",
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "Absolutely incredible dining experience! The truffle risotto was to die for.",
    rating: 5,
  },
  {
    id: 2,
    name: "James K.",
    text: "Best burger in town, hands down. The BBQ sauce is something special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    text: "We celebrated our anniversary here. Perfect ambiance and amazing food.",
    rating: 4,
  },
  {
    id: 4,
    name: "Michael D.",
    text: "The salmon was cooked to perfection. Will definitely come back!",
    rating: 5,
  },
];
