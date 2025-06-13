import React, { useState } from 'react';
import '../styles/components/FAQ.css';
import { FaChevronDown } from 'react-icons/fa';

const questions = [
  {
    question: "Comment souscrire à une assurance ?",
    answer: "Vous pouvez souscrire directement en ligne via notre simulateur, ou en contactant un de nos conseillers."
  },
  {
    question: "Puis-je résilier mon ancien contrat facilement ?",
    answer: "Oui. Assurix s'occupe gratuitement de toutes les démarches de résiliation pour vous."
  },
  {
    question: "Est-ce que je peux modifier mon contrat à tout moment ?",
    answer: "Bien sûr, vous pouvez ajuster votre couverture depuis votre espace client ou par téléphone."
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer: "Assurix respecte les normes RGPD et utilise des protocoles de chiffrement avancés."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Questions fréquentes</h2>
      <div className="faq-list">
        {questions.map((item, i) => (
          <div
            className={`faq-item ${activeIndex === i ? 'active' : ''}`}
            key={i}
            onClick={() => toggle(i)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <FaChevronDown className={`chevron ${activeIndex === i ? 'rotate' : ''}`} />
            </div>
            <div className="faq-answer" style={{ maxHeight: activeIndex === i ? '200px' : '0px' }}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
