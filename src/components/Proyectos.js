import './Proyectos.css'
import React from "react";
import Counter from './Counter';
import RatonEncima from './OnMouse';
import Prompt from './Prompt'; 

const Proyectos = () => {
return(
    <div style={{textAlign: 'center'}}>
        <div style={{borderStyle: 'dotted'}}>
            <h1>Contador</h1>
            <Counter />
        </div>
        <br/>
        <div>
            <h1>On Mouse "event"</h1>
            <RatonEncima />
        </div>
        <div>
            <h1>Prompts</h1>
            <Prompt />
        </div>
    </div>
);

}

export default Proyectos;