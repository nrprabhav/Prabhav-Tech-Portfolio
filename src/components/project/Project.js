import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Project Name:</strong> {props.name}
              </li>
              <li>
                <strong>Deployed Link:</strong> {props.deployedLink}
              </li>
              <li>
                <strong>Repository Link:</strong> {props.repoLink}
              </li>
            </ul>
          </div>
        </div>
      );
};

export default Project;

