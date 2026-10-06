import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PromoBanner.css';

export default function PromoBanner() {
  return (
    <section id="promo" className="promo-section">
      <div className="container">
        <div className="promo-box">
          <div className="promo-text">
            <span>Limited Time Offer</span>
            <h2>Free Delivery On Orders Above Rs. 5000</h2>
            <p>Treat yourself or gift someone special with a luxury fragrance, delivered to your doorstep.</p>
          </div>
          <a href="#featured" className="promo-btn">
            Shop Now <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
