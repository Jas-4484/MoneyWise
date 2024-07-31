import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import First from "./Pages/Second.jsx";
import { BrowserRouter, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
