import React, { useState } from "react";
import "./Main.css";
import SignIn from "../../components/SignIn/SignIn";
import Myprofile from "../../components/Myprofile/Myprofile";

const Main = ({ isLogIn }) => {
  return isLogIn ? <Myprofile /> : <SignIn />;
};

export default Main;
