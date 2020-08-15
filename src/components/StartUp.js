import React from 'react';
import {Badge} from 'react-bootstrap';

const StartUp=props=>{
    return(
        <li>
           <h2><Badge variant="success">{props.name},{props.location}</Badge>{' '}</h2> 
        </li>
    );

}


export default StartUp;