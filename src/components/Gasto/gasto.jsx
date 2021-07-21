import React from 'react'
import PropTypes from 'prop-types';

//  Se deja implícito el return por medio de los paréntesis porque no se realizará ninguna operación, solo se mostrará el contenido HTML
const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombregasto}
            <span className="gasto">${gasto.cantidad}</span>
        </p>
    </li>
);
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;