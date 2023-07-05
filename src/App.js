import './App.css';

import SobreMi from './components/SobreMi';
import MiSitio from './components/MiSitio';
import Horarios from './components/Horarios';
import Tarifas from './components/Tarifas';
import Celebraciones from './components/Celebraciones';
import Calendario from './components/Calendario';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

//import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proyectos from './components/Proyectos';

const App = () => {

  /*const images = [

    {
      url:  'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vegaradio.com%2Fmedia%2Fk2%2Fitems%2Fcache%2F1d11e5ebeed3c42540f69555bbe34fb8_XL.jpg&tbnid=IHCVPr4A9LH-_M&vet=12ahUKEwiUrK2Mu_X_AhWEnCcCHYZRC-cQMygKegUIARDUAQ..i&imgrefurl=https%3A%2F%2Fwww.vegaradio.com%2Fnoticias%2Fllega-el-buenos-aires-blues-festival&docid=c_UwjO2vSFnnjM&w=1366&h=572&itg=1&q=el%20blues%20del%20boss&ved=2ahUKEwiUrK2Mu_X_AhWEnCcCHYZRC-cQMygKegUIARDUAQ',
      title: "titulo A",
    },
  
  ];*/

      return( 
      <header className="header">
        <head>
        <title> Project Desiny</title>
        </head>
        
        <Router>
          <nav className="navBar">
            <Link to="/"> Project Destiny </Link>
            
            <ul className="navList">
              
              <li><Link to ="nosotros">Quiénes somos</Link></li>
              <li ><Link to ="tarifas">Tarifas</Link></li>
              <li ><Link to ="horarios">Horarios disponibles</Link></li>
              <li ><Link to ="celebraciones">Celebraciones realizadas</Link></li>
              <li ><Link to ="calendario">Calendario de eventos</Link></li>
              <li ><Link to ="galeria">Galería</Link></li>
              <li ><Link to ="contacto">Contacto</Link></li>
            </ul>
          </nav>
          

          <Routes>
            <Route path='/nosotros' Component={SobreMi} />
            <Route path='/tarifas' Component={Tarifas} />
            <Route path='/horarios' Component={Horarios} />
            <Route path='/celebraciones' Component={Celebraciones} />
            <Route path='/calendario' Component={Calendario} />
            <Route path='/galeria' Component={Galeria} />
            <Route path='/contacto' Component={Contacto} />
            <Route path='/' Component={MiSitio} />
          </Routes>
        </Router>

        
       
     </header>  
      
     
  );
}

export default App;
