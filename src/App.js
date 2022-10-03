import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myprofile from "./components/Myprofile/Myprofile";
import SignIn from "./components/SignIn/SignIn";
import Main from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import Userlist from "./pages/Userlist/Userlist";

const App = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main isLogIn={isLogIn} />} />
          <Route path="/signin" element={<SignIn setIsLogIn={setIsLogIn} />} />
          <Route
            path="/myprofile"
            element={<Myprofile isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userlist" element={<Userlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
