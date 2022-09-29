import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Userlist from "./pages/Userlist/Userlist";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userlist" element={<Userlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
