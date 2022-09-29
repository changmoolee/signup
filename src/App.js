import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myprofile from "./pages/Myprofile/Myprofile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Userlist from "./pages/Userlist/Userlist";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
