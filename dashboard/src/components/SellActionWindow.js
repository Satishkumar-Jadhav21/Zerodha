import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import ActionWindow from "./ActionWindow";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  return <ActionWindow uid={uid} type="sell" onClose={closeSellWindow} />;
};

export default SellActionWindow;
