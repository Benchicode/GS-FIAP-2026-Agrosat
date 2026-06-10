import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Problema  from './pages/Problema';
import Tecnologia from './pages/Tecnologia';
import Objetivos  from './pages/Objetivos';
import Beneficios from './pages/Beneficios';
import Aplicacao  from './pages/Aplicacao';
import Beta       from './pages/Beta';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"           element={<Problema/>}/>
        <Route path="/tecnologia" element={<Tecnologia/>}/>
        <Route path="/objetivos"  element={<Objetivos/>}/>
        <Route path="/beneficios" element={<Beneficios/>}/>
        <Route path="/aplicacao"  element={<Aplicacao/>}/>
        <Route path="/beta"       element={<Beta/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
