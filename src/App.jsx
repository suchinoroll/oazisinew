import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import StatsSection from './Components/StatsSection';
import WorkProcessSection from './Components/WorkProcessSection.jsx';
import "./App.css";

// Assets
import Logo from "./assets/New/logoNew.svg";
import HomeBanner from "./assets/New/Home.banner.mp4";
import HomeBannerMobile from "./assets/New/home.bannermobile.mp4";
import HomeAboutVisual from "./assets/New/home.AboutUsStatic.svg";
import HomeAboutAnimation from "./assets/New/home,AboutUsAnimated.mp4";

const AboutPage = lazy(() => import('./Components/AboutPage'));
const ServicesPage = lazy(() => import('./Components/ServicesPage.jsx'));
const ContactSection = lazy(() => import('./Components/ContactSection'));

const ScrollToTop = ({ setIsWhiteMode, setIsScrolled }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);

        if (pathname === '/') {
            setIsWhiteMode(false);
            setIsScrolled(false);
        } else {
            setIsWhiteMode(true);
            setIsScrolled(true);
        }
    }, [pathname, setIsWhiteMode, setIsScrolled]);
    return null;
};

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWhiteMode, setIsWhiteMode] = useState(false);

    useEffect(() => {
        const rootMargin = '0px 0px -30% 0px'; // Detect when 70% of section is visible
        const heroEl = document.querySelector('#hero');
        const statsEl = document.querySelector('.stats-section');
        const processEl = document.querySelector('.home-process-section');

        // Toggle navbar visibility based on Hero presence
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsScrolled(!entry.isIntersecting || entry.intersectionRatio < 0.6);
            });
        }, { threshold: [0, 0.6] });
        if (heroEl) heroObserver.observe(heroEl);

        // Manage background theme and dynamic section titles
        const modeObserver = new IntersectionObserver((entries) => {
            let white = false;
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    if (entry.target === statsEl || entry.target === processEl) white = true;
                }
            });

            if (window.location.pathname === '/') {
                setIsWhiteMode(white);
            }
        }, { threshold: [0.5, 0.75], rootMargin });

        if (statsEl) modeObserver.observe(statsEl);
        if (processEl) modeObserver.observe(processEl);

        return () => {
            heroObserver.disconnect();
            modeObserver.disconnect();
        };
    }, []);

    return (
        <Router>
            <ScrollToTop setIsWhiteMode={setIsWhiteMode} setIsScrolled={setIsScrolled} />
            <div className={`app-container ${isWhiteMode ? 'white-bg' : ''}`}>
                <header className="fixed-nav-wrapper">
                    <div className="nav-left-content">
                        <div className={`nav-logo-slot ${isScrolled ? 'show' : ''}`}>
                            <img src={Logo} alt="Oasis Logo" />
                        </div>
                    </div>
                    <Navbar />
                </header>

                <Routes>
                    <Route path="/" element={
                        <main>
                            <section id="hero" className="section-hero">
                                <video
                                    className="hero-bg-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-hidden="true"
                                >
                                    <source src={HomeBannerMobile} media="(max-width: 700px)" type="video/mp4" />
                                    <source src={HomeBanner} type="video/mp4" />
                                </video>
                            </section>

                            <Section
                                id="about-intro"
                                title="ჩვენს შესახებ"
                                description="შპს „ოაზისი“ დაარსდა 2018 წელს და წარმოადგენს სანდო პარტნიორს სამშენებლო და სარემონტო სფეროში. ჩვენი გუნდი აერთიანებს გამოცდილ პროფესიონალებს, რომელთა მონაწილეობით არაერთი წარმატებული პროექტი განხორციელდა.

ვთავაზობთ სრული სპექტრის სამშენებლო და სარემონტო მომსახურებას — იდეის დაგეგმვიდან პროექტის სრულ დასრულებამდე. ვეყრდნობით თანამედროვე ტექნოლოგიებსა და მაღალი ხარისხის მასალებს, რათა საბოლოო შედეგი სრულად შეესაბამებოდეს საერთაშორისო სტანდარტებს და მომხმარებლის მოლოდინებს."
                                image={HomeAboutVisual}
                                animation={HomeAboutAnimation}
                                imageRight={false}
                            />
                            <StatsSection />
                            <WorkProcessSection />
                        </main>
                    } />
                    <Route path="/about" element={<Suspense fallback={null}><AboutPage /></Suspense>} />
                    <Route path="/services" element={<Suspense fallback={null}><ServicesPage /></Suspense>} />
                    <Route path="/contact" element={<Suspense fallback={null}><ContactSection /></Suspense>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
