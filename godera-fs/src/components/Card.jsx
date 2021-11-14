import React from "react";
import { useHistory } from "react-router";
import "./Home.css";

export const Card = (props) => {
  const { description, title, _id } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/jobs/${_id}`);
  };
  return (
    <div className="card flex-pr">
      <div className="card-image"></div>
      <div className="card-content flex-pr">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleClick}>View Details</button>
      </div>
    </div>
  );
};
