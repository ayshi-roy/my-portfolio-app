import React from 'react';
import '../AllProject/AllProject.css'

const Project = ({projects}) => {
    return (
        <div className="row mt-5 pt-5 ml-5 pl-5">
            <div className="col-md-5 col-12">
                <img src={projects.img} className="image-fluid project_img"></img>
            </div>
            <div className="col-md-6 col-12">
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