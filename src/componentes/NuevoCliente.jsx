import React, { useState } from 'react';
import axios from 'axios';
import "./NuevoCliente.css";
const FormularioCliente = () => {
  const [formGuardar, setFormGuardar] = useState({
    documentoVc: '',
    nombresVc: '',
    paternoVc: '',
    maternoVc: '',
    fechaNacimientoDt: '',
    estadoCivilVc: '',
    domicilioVc: '',
    nacionalidadVc: '',
    fechaRegistroDt: new Date(),
  });
  const [formGuardarCuenta, setFormGuardarCuenta] = useState({
    fkClienteIdIn:  "",
    nombreCuentaVc: "",
    tipoCuentaVc: "",
    tipoMonedaVc: "",
    sucursalVc: "",
    fechaRegistroDt: new Date(),
  });

  const handleChange = (e) => {
    setFormGuardar({
      ...formGuardar,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCuenta = (e) => {
    setFormGuardarCuenta({
      ...formGuardarCuenta,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCliente = async (e) => {
    e.preventDefault();
    console.log(formGuardar);

    try {
      // Enviar la solicitud para crear un nuevo cliente
      const response = await axios.post('http://localhost:5175/api/cliente/guardar', formGuardar);
      console.log('Cliente creado:', response.data);
      setFormGuardarCuenta({
        ...formGuardarCuenta,
        [fkClienteIdIn]: response.data.response.idIn,
      });
      
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  const handleSubmitCuenta = async (e) => {
    e.preventDefault();
    console.log(formGuardarCuenta);

    try {
      const response = await axios.post('http://localhost:5175/api/cuenta/guardar', formGuardarCuenta);
      console.log('Cuenta creada:', response.data);
      
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <div className="contenedor-formularioenviar">
      <form className="cuerpo-formularioenviar" onSubmit={handleSubmitCliente}>
        <h3>CREAR CLIENTE</h3>
        <label>
          Documento:
          <input type="text" name="documentoVc" value={formGuardarCuenta.documentoVc} onChange={handleChange} />
        </label>
        <label>
          Nombres:
          <input type="text" name="nombresVc" value={formGuardar.nombresVc} onChange={handleChange} />
        </label>
        <label>
          Paterno:
          <input type="text" name="paternoVc" value={formGuardar.paternoVc} onChange={handleChange} />
        </label>
        <label>
          Materno:
          <input type="text" name="maternoVc" value={formGuardar.maternoVc} onChange={handleChange} />
        </label>
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimientoDt"
            value={formGuardar.fechaNacimientoDt}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Crear Cliente</button>
      </form>


      <form className="cuerpo-formularioenviar" onSubmit={handleSubmitCuenta}>
        <h3>CREAR CUENTA</h3>
        
        <label>
          Nombre Cuenta:
          <input type="text" name="nombreCuentaVc" value={formGuardarCuenta.nombreCuentaVc} onChange={handleChangeCuenta} />
        </label>
        <label>
          Tipo Cuenta:
          <input type="text" name="tipoCuentaVc" value={formGuardarCuenta.tipoCuentaVc} onChange={handleChangeCuenta} />
        </label>
        <label>
          Tipo Moneda:
          <input type="text" name="tipoMonedaVc" value={formGuardarCuenta.tipoMonedaVc} onChange={handleChangeCuenta} />
        </label>
        <label>
          Sucursal:
          <input type="text" name="sucursalVc" value={formGuardarCuenta.sucursalVc} onChange={handleChangeCuenta} />
        </label>
        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
};

export default FormularioCliente;
