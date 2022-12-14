/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

function MessageParser({ children, actions }) {
  const parse = (message) => {
    message = message.toLowerCase();
    if (message.includes('direccion') || message.includes('encuentran') || message.includes('ubicacion') || message.includes('ubicación') || message.includes('dirección')) {
      actions.handleLocation();
    }
    if (message.includes('horario') || message.includes('horarios') || message.includes('abiertos') || message.includes('abren')) {
      actions.handleWrokingDays();
    }
    if (message.includes('crear') || message.includes('agendar')) {
      actions.handleAppBtn();
    }
    if (message.includes('cambiar') || message.includes('modificar fecha')) {
      actions.handleAppBtn();
    }
    if (message.includes('cancelar') || message.includes('agendar')) {
      actions.handleAppBtn();
    }
    if (message.includes('cuando es') || message.includes('fecha de mi cita')) {
      actions.handleAppBtn();
    }
    if (message.includes('contacto') || message.includes('numero') || message.includes('correo')) {
      actions.handleContacto();
    }
    if (message.includes('metodo de pago') || message.includes('pago')) {
      actions.handleMetodosPago();
    }
    if (message.includes('servicios')) {
      actions.handleServBtn();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => React.cloneElement(child, {
        parse,
        actions,
      }))}
    </div>
  );
}

export default MessageParser;
