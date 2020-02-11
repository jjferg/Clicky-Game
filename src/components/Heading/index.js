import React from "react";
import "./style.css";


function Heading(props) {
    return(
        <div  className="jumbotron">
          <div className="container">
            <h1>How far can you go with out selecting the same pic twice?</h1>
            {props.children}
          </div>
        </div>
    )}    

export default Heading;