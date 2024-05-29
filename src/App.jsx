import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home.jsx";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
