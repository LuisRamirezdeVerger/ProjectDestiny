import './App.css';
import { Link, BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import Tech from './components/Tech';
import MiSitio from './components/MiSitio';
import Horarios from './components/Horarios';
import Tarifas from './components/Tarifas';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';

const App = () => {

    return( 
      <Router>  
        <header className="header">
            <nav className="navBar">
              <Link to="/" className='tituloNavBar'></Link>
              <ul className="navList">
                <li className='liApp'><Link to ="nosotros">Nosotros</Link></li>
                {/* <li ><Link to ="tarifas">Tarifas</Link></li> */}
                <li className='liApp'><Link to ="horarios">Reservas</Link></li>
                {/*<li ><Link to ="celebraciones">Celebraciones realizadas</Link></li>*/}
                {/* <li ><Link to ="calendario">Calendario de eventos</Link></li> */}
                <li className='liApp'><Link to ="galeria">Galería</Link></li>
                <li className='liApp'><Link to ="contacto">Contacto</Link></li>
              </ul>
            </nav>
        </header>   

        <Outlet />  

        <Routes>
              <Route path='/nosotros' element={<SobreMi/>} />
              <Route path='/tarifas' element={<Tarifas/>} />
              <Route path='/horarios' element={<Horarios/>} />
              <Route path='/galeria' element={<Galeria />} />
              <Route path='/contacto' element={<Contacto/>} />
              <Route path='/tech' element={<Tech/>} />
              <Route path='/' element={<MiSitio/>} />
        </Routes>

      <Footer/>
      </Router>
   );
};

export default App;
