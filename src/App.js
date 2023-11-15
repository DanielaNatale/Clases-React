import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/ejemplo1';
import Ejemplo2 from './pages/ejemplo2';
import Mapa from './pages/mapa';
import Json from './pages/json';
import Api from './pages/api';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
          <Routes>
            {/* Aca vamos a declarar todas las rutas */}
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Ejemplo1' element={<Ejemplo1/>}></Route>
          <Route path='/Ejemplo2' element={<Ejemplo2/>}></Route>
          <Route path='/Ejemplo3' element={<Mapa/>}></Route>
          <Route path='/Json' element={<Json/>}></Route>
          <Route path='/api' element={<Api/>}></Route>

          </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
