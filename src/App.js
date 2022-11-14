import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { lazy } from "react";

// const HomePage = lazy(() => import("./pages/HomePage.jsx"));
// const Layout = lazy(() => import("./Layout/Layout.jsx"));
// const SucсessPage = lazy(() => import("./pages/SuccessPage.jsx"));

import Layout from "./Layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/checkout"
            element={<Navigate to="/checkout/success" />}
          />
          <Route path="/checkout/success" element={<SuccessPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
