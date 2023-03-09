import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.projects.name} src={props.projects.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Project Name:</strong> {props.projects.name}
              </li>
              <li>
                <strong>Deployed Link:</strong> {props.projects.deployedLink}
              </li>
              <li>
                <strong>Repository Link:</strong> {props.projects.repoLink}
              </li>
            </ul>
          </div>
        </div>
      );
};

export default Project;

