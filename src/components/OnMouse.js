import React, { useState } from 'react';
//rewrite 


//Declaramos la funcion que contiene el evento
const RatonEncima = () => {
    //Declaramos 2 variables, (son las que controlan el evento) y le damos el estado de "falso" 
    const [encima, setEncima] = useState(false);

    //Le damos valor segun convenga
    const ratonDentro = () => {
        setEncima(true);
    };

    const ratonFuera = () => {
      setEncima(false);
    };


    //Hasta aqui la funcionalidad, ahora toca hacerla visible
    return(
        //Creamos un div style, que seria como un css
        <div style={{
            color: encima ? 'blue': 'black',
            textAlign: encima ? 'start': 'end'
        }}
        //introducimos los eventos
        //onMouseEnter/Leave, son eventos ya existentes, simplementes las calleamos y decimos que variable tiene que usar
        onMouseEnter={ratonDentro}
        onMouseLeave={ratonFuera}
        >
          
            <h1>El texto cambiará al pasar el ratón por encima </h1>
            
        </div>
    );

}


/*
const OnMouse = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={
        {
            color: hover ? 'lightblue' : 'black',
            textAlign: hover ? 'start' : 'center'
        }
    }

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>¡Hola! Pasa el cursor del mouse sobre mí.</h1>
    </div>
  );
}
*/
export default RatonEncima;