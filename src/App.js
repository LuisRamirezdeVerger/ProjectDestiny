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
