import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const REVIEWS = [
  { id: 1, name: "Ahmed Raza", city: "Karachi", rating: 5, text: "Royal Oudh Elixir ki khushbu poora din rehti hai. Compliments ki line lag jati hai!" },
  { id: 2, name: "Sana Malik", city: "Lahore", rating: 5, text: "Velvet Bloom bilkul meri pasand ke mutabiq hai. Packaging bhi bohat premium thi." },
  { id: 3, name: "Hamza Ali", city: "Islamabad", rating: 4, text: "Majestic Tobacco ka longevity zabardast hai. Delivery bhi time par mili." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {REVIEWS.map(r => (
            <div key={r.id} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < r.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="testimonial-text">"{r.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{r.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{r.name}</div>
                  <div className="author-city">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
