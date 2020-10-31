import React, { useEffect } from 'react';
import AOS from 'aos';
import './Header.css';
import me from '../../images/me.png';
import me1 from '../../images/me1.png';
// import Rectangle28 from '../../images/Rectangle28.png'; 
import Rectangle26 from '../../images/Rectangle26.png';
import Capture from '../../images/Capture.PNG';
import Capture1 from '../../images/Capture1.PNG';
import Capture2 from '../../images/Capture2.PNG';
import Capture3 from '../../images/Capture3.PNG';
import screen2 from '../../images/screen2.png';
import screen3 from '../../images/screen3.png';
import background from '../../images/background.jpg';
import 'aos/dist/aos.css';
import Navbar from '../Navbar/Navbar';
import OysorjoRayOyshi from '../../file/OysorjoRayOyshi.pdf';


const Header = () => {  
      
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[])
    return (    
    
        <div className="bg-light">              
            <div className="header">
                <Navbar></Navbar>
            </div>
            <main className="l-main">
                <section className="home bd-grid" id="home">
                    <div className="home_data">
                        <h1 data-aos="fade-down" className="home_title">Hi,<br/>I'am <span className="home_title-color">Ayshi</span><br/>Web Developer</h1>
                        <a href={OysorjoRayOyshi} download="OysorjoRayOyshi.pdf" data-aos="fade-down" className="button">Download My Resume</a>
                    </div>
                    <div className="home_social">
                        <a href="https://www.linkedin.com/in/aysajo-ray-ayshi-ba278b1b1/" data-aos="fade-down" className="home_social-icon"><i class='bx bxl-linkedin'></i></a>
                        <a href="#" data-aos="fade-down" className="home_social-icon"><i class='bx bxl-behance' ></i></a>
                        <a href="https://github.com/ayshi-roy" data-aos="fade-down" className="home_social-icon"><i class='bx bxl-github' ></i></a>
                    </div>
                    <div data-aos="fade-down" className="home_img">
                        <img src={me} alt="" />
                    </div>
                </section>
        
            {/* === about === */}
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
            {/* == skill == */}
            <section className="skills section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container bd-grid">
                    <div>
                        <h2 data-aos="fade-left" className="skills_subtitle">professional skills</h2>
                        <p data-aos="fade-left" className="skills_text">lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur</p>

                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-html5 skills_icon'></i>
                                <span className="skills_name">HTML5</span>
                            </div>
                            <div>
                                <span className="skills_percentage">95%</span>
                            </div>
                            <div className="skills_bar skills_html"></div>
                        </div>
                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-css3 skills_icon'></i>
                                <span className="skills_name">CSS</span>
                            </div>
                            <div>
                                <span className="skills_percentage">85%</span>
                            </div>
                            <div className="skills_bar skills_css"></div>
                        </div>
                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-javascript skills_icon' ></i>
                                <span className="skills_name">JAVASCRIPT</span>
                            </div>
                            <div>
                                <span className="skills_percentage">75%</span>
                            </div>
                            <div className="skills_bar skills_java"></div>
                        </div>
                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-react skills_icon'></i>
                                <span className="skills_name">REACT.JS</span>
                            </div>
                            <div>
                                <span className="skills_percentage">65%</span>
                            </div>
                            <div className="skills_bar skills_react"></div>
                        </div>
                    </div>
                    <div>
                        <img data-aos="fade-left" src={background} alt="" className="skills_img"/>
                    </div>
                </div>                
            </section>
            {/* work */}
            <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work_container bd-grid">
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={Capture} alt="" className=""></img>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={screen2} alt="" className=""></img>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={screen3} alt="" className=""></img>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={Capture1} alt="" className=""></img>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={Capture2} alt="" className=""></img>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <img src={Capture3} alt="" className=""></img>
                    </div>
                </div>
            </section>
            {/* === contact === */}
            <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact_container bd-grid">
                    <form action="" className="contact_form">
                        <input type="text" placeholder="name" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input"></input>
                        <input type="email" placeholder="email" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input"></input>
                        <textarea name="text" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input" id="" cols="0" rows="10"></textarea>
                        <input type="button" value="submit" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_button"></input> 
                    </form>
                </div>
            </section>
        </main> 
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
             
    </div>      
    );
};

export default Header;