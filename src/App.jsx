import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ImagenesProvider } from './componentes/Context/imagenContext';
import Home from './pages/home';
import Admin from './pages/Admin';
import Navbar from './componentes/Navbar';
import NotFound from './componentes/NotFound';
// import About from './components/About';
// import NotFound from './components/NotFound';

function App() {
  return (
    <ImagenesProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ImagenesProvider>
  );
}

export default App;