import React, { useEffect, useRef } from 'react';
import './AboutPage.css';
import StepOneIcon from '../assets/New/services.step1.svg';
import StepTwoIcon from '../assets/New/services.step2.svg';
import StepThreeIcon from '../assets/New/services.step3.svg';
import StepFourIcon from '../assets/New/services.step4.svg';

const ServicesPage = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observerRef.current.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));
        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <main className="design-page services-page">
            <header className="design-hero reveal">
                <div className="design-hero-copy">
                    <span className="design-kicker">ჩვენი სერვისები</span>
                    <h1>
                        სამშენებლო გადაწყვეტილებები.<br />
                        <span>მშვიდი ძილის გარანტია.</span>
                    </h1>
                    <p className="lead">
                        ჩვენ გთავაზობთ სრულ ციკლს იდეიდან გასაღების ჩაბარებამდე. ყოველი ეტაპი კონტროლდება უახლესი ტექნოლოგიებით.
                    </p>
                </div>
                <div className="design-hero-media services-hero-stack" aria-hidden="true">
                    <img src={StepOneIcon} alt="" />
                    <img src={StepTwoIcon} alt="" />
                    <img src={StepThreeIcon} alt="" />
                    <img src={StepFourIcon} alt="" />
                </div>
            </header>

            <section className="design-grid-section">
                <h2 className="design-section-title reveal">რას ვასრულებთ.</h2>
                <div className="design-card-grid">

                    <article className="design-card design-wide reveal stagger-1">
                        <span className="design-kicker">მშენებლობა</span>
                        <h3>კაპიტალური მშენებლობა</h3>
                        <p>სრული ციკლი: საძირკვლის მოწყობა, მონოლითური სამუშაოები და კედლების ამოყვანა უმაღლესი ხარისხის მასალებით.</p>
                    </article>

                    <article className="design-card reveal stagger-2">
                        <span className="design-kicker">დიზაინი</span>
                        <h3>პროექტირება</h3>
                        <p>სივრცის ფუნქციური დაგეგმარება და 3D ვიზუალიზაცია თქვენს გემოვნებაზე მორგებით.</p>
                    </article>

                    <article className="design-card reveal stagger-1">
                        <span className="design-kicker">განახლება</span>
                        <h3>რემონტი</h3>
                        <p>პრემიუმ ხარისხის შიდა მოპირკეთება: ლესვა, მოჭიმვა და სამღებრო სამუშაოები ლაზერული სიზუსტით.</p>
                    </article>

                    <article className="design-card design-card-dark design-wide reveal stagger-2">
                        <span className="design-kicker">Premium</span>
                        <h3>გასაღების ჩაბარებით</h3>
                        <p>თქვენ გვაწვდით გასაღებს, ჩვენ კი გიბრუნებთ საცხოვრებლად გამზადებულ, სუფთა და მყუდრო სახლს ყოველგვარი სტრესის გარეშე.</p>
                    </article>

                    <article className="design-card design-wide reveal stagger-1">
                        <span className="design-kicker">ინჟინერია</span>
                        <h3>საინჟინრო ქსელები</h3>
                        <p>ელექტროობა, წყალგაყვანილობა და გათბობის სისტემების მონტაჟი უსაფრთხოების ნორმების სრული დაცვით.</p>
                    </article>

                    <article className="design-card reveal stagger-2">
                        <span className="design-kicker">მართვა</span>
                        <h3>მენეჯმენტი</h3>
                        <p>ჩვენ ვმართავთ ყველა რგოლს — მომწოდებლებსა და ლოჯისტიკას, რათა თქვენ დაზოგოთ დრო.</p>
                    </article>
                </div>
            </section>

            <section className="design-process-section">
                <h2 className="design-section-title reveal">სამუშაო პროცესი.</h2>
                <div className="design-process-grid">
                    {[
                        { num: "01", title: "დათვალიერება", desc: "ობიექტის უფასო შეფასება და აზომვა.", icon: StepOneIcon },
                        { num: "02", title: "ბიუჯეტი", desc: "დეტალური ხარჯთაღრიცხვის მომზადება.", icon: StepTwoIcon },
                        { num: "03", title: "ხელშეკრულება", desc: "ვადებისა და ხარისხის იურიდიული გარანტია.", icon: StepThreeIcon },
                        { num: "04", title: "ჩაბარება", desc: "დასრულებული ობიექტი და გარანტია.", icon: StepFourIcon }
                    ].map((step, i) => (
                        <article key={i} className={`home-process-card reveal stagger-${i+1}`}>
                            <img src={step.icon} alt="" />
                            <span>{step.num}. ეტაპი</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
