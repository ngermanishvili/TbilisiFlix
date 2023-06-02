import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { useGetmoviesQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/CurrentGenreOrCategory";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.CurrentGenreOrCategory
  );
  const { data, error, isFetching } = useGetmoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const numberOfMovies = lg ? 16 : 18;

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
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        total={data.total_pages}
      />
    </div>
  );
};

//
export default Movies;
