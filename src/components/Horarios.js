import './Horarios.css'
import React, { useState } from "react";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Horarios = () => {

    const [date, setDate] = useState(new Date());

    const getDayColor = (date) => {
        //Lógica para cambiar el color del día
        const day = date.getDate();
        const month = date.getMonth();

        //Función para cambiar el color del día
        //Recuerda que Enero es el 0
        if (month === 13){
            if (day >= 5  && day <= 8 ){
            return 'blue';
        } else if (day === 10 || day === 11){
            return 'green';
        } else if (day === 3) {
            return 'green';
        }
    }

    return 'green';

        // return day === 1 ? 'red' : day === 3 ? 'green': 'blue';
    };

    return(
        <div className='horarioBackground' style={{textAlign: 'center'}}>
            {/* <div className='horarioTitulo'>
                <h1>Aqui tendremos las leyendas: Libres verde, ocupados rojo y azul evento concertado</h1>
            </div> */}
            <div className='leyenda'>
        <div className='leyenda-item'>
          <div className='leyenda-color' style={{ backgroundColor: 'green' }} />
          <div className='leyenda-text'>El color verde indica "Sala disponible"</div>
        </div>
        <div className='leyenda-item'>
          <div className='leyenda-color' style={{ backgroundColor: 'red' }} />
          <div className='leyenda-text'>El color rojo indica "Sala ocupada"</div>
        </div>
        <div className='leyenda-item'>
          <div className='leyenda-color' style={{ backgroundColor: 'blue' }} />
          <div className='leyenda-text'>El color azul indica "Evento concertado"</div>
        </div>
      </div>
            <div className='calendario'>
                <Calendar 
                value={date} 
                onChange={setDate}
                tileContent={({ date, view}) => view === 'month' && (
                    <div
                    style={{
                        backgroundColor: getDayColor(date),
                        height: '100%',
                        borderRadius: '50%',
                    }}
                    />
                )}
                />
            </div>
        </div>
    );

};

export default Horarios;