import React from 'react';
import '../styles/pages/Careers.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Careers() {
  const jobs = [
    {
      title: 'Développeur Front-End React',
      location: 'Paris — Télétravail possible',
      type: 'CDI',
      category: 'Tech',
    },
    {
      title: 'UX/UI Designer',
      location: 'Bruxelles — Hybride',
      type: 'CDI',
      category: 'Design',
    },
    {
      title: 'Chargé(e) de communication',
      location: 'Lyon — Sur site',
      type: 'Stage',
      category: 'Marketing',
    },
    {
      title: 'Data Analyst Junior',
      location: 'Paris — Hybride',
      type: 'CDI',
      category: 'Data',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="careers-banner">
        <img src="/assets/banniere.png" alt="Travailler chez Assurix" />
        <div className="careers-banner-text">
          <h1>Travailler chez Assurix</h1>
        </div>
      </section>

      <section className="careers-intro">
        <h2>Pourquoi rejoindre Assurix ?</h2>
        <p>
          Chez Assurix, nous croyons au bien-être au travail, à l’innovation, et à l’humain. Ce qui vous rend unique est notre force. 
          Rejoignez une entreprise qui évolue avec ses collaborateurs.
        </p>
      </section>

      <section className="careers-jobs">
        <h2>Postes ouverts</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>{job.category}</strong> | {job.location} | {job.type}</p>
              <button>Voir l’offre</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Careers;
