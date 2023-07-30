import './Contacto.css'
import React from "react";

const Contacto = () => {
return(
    <div style={{textAlign: 'center'}}>
       <div style={{border: 'solid 2px'}} className='tituloContacto'>
            <h1>Esta es la pagina de contacto</h1>
       </div>
       <div className='comoLlegar'>
            <h1>Podemos poner diferentes formas de llegar</h1>
       </div>
       <div className='metodos'>
            <h1>A parte, los diferentes metodos de contacto</h1>
            <ul className='metodosLista'>
                <li>Contacto/Reserva: Refugio +34 608 86 79 26</li>
                <li>Contacto/Reserva: Servando +34 637 06 45 33</li>
                <li>Correo: info@lacasadelboss.es</li>
            </ul>
       </div>
    </div>
);

}

export default Contacto;