import { useState } from 'react'
import './Header.css'
import logo from "./../media/img/Logo_BCP.svg";

function App() {
  return (
    <div className="header">
      <img src="https://www.bcp.com.bo/Content/images/principal/banderita.svg" className="bandera" alt="bandera" />
      <div className="header-body">
        <img src={logo} className="logo-bcp" alt="bcp logo" />
      </div>
    </div>
  )
}

export default App
