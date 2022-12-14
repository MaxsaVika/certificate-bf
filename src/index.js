import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CertificateProvider } from "./context/CertificateContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    {/* <React.StrictMode> */}
    <CertificateProvider>
      <App />
    </CertificateProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
