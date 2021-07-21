import React, {Fragment, useState} from 'react';
import Error from '../Error/error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    
    //  Definir State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
  
    //  Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value,10));
    }

    //  Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); // Evita cargar la página  y enviar datos en la URL

        //  Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //  Si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {/* El operador condicional (ternario) usa como atajo para la instrucción if*/}
            {error ? <Error mensaje="Presupuesto incorrecto"/> : null}

            <form action="" onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

               <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                /> 
            </form>
        </Fragment>
    );
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;