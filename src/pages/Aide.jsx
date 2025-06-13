import React from 'react';
import '../styles/pages/Aide.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaQuestionCircle, FaFileAlt, FaPhoneAlt, FaMobileAlt } from 'react-icons/fa';

function Aide() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <Navbar />
            <section className="aide-page">
                <div className="aide-hero">
                    <h1>Besoin d'aide ?</h1>
                    <p>Consultez notre centre d’aide ou contactez notre support.</p>
                    <input type="text" placeholder="🔍 Rechercher une question, un sujet, un problème..." />
                </div>

                <div className="aide-categories">
                    <div className="aide-card" data-aos="fade-up" data-aos-delay="0">
                        <FaFileAlt className="icon" />
                        <h3>Contrats & Devis</h3>
                        <p>Infos sur les garanties, les options, les documents nécessaires.</p>
                    </div>
                    <div className="aide-card" data-aos="fade-up" data-aos-delay="100">
                        <FaPhoneAlt className="icon" />
                        <h3>Assistance & Urgences</h3>
                        <p>En cas de sinistre, vol ou problème à l’étranger.</p>
                    </div>
                    <div className="aide-card" data-aos="fade-up" data-aos-delay="200">
                        <FaQuestionCircle className="icon" />
                        <h3>FAQ</h3>
                        <p>Questions les plus fréquentes posées par nos clients.</p>
                    </div>
                </div>

                <div className="aide-contact">
                    <p>Vous ne trouvez pas ce que vous cherchez ?</p>
                    <button>Contacter l’assistance</button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Aide;
