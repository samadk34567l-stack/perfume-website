import React from 'react';
import { ShoppingBag, Search, Heart } from 'lucide-react';
import './Header.css';

export default function Header({ cartCount, cartTotal, onOpenCart }) {
  return (
    <header className="header-nav">
      <div className="container header-container">
        <div className="logo-section" onClick={() => window.scrollTo(0, 0)}>
          <div className="logo-icon">MS</div>
          <div className="logo-text">
            <h1>MAAZ SAFDER</h1>
            <p>Fragrances</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#featured">Bestsellers</a>
          <a href="#collections">Collections</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><Heart size={20} /></button>
          <button className="cart-btn" onClick={onOpenCart}>
            <ShoppingBag size={20} />
            <span>Rs. {cartTotal}</span>
            {cartCount > 0 && <span>({cartCount})</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
