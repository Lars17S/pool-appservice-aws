/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './Options.css';

function OptionsServ(props) {
  const options = [
    { text: 'Mantenimiento', handler: props.actionProvider.handleManBtn, id: 1 },
    { text: 'Instalaciones', handler: props.actionProvider.handleInstBtn, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
}

export default OptionsServ;
