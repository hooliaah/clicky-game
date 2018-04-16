import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card mx-auto">
    <a onClick={() => props.cardClick(props.id)}>
      <img alt={props.name}
        src={props.image}
      />
    </a>
  </div>
);

export default Card;