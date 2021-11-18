import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Results from "./../pages/Results/Results";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result/:id" element={<Results />} />
      </Routes>
    </>
  );
}

export default Router;
