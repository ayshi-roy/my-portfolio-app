import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[])
    return (
        <footer className="footer">
            <p className="footer_title" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">Ayshi</p>

            <div className="footer_social" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                <a href="#" className="footer_icon"><i class='bx bxl-facebook-circle' ></i></a>
                <a href="#" className="footer_icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" className="footer_icon"><i class='bx bxl-twitter' ></i></a>                
            </div>
            <p data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">&#169; 2020 copyright all right reserved</p>
        </footer>
    );
};

export default Footer;