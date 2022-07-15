import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";

import NavbarComponent from "../Components/NavbarComponent";
import Info from "../Components/Info";

const DashboardRoutes = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
