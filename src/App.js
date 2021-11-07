import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import { Routes, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/chat/:person" element={<ChatDetailComponent />} />
        <Route path="/chat" element={<ChatComponent />} />
        <Route path="/" element={<Cards />}></Route>
      </Routes>
    </div>
  );
}

function ChatDetailComponent() {
  return (
    <div>
      <Header backButton="/chat" />
      <ChatScreen />
    </div>
  );
}

function ChatComponent() {
  return (
    <div>
      <Header backButton="/" />
      <Chats />
    </div>
  );
}

function Cards() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
