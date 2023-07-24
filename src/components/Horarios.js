import './Horarios.css'
import React, { useState } from "react";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Horarios = () => {

    const [date, setDate] = useState(new Date());

    const getDayColor = (date) => {
        //Función para cmabiar el color del día
        const day = date.getDate();
        return day === 1 ? 'red' : day === 3 ? 'green': 'blue';
    };

    return(
        <div style={{textAlign: 'center'}}>
            <div className='titulo'>
                <h1>Aqui tendremos los horarios: Libres, ocupados o tengamos un evento concertado</h1>
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