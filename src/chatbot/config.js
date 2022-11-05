/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
// Config starter code
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options/Options';
import OptionsApp from './Options/OptionsApp';
import OptionsServ from './Options/OptionsServ';

const botName = '';

const config = {
  initialMessages: [createChatBotMessage('¡Hola! Soy tu asistente inteligente de Albercas Cleaner ¿qué puedo hacer por ti?', { widget: 'options' })],
  botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'AppOptions',
      widgetFunc: (props) => <OptionsApp {...props} />,
    },
    {
      widgetName: 'ServOptions',
      widgetFunc: (props) => <OptionsServ {...props} />,
    },
  ],
};

export default config;
