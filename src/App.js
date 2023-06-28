import './App.css';
import SobreMi from './components/SobreMi';
import MiSitio from './components/MiSitio';
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
              <li ><Link to ="tarifas">Celebraciones realizadas</Link></li>
              <li ><Link to ="contacto">Contacto</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/proyects' Component={Proyectos} />
            <Route path='/myself' Component={SobreMi} />
            <Route path='/' Component={MiSitio} />
          </Routes>
        </Router>
       
     </header>   
     
  );
}

export default App;
