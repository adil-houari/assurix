import React from 'react';
import '../styles/components/SimulationSteps.css'; 

function SimulationSteps() {
  return (
    <section className="simulation-steps">
      <h2>Simulez votre assurance en 3 étapes</h2>
      <p className="simulation-subtitle">
        En moins de 2 minutes, obtenez une estimation gratuite adaptée à vos besoins.
      </p>

      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Remplissez vos infos</h3>
          <p>Indiquez votre situation, bien ou véhicule à assurer. Simple et rapide.</p>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <h3>Recevez une estimation</h3>
          <p>Notre outil calcule automatiquement un prix personnalisé.</p>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <h3>Souscrivez en ligne</h3>
          <p>Vous pouvez finaliser votre contrat depuis chez vous en toute sécurité.</p>
        </div>
      </div>

      <button className="cta-simulation">Lancer la simulation</button>
    </section>
  );
}

export default SimulationSteps;
