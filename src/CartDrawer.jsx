import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeFromCart, cartTotal }) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3><ShoppingBag /> Your Cart</h3>
          <button className="close-btn" onClick={onClose}><X /></button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p style={{textAlign: 'center', color: '#a3a3a3', marginTop: '20px'}}>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <div className="cart-item-price">Rs. {item.price}</div>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span style={{color: '#fbbf24'}}>Rs. {cartTotal}</span>
            </div>
            <button className="checkout-btn" onClick={() => { alert("Order Placed!"); onClose(); }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
