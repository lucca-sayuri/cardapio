import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cardapio" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
