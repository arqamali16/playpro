import React from "react";
import { Routes, Route, BrowserRouter, Navigate, Link } from "react-router-dom";

import ProtectedRoute from "./Components/ProtectedRoute";
import Signup from "./Pages/Signup";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
