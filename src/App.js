import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/* Swipe buttons*/}
    </div>
  );
}

export default App;
