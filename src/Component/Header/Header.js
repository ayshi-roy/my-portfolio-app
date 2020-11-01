import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import me from '../../images/me.png'; 
import Rectangle26 from '../../images/Rectangle26.png';
import Capture from '../../images/Capture.PNG';
import Capture1 from '../../images/Capture1.PNG';
import Capture2 from '../../images/Capture2.PNG';
import Capture3 from '../../images/Capture3.PNG';
import screen2 from '../../images/screen2.png';
import screen3 from '../../images/screen3.png';
import background from '../../images/background.jpg';
import Navbar from '../Navbar/Navbar';
import OysorjoRayOyshi from '../../file/OysorjoRayOyshi.pdf';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

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
                        <h1 data-aos="fade-down" className="home_title">Hi,<br/>I'am <span className="home_title-color">Ayshi</span><br/> <span style={{fontSize:'41px'}}>I'am a Web Developer</span></h1>
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
                <About></About>    
            {/* == skill == */}
            <section className="skills section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container bd-grid">
                    <div>
                        <h2 data-aos="fade-left" className="skills_subtitle">professional skills</h2>
                        <p data-aos="fade-left" className="skills_text">
                             Junior front end developer proficient with Html5, Css3, flexbox, Bootstrap,ES6 JavaScript, with extensive knowledge of with React, Redux, and server-side node.js express.js, MongoDB. 
                        </p>
                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-bootstrap skills_icon'></i>
                                <span className="skills_name">Bootstrap</span>
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
                            <div data-aos="fade-left">
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
                        <div data-aos="fade-left" className="skills_data">
                            <div className="skills_names">
                                <i class='bx bxl-nodejs skills_icon'></i>
                                <span className="skills_name">Node.Js</span>
                            </div>
                            <div data-aos="fade-left">
                                <span className="skills_percentage">45%</span>
                            </div>
                            <div className="skills_bar skills_css"></div>
                        </div>
                    </div>
                    <div>
                        <img data-aos="fade-left" src={background} alt="" className="skills_img"/>
                    </div>
                </div>                
            </section>
            {/* work */}
            <section className="work section" id="work">
                <h2 className="section-title">My Work</h2>

                <div className="work_container bd-grid">
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                            <img src={Capture} alt="" className=""></img>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                            <img src={screen2} alt="" className=""></img>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                           <img src={screen3} alt="" className=""></img>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                            <img src={Capture1} alt="" className=""></img>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                            <img src={Capture2} alt="" className=""></img>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-down" className="work_img">
                        <Link to="/allProject">
                            <img src={Capture3} alt="" className=""></img>
                        </Link>
                    </div>
                </div>
            </section>
            {/* === contact === */}
            <Contact></Contact>
        </main>
        <Footer></Footer> 
    </div>      
    );
};

export default Header;