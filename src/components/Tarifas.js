import './Tarifas.css'
import React from "react";

const Tarifas = () => {
return(
    <div className='tarifas'>
        <div className='estilo1'>
            <h1>Estos son nuestros modelos de tarifas</h1>
       </div>
       <div className='separador'></div>
       <div className='estilo2'>
            <div className='textoEstilo2'>
                <h1>Estas son nuestras tarifas 1 </h1>
            </div>
            <div className='tarifasEstilo2'>
                <div className='listaTarifas'>
                    <p>Tarifas 1</p>
                    <p>Tarifas 2</p>
                    <p>Tarifas 3</p>
                </div>
            </div>
       </div>
       <div className='separador'></div>
       <div className='estilo'>
            <div className='textoEstilo'>
                <h1>Estas son nuestras tarifas 2 </h1>
            </div>
            <div className='tarifasEstilo'>
                <div className='listaTarifas'>
                    <p>Tarifas 1</p>
                    <p>Tarifas 2</p>
                    <p>Tarifas 3</p>
                </div>
            </div>
       </div>
       <div className='separador'></div>
    </div>
);

}

export default Tarifas;