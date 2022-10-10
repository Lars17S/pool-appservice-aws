/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './Options.css';

function Options(props) {
  const options = [
    {
      text: 'Citas',
      handler: props.actionProvider.handleAppBtn,
      id: 1,
    },
    { text: 'Servicios', handler: props.actionProvider.handleServBtn, id: 2 },
    { text: 'Productos', handler: props.actionProvider.handleProdBtn, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
}

export default Options;