import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
