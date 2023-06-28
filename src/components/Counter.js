import React from "react";
import { useState } from "react";
import './Counter.css'


//colocar esto como componente y exportar :) We got it ^^
const Counter = () => {
    const [count, setCount] = useState(0);

    if ( count === 10){
      window.prompt("Enhorabuena! Logro desbloqueado: DALE CLICK!");
    };

  const clickCounter = () => {
    setCount(count + 1)
    
  };

  const resetCounter = () => {
    setCount(0)
  };

  return (
    
    <div style={{textAlign: "center"}}>
      <p>
        Contador: {count}
      </p>
      <button className="boton" onClick={resetCounter}>
        Reset! 
      </button>
      
      <button className="boton" onClick={clickCounter}> Pulsa para incrementar </button>
    </div>
  );
}

export default Counter;