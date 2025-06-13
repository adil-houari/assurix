import React from 'react';
import '../styles/components/PopularPlans.css';
import { FaCar, FaHome, FaHeartbeat, FaUserShield } from 'react-icons/fa';

const plans = [
    {
        icon: <FaCar />,
        title: 'Assurance Auto',
        description: 'Protégez votre véhicule et vos trajets avec notre couverture complète.',
        color: '#4f46e5'
    },
    {
        icon: <FaHome />,
        title: 'Assurance Habitation',
        description: 'Sécurisez votre maison ou appartement contre tous les imprévus.',
        color: '#6366f1'
    },
    {
        icon: <FaHeartbeat />,
        title: 'Assurance Santé',
        description: 'Des soins de qualité, remboursés rapidement pour vous et vos proches.',
        color: '#7c3aed'
    },
    {
        icon: <FaUserShield />,
        title: 'Protection Juridique',
        description: 'Un soutien juridique fiable en cas de litige ou de conflit.',
        color: '#3b82f6'
    }
];

function PopularPlans() {
    return (
        <section className="plans" id="plans">
            <h2>Nos assurances populaires</h2>
            <p className="plans-subtitle">Choisissez l’assurance qui vous correspond.</p>
            <div className="plans-grid">
                {plans.map((plan, index) => (
                    <div key={index} className="plan-card" style={{ borderTopColor: plan.color }}>
                        <div className="plan-icon" style={{ color: plan.color }}>
                            {plan.icon}
                        </div>
                        <h3>{plan.title}</h3>
                        <p>{plan.description}</p>
                        <a href="#">En savoir plus →</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularPlans;
