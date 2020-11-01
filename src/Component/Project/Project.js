import React, { useEffect } from 'react';
import '../AllProject/AllProject.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({projects}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[])
    return (
        <div className="row mt-5 pt-5 ml-5 pl-5">
            <div className="col-md-5 col-12">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src={projects.img} className="image-fluid project_img">                
                </img>
            </div>
            <div className="col-md-6 col-12" data-aos="zoom-in-left">
                <h1 className="text-white">{projects.name}</h1>
                <br/>
                <h4 className="text-white">Technology</h4>
                <p className="text-white">{projects.Technology}</p>
                <br/>
                <h5 className="text-white">Summary</h5>
                <p className="text-white">{projects.summery}</p>
                <br/>
                <div className="col-12">
                   <a href={projects.website} type="button" class="btn btn-outline-primary mr-2">Website Link</a>
                   <a href={projects.github} type="button" class="btn btn-outline-info">Github Link</a>
                </div>
            </div>
        </div>
    );
};

export default Project;