import { useEffect, useRef, useState } from "react";
import "./Section.css";

const Section = ({ id, title, description, image, animation, imageRight }) => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [hasStartedAnimation, setHasStartedAnimation] = useState(!animation);
    const [showStaticImage, setShowStaticImage] = useState(!animation);

    useEffect(() => {
        if (!animation || !sectionRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasStartedAnimation(true);
                observer.disconnect();
            }
        }, { threshold: 0.35 });

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [animation]);

    useEffect(() => {
        if (!hasStartedAnimation || showStaticImage || !videoRef.current) return;

        videoRef.current.play().catch(() => {
            setShowStaticImage(true);
        });
    }, [hasStartedAnimation, showStaticImage]);

    return (
        <section id={id} ref={sectionRef} className={`split-section ${imageRight ? 'reverse' : ''}`}>
            <div className="section-half illustration-container">
                {animation && hasStartedAnimation && !showStaticImage ? (
                    <video
                        ref={videoRef}
                        className="section-animation"
                        src={animation}
                        muted
                        playsInline
                        preload="metadata"
                        poster={image}
                        onEnded={() => setShowStaticImage(true)}
                        aria-label={title}
                    />
                ) : (
                    <img src={image} alt={title} />
                )}
            </div>
            <div className="section-half text-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Section;
