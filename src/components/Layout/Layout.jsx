import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Navbar/Navbar";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Popup from "./../Popup/Popup";
export default function Layout() {
  return (
    <>
      <MainNavbar />
      <Outlet></Outlet>
      <Popup />
      <Footer />
    </>
  );
}
