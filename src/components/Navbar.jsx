import React from 'react';
import '../styles/components/Navbar.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaGlobe } from 'react-icons/fa';

function Navbar() {
    const languages = ['FR', 'EN', 'NL', 'DE', 'ES'];
    const userTypes = ['Particuliers', 'Professionnels', 'Indépendants', 'Entreprises', 'Secteur public'];

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* LEFT */}
                <div className="navbar-left">
                    <a href="/"><img src="assets\insuraLogo.png" alt="Assurix Logo" className="logo" /></a>

                    <div className="dropdown hover-group">
                        <span>{userTypes[0]} ▾</span>
                        <ul className="dropdown-menu">
                            {userTypes.slice(1).map((type, index) => (
                                <li key={index}>{type}</li>
                            ))}
                        </ul>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/Assurances">Assurance</Link></li>
                        <li><Link to="/sinistres">Sinistres</Link></li>
                        <li><Link to="/aide">Aide</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link className='careers' to="/careers">Carrière</Link></li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-right">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Rechercher..." />
                    </div>

                    <button className="client-btn">
                        <FaUser />
                        Espace Client
                    </button>

                    <div className="lang-switch hover-group">
                        <FaGlobe />
                        <span>FR ▾</span>
                        <ul className="lang-menu">
                            {languages.map((lang, i) => (
                                <li key={i}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
