import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CertificateProvider } from "./context/CertificateContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="certificate-bf">
    {/* <React.StrictMode> */}
    <CertificateProvider>
      <App />
    </CertificateProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
