import './App.css';
import Counter from './components/Counter';
import SobreMi from './components/SobreMi';
//import React, { useState } from 'react'
import Contador from './components/Counter'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proyectos from './components/Proyectos';

const App = () => {
//onMouseEnter
      return( 

      <header className="header">
        <Router>
          <nav className="navBar">
            {/* <div className="logoNavBar"> */}
            <Link to="/"> Mi sitio </Link>
            
            <ul className="navList">
              
              <li><Link to ="myself">Yo mismo</Link></li>
              
              <li ><Link to ="proyects">Proyectos</Link></li>
              <li ><Link to ="contact">Contacto</Link></li>
            </ul>
            {/* </div> */}
          </nav>
          <Routes>
            <Route path='/proyects' Component={Proyectos} />
            <Route path='/myself' Component={SobreMi} />
          </Routes>
        </Router>
     </header>   
  );
}

export default App;
