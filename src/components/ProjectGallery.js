import React from "react";
import Project from "./project/Project";
import projects from "../projects.json"

function ProjectGallery() {
    return (
        <Project
            name={projects[0].name}
            image={projects[0].image}
            deployedLink={projects[0].deployedLink}
            repoLink={projects[0].repoLink}
        />
    );
};

export default ProjectGallery;