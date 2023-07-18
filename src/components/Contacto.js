import './Contacto.css'
import React from "react";

const Contacto = () => {
return(
    <div style={{textAlign: 'center'}}>
       <div style={{border: 'solid 2px'}} className='titulo'>
            <h1>Esta es la pagina de contacto</h1>
       </div>
       <div className='comoLlegar'>
            <h1>Podemos poner diferentes formas de llegar</h1>
       </div>
       <div className='metodos'>
            <h1>A parte, los diferentes metodos de contacto</h1>
            <ul>
                <li>Telefono 1</li>
                <li>Telefono 2</li>
                <li>Correo</li>
            </ul>
            <p>Con sus links y todo</p>
       </div>
    </div>
);

}

export default Contacto;