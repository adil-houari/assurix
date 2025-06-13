import React, { useState } from 'react';
import '../styles/pages/Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // clear error on input
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!form.name.trim()) newErrors.name = true;
        if (!form.email.trim()) newErrors.email = true;
        if (!form.message.trim()) newErrors.message = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 4000);
    };

    return (
        <>
            <Navbar />
            <section className="contact-page">
                <h1 className="contact-title">Contactez-nous</h1>
                <p className="contact-subtitle">Une question ? Une demande ? Notre équipe est à votre écoute.</p>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-item"><FaPhoneAlt /><span>+32 1 23 45 67 89</span></div>
                        <div className="info-item"><FaEnvelope /><span>support@assurix.be</span></div>
                        <div className="info-item"><FaMapMarkerAlt /><span>Grand Place 15, 1000 Bruxelles</span></div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom"
                            value={form.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre e-mail"
                            value={form.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            value={form.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Votre message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            className={errors.message ? 'error' : ''}
                        />
                        <button type="submit">Envoyer le message</button>

                        {success && <p className="success-msg">✅ Votre message a bien été envoyé !</p>}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
