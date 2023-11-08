import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
          {/* <Route path='/' element={nombredelcomponente}></Route> */}
          </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
