import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import StatusList from "./components/Status";
import ParamList from "./components/Parameter";

function App() {
  return (
    <>
      <h1>Character Form</h1>
      <Profile />
      <StatusList />
      <ParamList />
    </>
  );
}

export default App;
