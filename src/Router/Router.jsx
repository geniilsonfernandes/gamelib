import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Results from "./../pages/Results/Results";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result/:id" element={<Results />} />
        <Route path="auth/*" element={<Auth />} />
      </Routes>
    </>
  );
}

export default Router;
