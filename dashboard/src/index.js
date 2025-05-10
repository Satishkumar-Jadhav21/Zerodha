import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import { GeneralContextProvider } from "./components/GeneralContext"; // Import GeneralContextProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GeneralContextProvider> {/* Wrap the entire app with GeneralContextProvider */}
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </GeneralContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
