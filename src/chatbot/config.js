// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "";

const config = {
  initialMessages: [
    createChatBotMessage(
      `¡Hola! Soy tu asistente inteligente de Albercas Cleaner ¿qué puedo hacer por ti? ${botName}`
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
