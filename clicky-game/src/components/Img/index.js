import React from "react";
import "./style.css"

function Img(props) {
  return (
    <div role="img" className="click-item">
    <button onClick={()=>props.handleIncrement(props.id)}>
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
      </button>
    </div>
  )
}


export default Img;