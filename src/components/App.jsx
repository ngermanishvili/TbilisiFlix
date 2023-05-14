import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <CssBaseline />
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movies" element={<h1>Movies</h1>} />
        <Route path="/list" element={<h1>list</h1>} />
      </Routes>
    </main>
  </Router>
);

export default App;
