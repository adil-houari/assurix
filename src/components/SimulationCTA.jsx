import React from 'react';
import '../styles/components/SimulationCTA.css';

function SimulationCTA() {
    return (
        <section className="simulation-cta" id="simulation">
            <div className="simulation-container">
                <h2>Simulez votre assurance</h2>
                <p className="simulation-text">
                    En moins de 2 minutes, obtenez une estimation gratuite adaptée à vos besoins.
                </p>

                <form className="simulation-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Votre nom" required />
                    <input type="email" placeholder="Votre email" required />
                    <select required>
                        <option value="">Type d'assurance</option>
                        <option value="auto">Auto</option>
                        <option value="habitation">Habitation</option>
                        <option value="santé">Santé</option>
                        <option value="juridique">Juridique</option>
                    </select>
                    <button type="submit">Obtenir une estimation</button>
                </form>
            </div>
        </section>
    );
}

export default SimulationCTA;
