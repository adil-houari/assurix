import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/pages/Assurances.css';
import { FaCarAlt, FaHome, FaHeartbeat, FaUserShield } from 'react-icons/fa';

function Assurances() {
  return (
    <>
      <Navbar />
      <section className="assurances-page">
        <h1 className="assurances-title">Découvrez nos assurances sur mesure</h1>
        <p className="assurances-subtitle">
          Des solutions simples et claires pour vous protéger au quotidien.
        </p>

        <div className="assurance-grid">
          <div className="assurance-card">
            <FaCarAlt className="icon" />
            <h3>Assurance Auto</h3>
            <p>Roulez en toute sécurité avec notre couverture complète, tous risques ou au tiers.</p>
            <button>En savoir plus</button>
          </div>
          <div className="assurance-card">
            <FaHome className="icon" />
            <h3>Assurance Habitation</h3>
            <p>Protégez votre logement contre les incendies, dégâts des eaux et cambriolages.</p>
            <button>En savoir plus</button>
          </div>
          <div className="assurance-card">
            <FaHeartbeat className="icon" />
            <h3>Assurance Santé</h3>
            <p>Des remboursements rapides et une couverture adaptée à vos besoins médicaux.</p>
            <button>En savoir plus</button>
          </div>
          <div className="assurance-card">
            <FaUserShield className="icon" />
            <h3>Protection de la Famille</h3>
            <p>Assurez l'avenir de vos proches avec des garanties simples et fiables.</p>
            <button>En savoir plus</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Assurances;
