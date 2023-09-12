import "./Horarios.css";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import bomba from "..images/eventos/cartelBomba.png"

//erstamos intentando poner el cartelm del bomba

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

    // return day === 1 ? 'red' : day === 3 ? 'green': 'blue';
  };

  return (
    <div className="horarioBackground" style={{ textAlign: "center" }}>
      {/* <div className='horarioTitulo'>
                <h1>Aqui tendremos las leyendas: Libres verde, ocupados rojo y azul evento concertado</h1>
            </div> */}
      <div className="leyenda">
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: "green" }} />
          <div className="leyenda-text">
            El color verde indica "Sala disponible"
          </div>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: "red" }} />
          <div className="leyenda-text">
            El color rojo indica "Sala ocupada"
          </div>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color" style={{ backgroundColor: "blue" }} />
          <div className="leyenda-text">
            El color azul indica "Evento concertado"
          </div>
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
      <div class="evento-container">
  <div class="evento-imagen">
    {/* <img url={bomba} alt="Cartel del evento"/> */}
  </div>
  <div class="evento-info">
    <div class="titulo">
      <h2>Nombre del Evento</h2>
    </div>
    <div class="informacion">
      <p>Información del evento...</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Horarios;
