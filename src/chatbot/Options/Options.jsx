/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import './Options.css';

function Options(props) {
  const [options, setOptions] = useState([]);

  async function getUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      return userData;
    } catch {
      return null;
    }
  }

  async function getOptions() {
    const user = await getUser();
    const optionsTmp = user ? [
      {
        text: 'Citas',
        handler: props.actionProvider.handleAppBtn,
        id: 1,
      },
      { text: 'Servicios', handler: props.actionProvider.handleServBtn, id: 2 },
      { text: 'Contacto', handler: props.actionProvider.handleContacto, id: 3 },
    ] : [{ text: 'Contacto', handler: props.actionProvider.handleContacto, id: 3 }];
    setOptions(optionsTmp);
  }

  useEffect(() => {
    getOptions();
  }, []);

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
}

export default Options;
