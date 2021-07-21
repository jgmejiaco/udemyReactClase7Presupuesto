import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => (
    <p className="alert alert-danger error">{mensaje}</p>
    // <p className="alert alert-danger error">Hubo un error</p>
); 
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;