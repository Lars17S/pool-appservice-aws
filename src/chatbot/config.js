// Config starter code
import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from "./Options/Options";

const botName = '';

const config = {
  initialMessages: [createChatBotMessage(`¡Hola! Soy tu asistente inteligente de Albercas Cleaner ¿qué puedo hacer por ti?`, {widget: "options"})],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [{
    widgetName: "options",
    widgetFunc: (props) => <Options {...props}/>,
  }],
};

export default config;