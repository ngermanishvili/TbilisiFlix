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
  const { data, error, isFetching } = useGetmoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that found
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return "Something went wrong";

  console.log(data);
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

//
export default Movies;
