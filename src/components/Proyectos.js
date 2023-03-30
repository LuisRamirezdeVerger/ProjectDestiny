import './Proyectos.css'
import React from "react";
import OnMouse from './OnMouse';
import Counter from './Counter';
import RatonEncima from './OnMouse';

const Proyectos = () => {
return(
    <>
    <h1>Contador</h1>
    <Counter />
    <h1>On Mouse "event"</h1>
    <RatonEncima />
    
    </>
);

}

export default Proyectos;