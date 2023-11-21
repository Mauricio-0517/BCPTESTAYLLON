import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./componentes/Header";
import Cuerpo from "./componentes/Cuerpo";
import NuevoCliente from "./componentes/NuevoCliente";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Cuerpo />} />
        <Route path="/nuevocliente" element={<NuevoCliente />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} />
        
        
        {/* <Route path="/verificar-certificacion" element={<VerificarFirma />} />
        <Route path="/verificar-certificacion/:id" element={<VerPdfFirmadocodigo />} /> */}
      </Routes>
    </Router>

    
    
    </>
  )
}

export default App
