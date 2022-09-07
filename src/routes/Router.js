import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Bookings from "../page/Bookings";
import Dashboard from "../page/Dashboard";
import SellCar from "../page/SellCar";
import Settings from "../page/Settings";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;
