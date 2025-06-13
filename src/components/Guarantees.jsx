import React from 'react';
import '../styles/components/Guarantees.css';
import { FaShieldAlt, FaHeartbeat, FaClock, FaMobileAlt } from 'react-icons/fa';

function Guarantees() {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Protection complète',
            desc: 'Une couverture personnalisée pour vous, votre famille et vos biens.'
        },
        {
            icon: <FaHeartbeat />,
            title: 'Assistance 24/7',
            desc: 'Intervention immédiate en cas d’urgence, jour et nuit.'
        },
        {
            icon: <FaClock />,
            title: 'Traitement rapide',
            desc: 'Déclaration simplifiée et prise en charge accélérée.'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Suivi digital',
            desc: 'Tout votre contrat accessible depuis votre mobile.'
        }
    ];

    return (
        <section className="guarantees" id="guarantees">
            <h2>Nos garanties pour votre sérénité</h2>
            <p className="subtitle">Des avantages pensés pour vous assurer une tranquillité totale.</p>
            <div className="guarantee-grid">
                {features.map((item, i) => (
                    <div className="guarantee-card" key={i}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Guarantees;
