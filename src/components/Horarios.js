import './Horarios.css'
import React, { useState } from "react";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Horarios = () => {

    const [date, setDate] = useState(new Date());

    const getDayColor = (date) => {
        //Función para cmabiar el color del día
        const day = date.getDate();
        const month = date.getMonth();

        if (month === 6){
            if (day >=3  && day <= 5 ){
            return 'blue';
        } else if (day === 6 || day === 7){
            return 'red';
        } else if (day === 8) {
            return 'blue';
        }
    }

    return 'green';

        // return day === 1 ? 'red' : day === 3 ? 'green': 'blue';
    };

    return(
        <div style={{textAlign: 'center'}}>
            <div className='titulo'>
                <h1>Aqui tendremos las leyendas: Libres verde, ocupados rojo y azul evento concertado</h1>
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