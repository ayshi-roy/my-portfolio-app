import React from 'react';
import project1 from '../../images/project1.png' ;
import Capture from '../../images/Capture.PNG';
import Capture2 from '../../images/Capture2.PNG';
import screen2 from '../../images/screen2.png';
import screen3 from '../../images/screen3.png';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import './AllProject.css';
import Particles from 'react-particles-js';


const doctors = [
    {
        name:'Creative Agency Website',
        summery:"This is a full-stack responsive one page web agency site.In this project, client can  order a service by signing       Google log in system.It has also a admin panel where an admin can access the client order and can also add a service in main website",
        Technology:"To build this site I have used JavaScript, React.js ,Node.js,express.js, MongoDB, firebase, Heroku, react-router, bootstrap, material ui etc",
        website: "https://creative-agency-app-7d54b.firebaseapp.com/",
        github: "https://github.com/ayshi-roy/creative-agency-app",
        img: screen3
    },            
    {
        name:'Volunteer Network',
        summery:"This is a full-stack one page web agency site.In this project,User can register for volunteering work and can also cancel their submitted event if they want.It has a Google log in system before register on volunteering work",
        Technology:"To build this site I have used JavaScript, React.js ,Node.js,express.js, MongoDB, firebase, Heroku, react-router, bootstrap, material ui etc",
        website: "https://volunteer-network-app-73556.firebaseapp.com/",
        github: "https://github.com/ayshi-roy/volunteer-network-app",
        img: screen2
    },
    {
        name:'Travel guru Website',
        summery:"This is a full-stack responsive one page web agency site.•	In this project, client can booking a hotel room by signing Google, Facebook and log in system.After sign in client  can see the hotel and hotel description for the selected place.",
        Technology:"To build this site I have used JavaScript, React.js , firebase, react-router, bootstrap, material ui etc",
        website: "https://travel-guru-master-47ef6.firebaseapp.com/",
        github: "https://github.com/ayshi-roy/travel-guru-master",
        img: Capture
    },
    {
        name:'E-Commerce Website',
        summery:"This is a responsive one page e-commerce website.In this project,there have a navbar,slider and some product collection like phone and leptop. ",
        Technology:"To build this site I have used Html5,Css,bootstrap4 etc",
        website: "https://ayshi-roy.github.io/My-first-E-commerce-site/",
        github: "https://github.com/ayshi-roy/My-first-E-commerce-site",
        img: Capture2
    },
    
]

const AllProject = () => {
    return (
        <>
        
        <div className="" style={{ height: '310vh', background: '#111', position: 'relative' }}>
                <div className="">
                    <Navbar></Navbar> 
                </div>
                <Particles
                style={{ height: '800vh' }}
                params={{
                    "particles": {
                        "number": {
                            "value": 360,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 15,
                            "random": true
                        },
                        "move": {
                            "direction": "random",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 20
                            }
                        }
                    }
                }} />
                <div  style={{position: 'absolute',top: '0'}}>
                    <div className="container">
                        <div className="row">
                            {
                                doctors.map(projects => <Project projects={projects}></Project> )
                            }
                        </div>    
                    </div>
                </div>               
        </div>
    
    </>    
    );
};

export default AllProject;