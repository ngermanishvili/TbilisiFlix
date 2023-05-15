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
} from "../components/index";

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
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/" element={<Movies />} />
            <Route path="/profile:/id" element={<Profile />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
