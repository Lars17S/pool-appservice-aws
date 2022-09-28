import "@aws-amplify/ui-react/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageView from "./views/HomepageView";
import Header from "./components/Header";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={<HomepageView />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
