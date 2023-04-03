import React, { useState } from 'react';
//linea 14

const Prompt = () => {
    const [ventana, setVentana] = useState('');

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
            {ventana && <p>Hola, {ventana}</p>}
        </div>
    );

};



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

export default Prompt;