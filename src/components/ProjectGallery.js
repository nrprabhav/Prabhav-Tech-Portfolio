import React from "react";
import Project from "./project/Project";
import projects from "../projects.json"

function ProjectGallery() {
    return (
    <div>
        <h1 className="text-center display-1">Project Portfolio</h1>
        <div class="d-flex justify-content-around flex-wrap">
        {projects.map(item => <Project projects={item} />)}
        </div>
    </div>
    );
};

export default ProjectGallery;