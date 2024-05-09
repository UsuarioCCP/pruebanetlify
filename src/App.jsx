import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './componentes/Navbar';
import Baner from './componentes/Baner';
// import About from './components/About';
// import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Baner />
    </BrowserRouter>
  );
}

export default App;