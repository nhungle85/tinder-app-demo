import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/chat" element={<h1>I am the chat page</h1>} />
        <Route path="/" element={<Cards />}></Route>
      </Routes>
    </div>
  );
}

function Cards() {
  return (
    <div>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
