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
          <li className="contactoLi">Teléfono: +34 644 693 562  </li>
          <li  className="contactoLi">Correo: info.reservas@lacasadelboss.es</li>
        </ul>
      </div>
      <div className="comoLlegar">
        <h1>Estamos en "C/ Lamarque de Novoa, Nº 7, Local bajo</h1>
        {/* </div>
       <div className='imagen'> */}
        <a
          className="imageLlegar"
          href="https://www.google.es/maps/place/La+Casa+del+Boss/@37.4005156,-5.9778454,17.75z/data=!4m6!3m5!1s0xd126ff149f4fd05:0xd42f3c7a9a626c0e!8m2!3d37.4005088!4d-5.9777017!16s%2Fg%2F11v9wrdjlc?entry=ttu"
        >
        </a>
      </div>
    </div>
  );
};

export default Contacto;
