// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import { ConditionallyRender } from 'react-util-kit';
import HomepageView from './views/HomepageView';
import Header from './components/Header';

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';
import { ReactComponent as ButtonIcon } from './chatbot/icons/robot.svg';
import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showChatbot, toggleChatbot] = useState(true);
  return (
    <BrowserRouter>
      <>
        <Header user={user} setUser={setUser} />
        <Routes>
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
