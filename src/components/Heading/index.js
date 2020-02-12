import React from "react";
import "./style.css";


function Heading(props) {
    return(
        <div  className="jumbotron">
          
            <h1>How far can you go with out selecting the same pic twice?</h1>
            {props.children}
          
        </div>
    )}    

export default Heading;