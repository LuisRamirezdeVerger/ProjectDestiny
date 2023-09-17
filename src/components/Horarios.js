import "./Horarios.css";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import bomba from "../images/eventos/cartelBomba.png";
import YT from "../images/logos/logoYoutube.png";
import IG from "../images/logos/logoInstagram.png";


const Horarios = () => {
  const [date, setDate] = useState(new Date());

  const getDayColor = (date) => {
    //Lógica para cambiar el color del día
    const day = date.getDate();
    const month = date.getMonth();

    //Función para cambiar el color del día
    //Recuerda que Enero es el 0
    if (month === 10) {
      if (day >= 5 && day <= 8) {
        return "green";
      } else if (day === 4 || day === 18 || day === 25) {
        return "blue";
      } else if (day === 3) {
        return "green";
      }
    }

    if (month <= 9) {
      return "red";
    }

    if (month === 11) {
      if ((day >= 5 && day <= 7) || (day >= 12 && day <= 14)) {
        return "blue";
      } else if ((day >= 19 && day <= 21) || (day >= 26 && day <= 28)) {
        return "blue";
      } else if (day === 3) {
        return "green";
      }
    }

    return "green";
  };

  return (
    <div className="horarioBackground" style={{ textAlign: "center" }}>
      <div className="leyenda">
        <div className="leyenda-item">
          <div
            className="leyenda-color"
            style={{ backgroundColor: "green", width: "20%" }}
          />
          <div className="leyenda-text">"Sala disponible"</div>
        </div>
        <div className="leyenda-item">
          <div
            className="leyenda-color"
            style={{ backgroundColor: "red", width: "20%" }}
          />
          <div className="leyenda-text">"Sala ocupada"</div>
        </div>
        <div className="leyenda-item">
          <div
            className="leyenda-color"
            style={{ backgroundColor: "blue", width: "20%" }}
          />
          <div className="leyenda-text">"Evento concertado"</div>
        </div>
      </div>
      <div className="calendario">
        <Calendar
          value={date}
          onChange={setDate}
          tileContent={({ date, view }) =>
            view === "month" && (
              <div
                style={{
                  backgroundColor: getDayColor(date),
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            )
          }
        />
      </div>
      <div className="tituloEvento">
        <p className="textoTituloEvento">
          No te pierdas nuestros PRÓXIMOS EVENTOS
        </p>
      </div>
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
              <h2 className="h2-Informacion">Sobre el artista:</h2>
              <h4>- Finalista de la 6ª edición "Tierra de Talentos".<br/><br/> - Semifinalista de "La Voz".</h4> <br/>
              <h4 className="eventoRRSS">
                <a href="https://www.youtube.com/watch?v=utvkxaEbwpE">
                  <img className="logoYT" src={YT} alt="YT logo" />
                </a>
                <a href="https://www.instagram.com/rafaelruiz_elbomba/?hl=es">
                  <img className="logoIG" src={IG} alt="IG logo" />
                </a>
              </h4>
              <h2 className="h2-Informacion">Hora:</h2>
              <h4 className="h4-Informacion"> Desde las 19:00 hasta las 00:00</h4>
              <h2 className="h2-Informacion">Precio:</h2>
              <h4 className="h4-Informacion">20 taquilla. 15 anticipada. Asiento no numerado</h4>
              <h2 className="h2-Informacion">Fecha:</h2>
              <h4 className="h4-Informacion"> 04 de Noviembre</h4>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
