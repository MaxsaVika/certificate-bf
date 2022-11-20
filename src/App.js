import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import css from "./App.module.css";

import Layout from "./Layout/Layout.jsx";
import FailedPage from "./pages/FailedPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";

const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/checkout/success" element={<SuccessPage />} /> */}
          <Route path="/checkout/failed" element={<FailedPage />} />
        </Route>
        <Route path="/checkout/success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
