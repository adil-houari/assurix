import React from 'react';
import '../styles/components/Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Claire B.",
    date: "Il y a 2 jours",
    text: "J’ai pu assurer ma voiture en 5 minutes chrono, tout est clair et rapide. Bravo Assurix !",
    rating: 5
  },
  {
    name: "Patrick L.",
    date: "Il y a 1 semaine",
    text: "Le service client est très réactif. J’ai reçu mon attestation immédiatement.",
    rating: 4
  },
  {
    name: "Sophie M.",
    date: "Il y a 3 semaines",
    text: "L’interface est intuitive et les prix sont transparents. Je recommande à 100 %.",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Ce que disent nos clients</h2>
      <p className="testimonials-subtitle">La confiance se construit avec des expériences réelles.</p>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div className="avatar">{item.name.charAt(0)}</div>
              <div>
                <h4>{item.name}</h4>
                <span className="testimonial-date">{item.date}</span>
              </div>
            </div>
            <p className="testimonial-text">"{item.text}"</p>
            <div className="stars">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
