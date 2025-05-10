import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import ActionWindow from "./ActionWindow";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  return <ActionWindow uid={uid} type="buy" onClose={closeBuyWindow} />;
};

export default BuyActionWindow;