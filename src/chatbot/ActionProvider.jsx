/* eslint-disable react/prop-types */
import React from 'react';

function ActionProvider({ createChatBotMessage, setState, children }) {
  const handleLocation = () => {
    const botMessage = createChatBotMessage('Nuestra dirección es Calle 53, Delegacion Coyoacan CDMX');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContacto = () => {
    const botMessage = createChatBotMessage('Direccion: Calle 53, Delegacion Coyoacan CDMX. Telefono: 55 7962 1523. Correo: pool.app.service@gmail.com');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMetodosPago = () => {
    const botMessage = createChatBotMessage('Aceptamos pagos en efectivo, PayPal y tarjetas de crédito Visa y MasterCard');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWrokingDays = () => {
    const botMessage = createChatBotMessage('Nuestro horario de trabajo es de Lunes a Viernes de 8:00 a 16:00');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleServicios = () => {
    const botMessage = createChatBotMessage('Para conocer el catalogo de servicios, ingresa al apartado de servicios en esta página.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAgeCitas = () => {
    const botMessage = createChatBotMessage('Para agendar una cita, comuniquese a nuestro correo pool.app.service@gmail.com');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleConCitas = () => {
    const botMessage = createChatBotMessage('Para consultar su cita, envié un correo a pool.app.service@gmail.com con su numero de servicio');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCanCitas = () => {
    const botMessage = createChatBotMessage('Para cancelar su cita, envié un correo a pool.app.service@gmail.com con su numero de servicio y motivo de cancelación');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleModCitas = () => {
    const botMessage = createChatBotMessage('Para modificar la fecha de su cita, envié un correo a pool.app.service@gmail.com con su numero de servicio y la nueva fecha');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAppBtn = () => {
    const botMessage = createChatBotMessage(
      'Puedes consultar o cancelar tus citas',
      {
        widget: 'AppOptions',
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleConsBtn = () => {
    const botMessage = createChatBotMessage(
      'Ingresa el folio de la cita',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCanBtn = () => {
    const botMessage = createChatBotMessage(
      'Ingresa el folio de la cita a cancelar',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleServBtn = () => {
    const botMessage = createChatBotMessage(
      'Puedes consultar los servicios de instalación o servicios de mantenimiento',
      {
        widget: 'ServOptions',
      },
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleManBtn = () => {
    const botMessage = createChatBotMessage(
      'Servicios de mantenimiento',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleInstBtn = () => {
    const botMessage = createChatBotMessage(
      'Servicios de instalación',
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleProdBtn = () => {
    const botMessage = createChatBotMessage(
      'Puedes consultar los productos en la sección de servicios',
      // {
      //   widget: "Agregar widget de servicios",
      // }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => React.cloneElement(child, {
        actions: {
          handleLocation,
          handleWrokingDays,
          handleContacto,
          handleMetodosPago,
          handleServicios,
          handleAgeCitas,
          handleConCitas,
          handleCanCitas,
          handleModCitas,
          handleAppBtn,
          handleServBtn,
          handleProdBtn,
          handleConsBtn,
          handleCanBtn,
          handleManBtn,
          handleInstBtn,
        },
      }))}
    </div>
  );
}

export default ActionProvider;
