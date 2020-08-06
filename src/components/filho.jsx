import React from "react";
import global from "../global";

export default function Filho() {
  return (
    <>
      <button onClick={global.isDivExtended.extendDivToggle}>Aumentar</button>
    </>
  );
}
