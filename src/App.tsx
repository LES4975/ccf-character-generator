import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import StatusList from "./components/Status";
import ParamList from "./components/Parameter";
import ChatPallete from "./components/inputs/ChattingPallete";
import Option from "./components/Option";

function App() {
  return (
    <>
      <h1>코코포리아 캐릭터 생성기</h1>
      <Profile />
      <StatusList />
      <ParamList />
      <ChatPallete />
      <Option />
    </>
  );
}

export default App;
