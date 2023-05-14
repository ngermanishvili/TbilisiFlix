import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MovieInformation,
  Actors,
  Profile,
  Movies,
  NavBar,
} from "../components/index";



const App = () => (
  <Router>
    <CssBaseline />
    <NavBar />
    <main>
      <Routes>
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/" element={<Movies />} />
        <Route path="/profile:/id" element={<Profile />} />
      </Routes>
    </main>
  </Router>
);

export default App;
