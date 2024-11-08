import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/home/inicio';
import NavBar from './pages/main/components/NavBar';
import Contacto from './pages/nosotros/Contacto';
import Api from './pages/Api/Api';


function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <NavBar/>
        <Routes>
          <Route path='/src/pages/home/inicio.jsx' element={<Inicio/>}/>
          <Route path='/src/pages/nosotros/Contacto.jsx' element={<Contacto/>}/>
          <Route path='/src/pages/Api/Api.jsx' element={<Api/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
