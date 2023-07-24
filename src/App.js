import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import SobreMi from './components/SobreMi';
import MiSitio from './components/MiSitio';
import Horarios from './components/Horarios';
import Tarifas from './components/Tarifas';
import Celebraciones from './components/Celebraciones';
import Calendario from './components/Calendario';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

const App = () => {

    return( 
      <Router>  
        <header className="header">
          <title> La Casa del Boss</title>
            <nav className="navBar">
              <Link to="/" className='titulo'> La Casa del Boss </Link>
              <ul className="navList">
                <li><Link to ="nosotros">Quiénes somos</Link></li>
                <li ><Link to ="tarifas">Tarifas</Link></li>
                <li ><Link to ="horarios">Horarios disponibles(reservas)</Link></li>
                {/*<li ><Link to ="celebraciones">Celebraciones realizadas</Link></li>*/}
                {/* <li ><Link to ="calendario">Calendario de eventos</Link></li> */}
                <li ><Link to ="galeria">Galería</Link></li>
                <li ><Link to ="contacto">Contacto</Link></li>
              </ul>
            </nav>
        </header>   

        <Outlet />  

        <Routes>
              <Route path='/nosotros' element={<SobreMi/>} />
              <Route path='/tarifas' element={<Tarifas/>} />
              <Route path='/horarios' element={<Horarios/>} />
              <Route path='/celebraciones' element={<Celebraciones/>} />
              <Route path='/calendario' element={<Calendario/>} />
              <Route path='/galeria' element={<Galeria />} />
              <Route path='/contacto' element={<Contacto/>} />
              <Route path='/' element={<MiSitio/>} />
        </Routes>

        <footer>
          <h1>Aqui va el pie de página</h1>
          {/* //WiTech, all you need is tech... */}
        </footer>
      </Router>
   );
};

export default App;
