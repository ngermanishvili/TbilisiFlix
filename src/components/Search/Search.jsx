import React, { useState, useEffect } from "react";
import { TextField, InputAdorment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";

const Search = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();

  const handleKeyPress = () => {
    console.log("key pressed");
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        value={query}
        variant="standard"
        Input={{
          className: classes.input,
          startAdornment: (
            <InputAdorment position="start">
              <SearchIcon />
            </InputAdorment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
