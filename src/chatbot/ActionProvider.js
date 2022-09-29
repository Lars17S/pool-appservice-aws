import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleLocation = () => {
    const botMessage = createChatBotMessage('Nuestra dirección es Calle 53, Delegacion Coyoacan CDMX');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContacto = () => {
    const botMessage = createChatBotMessage('Nuestro telefono es 55-7962-1523 y nuestro correo es pool.app.service@gmail.com');

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

  

  const handleProductos = () => {
    const botMessage = createChatBotMessage('Para ver el catalogo de productos, accede a la sección de productos en esta página');

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



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleLocation, handleWrokingDays, handleContacto, handleMetodosPago,
            handleProductos, handleServicios, handleAgeCitas, handleConCitas,
            handleCanCitas, handleModCitas
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;