import "./Horarios.css";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import bomba from "../images/eventos/cartelBomba.png";
// import QRB from "../images/eventos/bombaQR.png";
// import zambomba from "../images/eventos/cartelZambomba.JPG";
// import YT from "../images/logos/logoYoutube.png";
// import IG from "../images/logos/logoInstagram.png";

const Horarios = () => {
  const [date, setDate] = useState(new Date());

  const getDayColor = (date) => {
    //Lógica para cambiar el color del día
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getYear();

    //Función para cambiar el color del día
    //Recuerda que Enero es el 0
    // if (month === 10) {
    //   if (day >= 5 && day <= 8) {
    //     return "green";
    //   } else if (day === 4 || day === 18 || day === 25) {
    //     return "green";
    //   } else if (day === 3) {
    //     return "green";
    //   }
    // }

    if (month === 0 || month === 1 || month === 2)  {
      return "green";
    }

    if (month <= 10 || month === 0) {
      return "red";
    }

    if (year === 2023) {
      return "green";
    }

    if (month === 0) {
      return "green";
    }

    if (month === 10) {
      if (
        day === 6 ||
        day === 14 ||
        day === 21 ||
        day === 22 ||
        day === 23 ||
        day === 28 ||
        day === 29 ||
        day === 30
      ) {
        return "red";
      } else if ((day >= 19 && day <= 21) || (day >= 26 && day <= 28)) {
        return "red";
      } else if (day === 3) {
        return "red";
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
        {/* <div className="leyenda-item">
          <div
            className="leyenda-color"
            style={{ backgroundColor: "blue", width: "20%" }}
          />
          <div className="leyenda-text">"Evento concertado"</div>
        </div> */}
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
      {/* <div className="tituloEvento">
        <p className="textoTituloEvento">
          No te pierdas nuestros PRÓXIMOS EVENTOS
          <p className="pInfoEventos">
            (Todos los eventos son exclusivos para 60 personas y finalizan a las
            00:00)
          </p>
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
            <p className="p-Informacion" style={{ color: "white" }}> */}
              {/* <h2 className="h2-Informacion">El artista:</h2> */}
              {/* <h4>
                Rafael Ruiz (El Bomba)
                <br /> - Semifinalista de "La Voz" 2020. <br />
                <br />- Finalista de la 6ª edición "Tierra de Talentos" 2022.
              </h4>{" "}
              <br />
              <h4 className="eventoRRSS">
                <a href="https://www.youtube.com/watch?v=utvkxaEbwpE">
                  <img className="logoYT" src={YT} alt="YT logo" />
                </a> */}
                {/* <a href="https://buy.stripe.com/eVag1a2Q441C8iQ6op">
                  <img className="logoIG" src={QRB} alt="IG logo" />
                </a> */}
                {/* <a href="https://buy.stripe.com/eVag1a2Q441C8iQ6op">
                  <img className="logoIG" src={IG} alt="IG logo" />
                </a>
              </h4>
              
              <h2 className="h2-Informacion">PRÓXIMAMENTE</h2> */}
              {/* <div className="QRB">
          <img src={QRB} alt="QR pago" />
        </div> */}
              {/* <h4 className="h4-Informacion">
                {" "}
                Apertura de puertas a las 17:00 inicio a las 19:00
              </h4>
              <h2 className="h2-Informacion">Precio:</h2>
              <h4 className="h4-Informacion">
                Reservas abiertas para grupos y empresas. Asiento no numerado
              </h4>
              <h2 className="h2-Informacion">Fecha:</h2>
              <h4 className="h4-Informacion"> Proximamente </h4> */}
            {/* </p>
          </div>
        </div>
      </div>
      <div className="separadorEventos"></div> */}

      {/* <div className="evento-container">
        <div className="evento-imagen">
          <img src={flaka} alt="Cartel del evento" />
        </div>
        <div className="evento-info">
          <div className="titulo">
            <h1 style={{ color: "white" }}>La Flaka</h1>
          </div>
          <div className="informacion">
          <h4 className="eventoRRSSJ" style={{margin: "-2.4vh"}}>
                <a href="https://www.youtube.com/@LaFlakaOficial">
                  <img className="logoYTJ" src={YT} alt="YT logo" />
                </a>
                <a href="https://www.instagram.com/laflakaoficial/">
                  <img className="logoIGJ" src={IG} alt="IG logo" />
                </a>
              </h4>
            <p className="p-InformacionFlaka" style={{ color: "white" }}>
               <h2 className="h2-Informacion"> {" "}</h2> 
              <h4 className="h4Jess" style={{width:"80%"}}>
                <div></div>
                <br /> La artista sevillana conocida como "La Flaka", lleva más
                de 12 años encima de los escenarios. Después de casi 1 año sin
                pisar tierras sevillanas, La Flaka vuelve y se presenta en<br/> La
                Casa del Boss con un espectáculo íntimo y exclusivo.
                <br />
              </h4>{" "}              
              <h2 className="h2-Informacion">Hora:</h2>
              <h4 className="h4-Informacion">
                Apertura de puertas a las 17:00 inicio a las 19:00
              </h4>
              
              <h2 className="h2-Informacion">Precio:</h2>
              <h4 className="h4Jess">
                Espectáculo + Cena Fría.
                70€/pareja. Solo anticipada. <br/>Asiento no numerado.
                <br /> Incluye:
              <br/>
                - Salpicón de marisco por persona <br/>- Ensaladilla de la
                mamá del Boss para 2 <br />- Tortilla española de la mamá del
                Boss para 2 <br/>- Queso para 2<br /> - Salchichón
                ibérico para 2<br/> - Chorizo ibérico para 2 <br />-
                Consumición (refresco o tercio)
              </h4>
               <h2 className="h2-Informacion">Fecha:</h2>
              <h4 className="h4-Informacion"> 25 de Noviembre</h4>
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="separadorEventos"></div>

      <div className="evento-container">
        <div className="evento-imagen">
          <img src={zambomba} alt="Cartel del evento" />
        </div>
        <div className="evento-info">
          <div className="titulo">
            <h1 style={{ color: "white" }}>Zambomba Flamenca</h1>
          </div>
          <div className="informacion">
            <p
              className="p-Informacion"
              style={{ color: "white", fontSize: "3vh", paddingTop: "1vh" }}
            > */}
              {/* <h2 className="h2-Informacion">Los artistas:</h2> */}
              {/* <h4 className="h4Zam" style={{ width: "80%" }}>
                Sumérgete en la magia de la música tradicional española mientras
                te transportamos las vibraciones de Andalucía. Nuestra Zambomba
                Flamenca es una celebración de la vida y la cultura, llena de
                ritmo contagioso y pasión desbordante.
              </h4>
              <br />
              <h4 className="eventoRRSS"> */}
                {/* <a href="https://www.youtube.com/watch?v=utvkxaEbwpE">
                  <img className="logoYT" src={YT} alt="YT logo" />
                </a>
                <a href="https://www.instagram.com/rafaelruiz_elbomba/?hl=es">
                  <img className="logoIG" src={IG} alt="IG logo" />
                </a> */}
              {/* </h4> */}
              {/* <h2 className="h2-Informacion">Hora:</h2> */}
              {/* <h4 className="h4-Informacion"> </h4>
              <h2 className="h2-Informacion" style={{ margin: "-3vh" }}>
                Precio:
              </h2>
              <h4 className="h4Zam" style={{ paddingTop: "3vh" }}>
                Reservas abiertas para grupos y empresas.
              </h4>
              <h2 className="h2-Informacion">Fecha:</h2>
              <h4 className="h4ZamFecha">
                {" "}
                Días 6, 14, 21, 22, 23, 28, 29, 30 de Diciembre
              </h4>
            </p>
          </div>
        </div>
      </div>
      <div className="separadorEventos"></div> */}
    </div>
  );
};

export default Horarios;
