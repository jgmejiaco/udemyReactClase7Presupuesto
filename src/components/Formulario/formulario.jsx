import React, {useState} from 'react';
import Error from '../Error/error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    //  Definir useSate para mostrar el gasto y el saldo
    const [nombregasto, guardarNombreGasto] =  useState('');
    const [cantidad, guardarCantidad] =  useState(0);
    const [error, guardarError] =  useState(false);

    //  Cuando agregamos el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombregasto,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto);

        // pasar el gasto al componente ppal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetaer el form
        guardarNombreGasto('');
        guardarCantidad(0);
    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}

            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-with"
                    placeholder="Ej. Transporte"
                    value={nombregasto}
                    onChange={e => guardarNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-with"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            /> 
        </form>
     );
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;