import "./Contacto.css";
import React from "react";

const Contacto = () => {
  return (
    <div className="contactoBackground" style={{ textAlign: "center" }}>
      <div className="tituloContacto">
        <h1>¡Contacta con nosotros!</h1>
      </div>
      <div className="metodos">
        {/* <h1>A parte, los diferentes metodos de contacto</h1> */}
        <ul className="metodosLista">
          <li className="contactoLi">Contacto/Reserva: Refugio +34 608 86 79 26</li>
          <li  className="contactoLi">Contacto/Reserva: Servando +34 637 06 45 33</li>
          <li  className="contactoLi">Correo: info.reservas@lacasadelboss.es</li>
        </ul>
      </div>
      <div className="comoLlegar">
        <h1>Estamos en "C/ Lamarque de Novoa, Nº 7, Local bajo</h1>
        {/* </div>
       <div className='imagen'> */}
        <a
          className="imageLlegar"
          href="https://www.google.es/maps/dir//C.+Lamarque+de+Novoa,+7,+41008+Sevilla/@37.4005088,-5.9777017,17z/data=!4m18!1m8!3m7!1s0xd126eac8344cb85:0x5332127ccee4b6e4!2sC.+Lamarque+de+Novoa,+7,+41008+Sevilla!3b1!8m2!3d37.4005088!4d-5.9777017!16s%2Fg%2F11c166xvx5!4m8!1m0!1m5!1m1!1s0xd126eac8344cb85:0x5332127ccee4b6e4!2m2!1d-5.9777017!2d37.4005088!3e2?entry=ttu"
        >
        </a>
      </div>
    </div>
  );
};

export default Contacto;
