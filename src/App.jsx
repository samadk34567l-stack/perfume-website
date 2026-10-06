import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Collections from './Collections';
import FeaturedProducts from './FeaturedProducts';
import PromoBanner from './PromoBanner';
import Testimonials from './Testimonials';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import QuickViewModal from './QuickViewModal';
import './index.css';

const IMG = [
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800"
];

const PRODUCTS_DATA = [
  { id: 1, name: "Royal Oudh Elixir", tagline: "Exclusive Oriental Blend", price: 4999, category: "Men", description: "A rich, majestic blend of aged oudh, amber and saffron. Crafted for those who leave a lasting impression.", image: IMG[0] },
  { id: 2, name: "Midnight Passion", tagline: "Sensual & Mysterious", price: 3899, category: "Unisex", description: "Dark vanilla, black musk and a touch of spice make this a perfect evening fragrance.", image: IMG[1] },
  { id: 3, name: "Velvet Bloom", tagline: "Floral Elegance", price: 3499, category: "Women", description: "Fresh jasmine, rose petals and soft white musk in a graceful, long-lasting floral composition.", image: IMG[2] },
  { id: 4, name: "Majestic Tobacco", tagline: "Bold & Charismatic", price: 5499, category: "Men", description: "Smooth tobacco leaf, warm woods and honeyed notes create a bold and confident signature scent.", image: IMG[3] },
  { id: 5, name: "Amber Nights", tagline: "Warm & Intoxicating", price: 4299, category: "Unisex", description: "Golden amber, creamy tonka and a whisper of cinnamon melt into a warm scent that lingers long after the evening ends.", image: "/images/p5.png" },
  { id: 6, name: "Rose Royale", tagline: "Romantic & Regal", price: 3799, category: "Women", description: "Fresh-cut Taif rose opens with a sparkle of lychee, then settles into soft musk and a delicate touch of vanilla.", image: "/images/p6.png" },
  { id: 7, name: "Sandal Noir", tagline: "Smooth & Mysterious", price: 4699, category: "Men", description: "Smoky Mysore sandalwood meets leather and vetiver for a deep, understated scent with serious presence.", image: "/images/p7.png" },
  { id: 8, name: "Ocean Breeze", tagline: "Fresh & Energetic", price: 2999, category: "Unisex", description: "Bergamot and sea salt open bright and clean, drying down to driftwood and light musk. Easy to wear every day.", image: "/images/p8.png" },
  { id: 9, name: "Saffron Gold", tagline: "Luxurious & Spiced", price: 5999, category: "Unisex", description: "Threads of saffron and warm honey wrap around aged oudh and amber in a rich blend made for special occasions.", image: "/images/p9.png" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Hero />
      <Collections />
      <FeaturedProducts
        products={PRODUCTS_DATA}
        addToCart={addToCart}
        onQuickView={setQuickViewProduct}
      />
      <PromoBanner />
      <Testimonials />
      <Footer />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        addToCart={addToCart}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
      />
    </div>
  );
}
