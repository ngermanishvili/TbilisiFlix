import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
import { useGetmoviesQuery } from "../../services/TMDB";

const Movies = () => {
  const { data } = useGetmoviesQuery();
  console.log(data);
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
