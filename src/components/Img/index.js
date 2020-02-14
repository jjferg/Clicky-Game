import React from "react";
import "./style.css";

function Img(props) {
  return (
    <div role="img" className="card click-item ">
      <div className="img-container">
        <button onClick={() => props.handleIncremen(props.id)}>
          <img alt={props.name} src={props.image} />
        </button>
      </div>
    </div>
  );
}

export default Img;
