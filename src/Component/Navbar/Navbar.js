import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <a className="navbar-brand" href="#">
                    <h4 className="nav_nam">AYSHI</h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/home">
                                <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                            </Link>                            
                        </li>
                        <li className="nav-item">
                            <Link to="/allProject">
                                <a className="nav-link mr-5" href="#">My Projects</a>
                            </Link>                                                        
                        </li>
                        <li className="nav-item">
                            <Link to="/order">
                               <a className="nav-link mr-5" href="#">Dash-Board</a>
                            </Link>                                
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="#">Contact Us</a>                            
                        </li>
                    </ul>                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;