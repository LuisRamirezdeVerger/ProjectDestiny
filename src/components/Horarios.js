import './Horarios.css'
import React from "react";

const Horarios = () => {
return(
    <div style={{textAlign: 'center'}}>
        <div className='titulo'>
            <h1>Aqui tendremos los horarios: Libres, ocupados o tengamos un evento concertado</h1>
        </div>
        <div className='calendario'>
            El calendario que muestra los días viene aquí
        </div>
    </div>
);

}

export default Horarios;