import "../eventos/bomba.css";
import React from "react";

const Bomba = () => {
  return (
    <div className="evento-container">
      <div className="evento-imagen">
        <img src={bomba} alt="Cartel del evento" />
      </div>
      <div className="evento-info">
        <div className="titulo">
          <h1 style={{ color: "white" }}>El Bomba</h1>
        </div>
        <div className="informacion">
          <p className="p-Informacion" style={{ color: "white" }}>
            <h4>
              Rafael Ruiz (El Bomba)
              <br /> - Semifinalista de "La Voz" 2020. <br />
              <br />- Finalista de la 6ª edición "Tierra de Talentos" 2022.
            </h4>{" "}
            <br />
            <h4 className="eventoRRSS">
              <a href="https://www.youtube.com/watch?v=utvkxaEbwpE">
                <img className="logoYT" src={YT} alt="YT logo" />
              </a>
              <a href="https://www.instagram.com/rafaelruiz_elbomba/?hl=es">
                <img className="logoIG" src={IG} alt="IG logo" />
              </a>
            </h4>
            <h2 className="h2-Informacion">Hora:</h2>
            <h4 className="h4-Informacion">
              {" "}
              Apertura de puertas a las 17:00 inicio a las 19:00
            </h4>
            <h2 className="h2-Informacion">Precio:</h2>
            <h4 className="h4-Informacion">
              Reservas abiertas para grupos y empresas. Asiento no numerado
            </h4>
            <h2 className="h2-Informacion">Fecha:</h2>
            <h4 className="h4-Informacion"> 04 de Noviembre</h4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bomba;
