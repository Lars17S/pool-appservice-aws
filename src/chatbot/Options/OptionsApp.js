/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './Options.css';

function OptionsApp(props) {
  const options = [
    { text: 'Consultar', handler: props.actionProvider.handleConsBtn, id: 1 },
    { text: 'Cancelar', handler: props.actionProvider.handleCanBtn, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
}

export default OptionsApp;
