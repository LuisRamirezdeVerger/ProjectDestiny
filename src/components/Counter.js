import React from "react";
import { useState } from "react";



//colocar esto como componente y exportar :) We got it ^^
const Counter = () => {
    const [count, setCount] = useState(0);


  const clickCounter = () => {
    setCount(count + 1)
  }

  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    
    <div>
      <p>
        count: {count}
      </p>
      <button onClick={clickCounter}> Increment </button>
    </div>
  );
}

export default Counter;