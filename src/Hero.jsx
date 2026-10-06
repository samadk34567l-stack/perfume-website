import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Experience Luxury In <span>Every Single Drop</span></h1>
          <p>Discover exquisite oriental and contemporary perfumes crafted with the rarest ingredients, designed to leave an unforgettable impression.</p>
          <div className="hero-buttons">
            <a href="#featured" className="btn-primary">
              Explore Bestsellers <ArrowRight size={20} />
            </a>
            <a href="#collections" className="btn-secondary">View Collections</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800" alt="Royal Oudh Elixir" />
        </div>
      </div>
    </section>
  );
}
