import React, { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';
import './FeaturedProducts.css';

export default function FeaturedProducts({ products, addToCart, onQuickView }) {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products.slice(0, 9) : products.slice(0, 6);

  return (
    <section id="featured" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Bestselling Fragrances</h2>
        </div>
        <div className="products-grid">
          {visibleProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="quick-view-btn" onClick={() => onQuickView(product)}>
                  <Eye size={16} /> Quick View
                </button>
              </div>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <div className="product-footer">
                  <div className="product-price">Rs. {product.price}</div>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <ShoppingBag size={18} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > 6 && (
          <div className="view-all-wrap">
            <button className="view-all-btn" onClick={() => setShowAll(prev => !prev)}>
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
