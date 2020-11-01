import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import me1 from '../../images/me1.png';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[])
    return (
    <section className="about section" id="about">
        <h2 className="section-title">About</h2>
        <div className="about_container bd-grid">
            <div data-aos="fade-right" className="about_img">
                <img src={me1} alt="" />
            </div>
            <div data-aos="fade-right" className="about_subtitle">
                <h2 className="text-primary">I'am Ayshi</h2>
                <br/>
                <p data-aos="fade-right" className="about_text text-secondary">I’m a MERN Stack Developer. I know MongoDB, express, react, node js, and continue deep learning on these. I love to learn more about new web technology.
                To take a challenging role as a  web developer in a technical company where I could utilize my skills in web design and front-end web development, and use these skills in providing quality service to the company.
                </p>
            </div>
        </div>
    </section>
    );
};

export default About;