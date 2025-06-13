import React from 'react';
import '../styles/components/Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Votre sécurité, <span className="highlight">notre engagement</span>
                </h1>
                <p>
                    Des solutions d’assurance innovantes pour protéger ce qui compte vraiment :
                    votre famille, votre santé et vos biens. Faites confiance à Assurix, partenaire de votre sérénité.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">Demander un devis</button>
                    <button className="secondary-btn">Découvrir nos garanties</   button>
                </div>

            </div>

            <div className="hero-image">
                <img src="/assets/hero-assurance.png" alt="Protection Assurix" />
            </div>
        </section>
    );
}

export default Hero;
