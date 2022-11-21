import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ display: "flex", alignItems: "center" }}>
        {/* <main style={{ height: "100%", display: "flex", alignItems: "center" }}> */}
        {/* <main> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
