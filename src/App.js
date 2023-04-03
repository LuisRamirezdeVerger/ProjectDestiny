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
        <title> Portfolio RdV</title>
        </head>
        <Router>
          <nav className="navBar">
            <Link to="/"> Mi sitio </Link>
            
            <ul className="navList">
              
              <li><Link to ="myself">Yo mismo</Link></li>
              
              <li ><Link to ="proyects">Proyectos</Link></li>
              <li ><Link to ="contact">Contacto</Link></li>
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
