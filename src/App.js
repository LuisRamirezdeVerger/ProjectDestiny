import './App.css';
import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    <>
    
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
        </Router>
     </header>
     </>
    //</div>
   
   
  );
}

export default App;
