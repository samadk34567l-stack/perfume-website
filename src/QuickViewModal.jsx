import React, { useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import './QuickViewModal.css';

export default function QuickViewModal({ product, onClose, addToCart }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="qv-overlay" onClick={onClose}>
      <div className="qv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="qv-close" onClick={onClose}><X size={20} /></button>
        <img className="qv-image" src={product.image} alt={product.name} />
        <div className="qv-info">
          <span className="qv-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="qv-tagline">{product.tagline}</p>
          <p className="qv-desc">{product.description}</p>
          <p className="qv-meta">Size: 100ml &bull; Eau de Parfum</p>
          <div className="qv-price">Rs. {product.price}</div>
          <button
            className="qv-add-btn"
            onClick={() => { addToCart(product); onClose(); }}
          >
            <ShoppingBag size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
