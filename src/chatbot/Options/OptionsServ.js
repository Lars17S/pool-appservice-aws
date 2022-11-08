/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Options.css';

function OptionsServ(props) {
  return (
    <div className="options-container">
      <Link to="/maintenance">
        <button onClick={props.actionProvider.handleManBtn} className="option-button">
          Matenimiento
        </button>
      </Link>
      <Link to="/installation">
        <button onClick={props.actionProvider.handleInstBtn} className="option-button">
          Instalaciones
        </button>
      </Link>
    </div>
  );
}

export default OptionsServ;
