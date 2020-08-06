import React from "react";
import "./styles.css";
import Pai from "./components/pai";
import global from "./global";
import extendDiv from "./extendDiv";

export default function App() {
  global.isDivExtended = extendDiv();
  return (
    <div className="App">
      <Pai />
    </div>
  );
}
