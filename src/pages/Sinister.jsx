import React from 'react';
import '../styles/pages/Sinistres.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaExclamationTriangle, FaStar, FaRegStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Sinistres() {

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <>
            <Navbar />
            <section className="sinistres-page">
                <h2 className="sinistres-title">Dégâts, vol, accident ou hospitalisation</h2>

                <div className="sinistres-grid">
                    <div className="sinistres-card red" data-aos="fade-up">
                        <div className="sinistres-icon">
                            <FaExclamationTriangle />
                        </div>
                        <h3>Dépannage et urgences</h3>
                        <p>Véhicule immobilisé, urgence habitation, problème médical à l’étranger</p>
                    </div>

                    <div className="sinistres-card orange" data-aos="fade-up" data-aos-delay="100">
                        <div className="sinistres-icon">
                            <FaStar />
                        </div>
                        <h3>Nouveau Sinistre</h3>
                        <p>Quoi faire, comment déclarer, poser une question</p>
                    </div>

                    <div className="sinistres-card blue" data-aos="fade-up" data-aos-delay="200">
                        <div className="sinistres-icon">
                            <FaRegStar />
                        </div>
                        <h3>Sinistre déjà déclaré</h3>
                        <p>Suivre un dossier, un remboursement, poser une question</p>
                    </div>
                </div>
                <div className="sinistres-button-wrapper">
                    <button className="sinistres-button">Voir toutes les démarches</button>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Sinistres;
