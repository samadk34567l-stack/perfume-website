import React from 'react';
import './Collections.css';

const IMG = [
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800"
];

const COLLECTIONS = [
  { id: 1, name: "Oriental Oudh", desc: "Deep, warm & majestic", image: IMG[0] },
  { id: 2, name: "Floral Elegance", desc: "Soft, fresh & graceful", image: IMG[1] },
  { id: 3, name: "Midnight Series", desc: "Sensual & mysterious", image: IMG[2] },
  { id: 4, name: "Woody & Tobacco", desc: "Bold & charismatic", image: IMG[3] },
  { id: 5, name: "Fresh Aquatic", desc: "Clean, breezy & cooling", image: "/images/c5.png" },
  { id: 6, name: "Amber & Musk", desc: "Cozy, golden & long-lasting", image: "/images/c6.png" },
  { id: 7, name: "Rose Garden", desc: "Soft petals & gentle romance", image: "/images/c7.png" },
  { id: 8, name: "Royal Attar", desc: "Concentrated oils, rich & traditional", image: "/images/c8.png" }
];

export default function Collections() {
  return (
    <section id="collections" className="collections-section">
      <div className="container">
        <div className="collections-header">
          <h2>Our Collections</h2>
          <p>Find the signature scent that defines you</p>
        </div>
        <div className="collections-grid">
          {COLLECTIONS.map(c => (
            <a key={c.id} href="#featured" className="collection-card">
              <img src={c.image} alt={c.name} />
              <div className="collection-overlay">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
