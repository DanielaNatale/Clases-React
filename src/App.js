import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/ejemplo1';
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
          {<Route path='/Ejemplo1' element={<Ejemplo1/>}></Route>}
          {/* <Route path='/Ejemplo2' element={nombredelelemento}></Route>
           <Route path='/Ejemplo3' element={nombredelelemento}></Route>  */}

          </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
