import React from "react";
import Project from "./project/Project";
import projects from "../projects.json"

function ProjectGallery() {
    return (
    <div class="d-flex justify-content-around flex-wrap">
        {projects.map(item => <Project projects={item} />)}
    </div>
    );
};

export default ProjectGallery;