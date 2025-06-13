import React from 'react';
import '../styles/components/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column">
                    <img src="/assets/insuraLogo.png" alt="Assurix Logo" className="footer-logo" />
                    <p className="footer-desc">
                        Assurix vous accompagne pour protéger ce qui compte le plus avec des solutions simples, rapides et accessibles.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Assurances</h4>
                    <a href="#">Auto</a>
                    <a href="#">Habitation</a>
                    <a href="#">Santé</a>
                    <a href="#">Famille</a>
                </div>

                <div className="footer-column">
                    <h4>Infos pratiques</h4>
                    <a href="#">FAQ</a>
                    <a href="#">Contact</a>
                    <a href="#">Documents utiles</a>
                    <a href="#">Blog</a>
                    <a href=""><Link to="/careers">Carrière</Link></a>

                </div>

                <div className="footer-column">
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Assurix. Tous droits réservés.</p>
                <p><a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a></p>
            </div>
        </footer>
    );
}

export default Footer;
