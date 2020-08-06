import React from "react";
import Filho from "./filho";
import global from "./../global";

export default function Pai() {
  return (
    <div
      style={
        global.isDivExtended.isDivExtended
          ? {
              backgroundColor: "#065535",
              color: "#ffffff",
              width: 200,
              height: 100
            }
          : {
              backgroundColor: "#065535",
              color: "#ffffff",
              width: 200,
              height: 300
            }
      }
    >
      Aqui está o meu filho:
      <Filho />
    </div>
  );
}
