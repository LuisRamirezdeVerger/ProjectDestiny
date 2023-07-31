import './Contacto.css'
import React from "react";
import nine from '../images/9.png';

const Contacto = () => {
return(
    <div style={{textAlign: 'center'}}>
       <div className='tituloContacto'>
            <h1>¡Contacta con nosotros!</h1>
       </div>
       <div className='metodos'>
            {/* <h1>A parte, los diferentes metodos de contacto</h1> */}
            <ul className='metodosLista'>
                <li>Contacto/Reserva: Refugio +34 608 86 79 26</li>
                <li>Contacto/Reserva: Servando +34 637 06 45 33</li>
                <li>Correo: info@lacasadelboss.es</li>
            </ul>
       </div>
       <div className='comoLlegar'>
            <h1>Estamos en "C/ Lamarque de Novoa, Nº 7, Local bajo</h1>
       {/* </div>
       <div className='imagen'> */}
       <a className='imageLlegar' href='https://www.google.es/maps/place/C.+Lamarque+de+Novoa,+7,+41008+Sevilla/@37.400513,-5.9802766,17z/data=!3m1!4b1!4m6!3m5!1s0xd126eac8344cb85:0x5332127ccee4b6e4!8m2!3d37.4005088!4d-5.9777017!16s%2Fg%2F11c166xvx5?entry=ttu'>
               <img src={nine} alt='Descripci'/>
            </a>
       </div>
       
    </div>
);

}

export default Contacto;