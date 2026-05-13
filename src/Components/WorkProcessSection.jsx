import './WorkProcessSection.css';
import StepOneIcon from '../assets/New/services.step1.svg';
import StepTwoIcon from '../assets/New/services.step2.svg';
import StepThreeIcon from '../assets/New/services.step3.svg';
import StepFourIcon from '../assets/New/services.step4.svg';

const steps = [
    { num: "01", title: "დათვალიერება", desc: "ობიექტის უფასო შეფასება და აზომვა.", icon: StepOneIcon },
    { num: "02", title: "ბიუჯეტი", desc: "დეტალური ხარჯთაღრიცხვის მომზადება.", icon: StepTwoIcon },
    { num: "03", title: "ხელშეკრულება", desc: "ვადებისა და ხარისხის იურიდიული გარანტია.", icon: StepThreeIcon },
    { num: "04", title: "ჩაბარება", desc: "დასრულებული ობიექტი და გარანტია.", icon: StepFourIcon }
];

const WorkProcessSection = () => {
    return (
        <section className="home-process-section">
            <div className="home-process-inner">
                <h2>სამუშაო პროცესი.</h2>
                <div className="home-process-grid">
                    {steps.map((step) => (
                        <article className="home-process-card" key={step.num}>
                            <img src={step.icon} alt="" />
                            <span>{step.num}. ეტაპი</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcessSection;
