import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Games from "./../pages/Games/Games";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my" element={<Games />} />
      </Routes>
    </>
  );
}

export default Router;
