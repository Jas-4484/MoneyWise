import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import First from "./Pages/First.jsx";
import Second from "./Pages/Second.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import Third from "./Pages/Third.jsx";
import Fourth from "./Pages/Fouth.jsx";
import Fifth from "./Pages/Fifth.jsx";
import Sixth from "./Pages/Sixth.jsx";
import Seventh from "./Pages/Seventh.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/seventh" element={<Seventh />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
