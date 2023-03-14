import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.projects.name} src={props.projects.image} height={200} width={150}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Project Name:</strong> {props.projects.name}
              </li>
              <li>
                <strong> <a href={props.projects.deployedLink}>Deployed Link</a></strong>
              </li>
              <li>
                <strong> <a href={props.projects.repoLink}>Repository Link</a></strong>
              </li>
            </ul>
          </div>
        </div>
      );
};

export default Project;

