import { useState } from "react";

export default function extendDiv() {
  const [isDivExtended, setIsDivExtended] = useState(false);
  const extendDivToggle = () => setIsDivExtended(!isDivExtended);

  return { isDivExtended, extendDivToggle };
}
