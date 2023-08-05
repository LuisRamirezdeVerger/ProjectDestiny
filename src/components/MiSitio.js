import "./MiSitio.css";

const MiSitio = () => {
  return (
    <div className="background-miSitio">
      <div className="quienesSomos">
        <h1 style={{ textAlign: "center" }}>
          Bienvenid@ a "La Casa del Boss":
        </h1>

        <p className="pTexto">
          Tu destino de eventos y celebraciones excepcionales. Somos una empresa
          especializada en la organización de eventos y alquiler de espacios,
          ofreciendo una nueva alternativa moderna para que vivas momentos
          inolvidables.
        </p>

        <p className="pTexto">
          Nuestro enfoque y filosofía se centran en brindarte un lugar
          visualmente espectacular y llamativo, donde podrás disfrutar de
          eventos pre-planificados o reservar el local para celebrar tu propia
          fiesta, reunión, meeting o conferencia.
        </p>

        <p className="pFinal">
          Atentamente, <br /> La Casa del Boss
        </p>
      </div>
    </div>
  );
};

export default MiSitio;
