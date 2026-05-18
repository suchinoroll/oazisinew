import React, { useEffect, useState } from 'react';
import './AboutPage.css';
import AboutLoop from '../assets/New/aboutLoop.mp4';
import HomeAboutVisual from '../assets/New/home.AboutUsStatic.svg';
import HomeAboutAnimation from '../assets/New/home,AboutUsAnimated.mp4';
import PrincipleQualityIcon from '../assets/New/principle.quality.svg';
import PrincipleTrustIcon from '../assets/New/principle.trust.svg';
import PrincipleTimeIcon from '../assets/New/principle.time.svg';
import PrincipleServiceIcon from '../assets/New/principle.service.svg';

const AboutPage = () => {
  const [showWhoWeAreStatic, setShowWhoWeAreStatic] = useState(false);

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
      <main className="design-page">
        <header className="design-hero reveal">
          <div className="design-hero-copy">
            <span className="design-kicker">დაარსდა 2018 წელს</span>
            <h1>
              ჩვენ ვაშენებთ<br />
              <span>მომავლის ოაზისს.</span>
            </h1>
            <p className="lead">
              სანდო პარტნიორი სამშენებლო და სარემონტო სფეროში, გამოცდილი გუნდით და დასრულებული პროექტების მკაფიო ხარისხით.
            </p>
          </div>
          <div className="design-hero-media">
            <video src={AboutLoop} autoPlay muted loop playsInline poster={HomeAboutVisual} aria-label="ჩვენს შესახებ" />
          </div>
        </header>

        <section className="design-split reveal">
          <div className="design-visual-panel design-green">
            {showWhoWeAreStatic ? (
              <img src={HomeAboutVisual} alt="ვინ ვართ ჩვენ" />
            ) : (
              <video
                src={HomeAboutAnimation}
                poster={HomeAboutVisual}
                autoPlay
                muted
                playsInline
                preload="metadata"
                onEnded={() => setShowWhoWeAreStatic(true)}
                aria-label="ვინ ვართ ჩვენ"
              />
            )}
          </div>
          <div className="design-copy-panel">
            <span className="design-kicker">ჩვენი იდენტობა</span>
            <h2>ვინ ვართ ჩვენ.</h2>
            <p>ჩვენი გუნდი აერთიანებს გამოცდილი პროფესიონალების ჯგუფს. დაარსების დღიდან, ჩვენი მიზანი უცვლელია: შევქმნათ სივრცეები, რომლებიც აკმაყოფილებს უმაღლეს მოთხოვნებს და მომხმარებელთა მოლოდინებს.</p>
          </div>
        </section>

        <section className="design-grid-section">
          <h2 className="design-section-title reveal">რატომ ოაზისი?</h2>
          <div className="design-card-grid">
            <article className="design-card design-wide reveal stagger-1">
              <span className="design-kicker">გამოცდილება</span>
              <h3>გამოცდილი პროფესიონალები</h3>
              <p>ვგეგმავთ, ვაშენებთ და ვასრულებთ პროექტს ისე, რომ თითოეული ეტაპი იყოს გასაგები, კონტროლირებადი და ხარისხზე ორიენტირებული.</p>
            </article>

            <article className="design-stat-card reveal stagger-2">
              <div className="design-big-number">2018</div>
              <p>წლიდან ვქმნით ხარისხს, რომელიც დროს უძლებს და ეყრდნობა ინოვაციურ მიდგომებს.</p>
            </article>

            <article className="design-card reveal stagger-1">
              <span className="design-kicker">მიზანი</span>
              <h3>ჩვენი მიზანი</h3>
              <p>ვთავაზობთ სრული სპექტრის მომსახურებას — იდეის დაგეგმვიდან პროექტის დასრულებამდე, საერთაშორისო სტანდარტების დაცვით.</p>
            </article>

            <article className="design-card design-card-dark design-wide reveal stagger-2">
              <span className="design-kicker">ტექნოლოგია</span>
              <h3>თანამედროვე ტექნოლოგიები</h3>
              <p className="gray-text">ვეყრდნობით თანამედროვე ტექნოლოგიებსა და მაღალი ხარისხის მასალებს, რათა შედეგი სრულად შეესაბამებოდეს მომხმარებელთა მოლოდინებს.</p>
            </article>

            <article className="design-card reveal stagger-1">
              <span className="design-kicker">ნდობა</span>
              <h3>პასუხისმგებლობა</h3>
              <p>ჩვენ ვპასუხობთ თითოეულ დეტალზე. თქვენი ნდობა ჩვენი მთავარი კაპიტალია.</p>
            </article>

            <article className="design-card reveal stagger-2">
              <span className="design-kicker">სტანდარტი</span>
              <h3>პროფესიონალიზმი</h3>
              <p>ჩვენი გუნდი მუდმივად ვითარდება და ნერგავს სიახლეებს სამშენებლო პროცესში.</p>
            </article>
          </div>
        </section>

        <section className="design-process-section">
          <h2 className="design-section-title reveal">ჩვენი პრინციპები.</h2>
          <div className="design-process-grid">
            <article className="home-process-card reveal stagger-1">
              <img src={PrincipleQualityIcon} alt="" />
              <span>ხარისხი</span>
              <h3>უმაღლესი</h3>
              <p>საერთაშორისო სტანდარტების დაცვა ყოველ ეტაპზე.</p>
            </article>
            <article className="home-process-card reveal stagger-2">
              <img src={PrincipleTrustIcon} alt="" />
              <span>სანდოობა</span>
              <h3>გამჭვირვალე</h3>
              <p>ნულოვანი ფარული ხარჯები და მკაფიო კომუნიკაცია.</p>
            </article>
            <article className="home-process-card reveal stagger-3">
              <img src={PrincipleTimeIcon} alt="" />
              <span>დრო</span>
              <h3>დაცული</h3>
              <p>ჩვენ ვაფასებთ თქვენს დროს ისევე, როგორც საკუთარს.</p>
            </article>
            <article className="home-process-card reveal stagger-4">
              <img src={PrincipleServiceIcon} alt="" />
              <span>სერვისი</span>
              <h3>პრემიუმ</h3>
              <p>ინდივიდუალური მიდგომა ყველა მომხმარებელთან.</p>
            </article>
          </div>
        </section>
      </main>
  );
};

export default AboutPage;
