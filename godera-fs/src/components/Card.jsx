import React from "react";
import "./Home.css";

export const Card = (props) => {
  const { description, title } = props;
  return (
    <div className="card flex-pr">
      <div className="card-image"></div>
      <div className="card-content flex-pr">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>View Details</button>
      </div>
    </div>
  );
};
