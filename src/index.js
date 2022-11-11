import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CertificateProvider } from "./context/CertificateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <CertificateProvider>
    <App />
  </CertificateProvider>
  // </React.StrictMode>
);
