// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import { ConditionallyRender } from 'react-util-kit';
import { Auth, Hub } from 'aws-amplify';
import HomepageView from './views/HomepageView';
import ServicesView from './views/ServicesView';
import Header from './components/Header';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';
import { ReactComponent as ButtonIcon } from './chatbot/icons/robot.svg';
import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  async function getUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      return userData;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then((userData) => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          break;
        default:
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <BrowserRouter>
      <>
        <Header user={user} />
        <Routes>
          <Route path="/services" element={<ServicesView />} />
          <Route exact path="/" element={<HomepageView />} />
        </Routes>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={(
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            )}
          />
        </div>

        <button
          type="button"
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
      </>
    </BrowserRouter>
  );
}

export default App;
