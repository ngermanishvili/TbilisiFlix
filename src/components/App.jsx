import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useStyles from "../components/styles";

import {
  MovieInformation,
  Actors,
  Profile,
  Movies,
  NavBar,
  Footer,
} from "../components/index";

// Nika Germanishvuili
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/approved" element={<Movies />} />
            <Route exact path="/movie/:id" element={<MovieInformation />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
