import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchMovie } from "../../features/CurrentGenreOrCategory";
import useStyles from "./styles";

const Search = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        value={query}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
