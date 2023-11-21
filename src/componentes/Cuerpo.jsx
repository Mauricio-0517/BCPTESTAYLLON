import { useEffect, useState } from 'react';
import './Cuerpo.css';

import axios from 'axios';

function Cuerpo() {
    const [datos,setDatos] = useState([]);
    const [clientes,setClientes] = useState([]);
    const [cuentas,setCuentas] = useState([]);
    
    useEffect(() => {
        obtenerClientes();
        obtenerCuentas();
    }, []);

    function obtenerClientes() {
        axios.get('http://localhost:5175/api/cliente/lista')
        .then(response => {
            console.log("clientes");
            console.log(response.data.response);
            setClientes(response.data.response)
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
    }
    
    function obtenerCuentas() {
        axios.get('http://localhost:5175/api/cuenta/lista')
        .then(response => {
            console.log("cuentas");
            console.log(response.data.response);
            setCuentas(response.data.response)
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
    }
    
    useEffect(() => {
        // Filtrar las cuentas que tienen un cliente asociado y unir datos de cliente y cuenta
        const cuentasFiltradas = cuentas
          .filter(cuenta =>
            clientes.some(cliente => cliente.idIn === cuenta.fkClienteIdIn)
          )
          .map(cuenta => {
            const clienteAsociado = clientes.find(cliente => cliente.idIn === cuenta.fkClienteIdIn);
            return {
              idIn: clienteAsociado.idIn,  // Cambia esto a la propiedad correcta de la cuenta
              documento: clienteAsociado.documentoVc,
              nombreClienteVc: clienteAsociado.nombresVc,
              paternoClienteVc: clienteAsociado.paternoVc,
              maternoClienteVc: clienteAsociado.maternoVc,
              nombreCuentaVc: cuenta.nombreCuentaVc,
              tipoMonedaVc: cuenta.tipoMonedaVc,
              sucursalVc: cuenta.sucursalVc

            };
          });
      
        setDatos(cuentasFiltradas);
      }, [cuentas, clientes]);
      

    return (
        <div className="cuerpo-fondo">
        <div className="cuerpo">
        
            <div className="contenedor-tabla">
            <table className="tabla">
                <thead>
                    <th>Documento</th>
                    <th>Nombres</th>
                    <th>Paterno</th>
                    <th>Materno</th>
                    <th>Tipo de Cuenta</th>
                    <th>Tipo de Moneda</th>
                    <th>Sucursal</th>
                </thead>
                <tbody>
                    {datos && datos.map((elemento) => (
                        <tr key={elemento.idIn}>
                            <td>{elemento.documento}</td>
                            <td>{elemento.nombreClienteVc}</td>
                            <td>{elemento.paternoClienteVc}</td>
                            <td>{elemento.maternoClienteVc}</td>
                            <td>{elemento.nombreCuentaVc}</td>
                            <td>{elemento.tipoMonedaVc}</td>
                            <td>{elemento.sucursalVc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default Cuerpo;
