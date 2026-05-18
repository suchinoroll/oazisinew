import React, { useEffect } from 'react';
import './AboutPage.css';

const ContactSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="design-page contact-page">
            <header className="design-hero contact-hero reveal">
                <div className="design-hero-copy">
                    <span className="design-kicker">კონტაქტი</span>
                    <h1>დაგვიკავშირდით.<br />
                    <span>დავიწყოთ პროექტი ერთად.</span>
                </h1>
                    <p className="lead">
                        მოგვწერეთ ან დაგვირეკეთ, და თქვენი იდეის პირველ შეფასებას სწრაფად და მკაფიოდ დავიწყებთ.
                    </p>
                </div>
            </header>

            <section className="design-grid-section">
                <h2 className="design-section-title reveal">საკონტაქტო არხები.</h2>
                <div className="contact-grid">
                    <a href="tel:+995571152508" className="contact-panel contact-panel-wide reveal stagger-1">
                        <span className="design-kicker">ტელეფონი</span>
                        <p>+995 571 15 25 08</p>
                    </a>

                    <a href="mailto:oazisiofficial@gmail.com" className="contact-panel contact-panel-dark reveal stagger-2">
                        <span className="design-kicker">ელ-ფოსტა</span>
                        <p>oazisiofficial@gmail.com</p>
                    </a>

                    <a href="https://www.facebook.com/share/1BAiNNYhEw/" target="_blank" rel="noreferrer" className="contact-panel reveal stagger-1">
                        <span className="design-kicker">Facebook</span>
                        <p>Oasis Official</p>
                    </a>
                </div>
            </section>
        </main>
    );
};

export default ContactSection;
