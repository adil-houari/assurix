import React, { useEffect, useState } from 'react';
import '../styles/components/TrustSection.css';

function Counter({ target, duration }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        const incrementTime = Math.floor(duration / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
    }, [target, duration]);

    return <span>{count}</span>;
}

function TrustSection() {
    const stats = [
        { label: 'Clients satisfaits', value: 4500 },
        { label: 'Sinistres traités/an', value: 8200 },
        { label: 'Agents disponibles', value: 230 },
        { label: 'Ans d’expérience', value: 35 }
    ];

    return (
        <section className="trust" id="trust">
            <h2>Pourquoi nous faire confiance ?</h2>
            <p className="trust-subtitle">Des chiffres qui parlent d’eux-mêmes.</p>
            <div className="trust-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="trust-card">
                        <div className="trust-number">
                            <Counter target={stat.value} duration={2000} />
                            {index !== 3 && '+'}
                        </div>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrustSection;
