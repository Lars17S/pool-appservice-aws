import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message.toLowerCase(); 
    if (message.includes('direccion') | message.includes('encuentran') | message.includes('ubicacion') | message.includes('ubicación') | message.includes('dirección')) {
      actions.handleLocation();
    }
    if (message.includes('horario') | message.includes('horarios') | message.includes('abiertos') | message.includes('abren')) {
      actions.handleWrokingDays();
    }
    if (message.includes('crear') | message.includes('agendar')) {
      actions.handleAgeCitas();
    }
    if (message.includes('cambiar') | message.includes('modificar fecha')) {
      actions.handleModCitas();
    }
    if (message.includes('cancelar') | message.includes('agendar')) {
      actions.handleCanCitas();
    }
    if (message.includes('cuando es') | message.includes('fecha de mi cita') ) {
      actions.handleConCitas();
    }
    if (message.includes('contacto') | message.includes('numero') | message.includes('correo')) {
      actions.handleContacto();
    }
    if (message.includes('metodo de pago') | message.includes('pago')) {
      actions.handleMetodosPago();
    }
    if (message.includes('productos')) {
      actions.handleProductos();
    }
    if (message.includes('servicios')) {
      actions.handleServicios();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;