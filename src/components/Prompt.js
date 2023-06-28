import React, { useState } from 'react';


const Prompt = () => {
    const [ventana, setVentana] = useState();

    const click = () => {
        const inputNombre = window.prompt('Esto es un PROMPT. Ingresa un nombre para que te salude!');

        if (inputNombre){
            setVentana(inputNombre);
        }
    };
    return(
        //Termina estooooo
        <div>
            <button onClick={click}> Clickea aquí </button>
            <div>
            {ventana && <p>Hola, {ventana}</p>}
            </div>
        </div>
    );

};


export default Prompt;



// const MyComponent = () => {
//   const [name, setName] = useState('');

//   const handleClick = () => {
//     const inputName = window.prompt('Por favor ingrese su nombre');
//     if (inputName) {
//       setName(inputName);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Haz clic aquí</button>
//       {name && <p>Hola, {name}!</p>}
//     </div>
//   );
// };