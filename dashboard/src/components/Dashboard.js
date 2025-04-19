import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import WatchListItem from "./WatchListItem";
import Menu from "./Menu";
import { GeneralContextProvider } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/WatchListItem" element={<WatchListItem />} /> 
          <Route path="/Menu" element={<Menu />} />
          <Route path="/BuyActionWindow" element={<BuyActionWindow />} />
          <Route path="/GeneralContextProvider" element={<GeneralContextProvider />} />
          <Route path="/SellActionWindow" element={<SellActionWindow />} />
        </Routes>
      </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;