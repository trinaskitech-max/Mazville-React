import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Experience from "./pages/Experience";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/booking" element={<Booking />} />
        {/* Fallback route */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
