import React from "react";
import { Typography, Button } from "@mui/material";
import useStyles from "./styles";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    setPage((prev) => prev - 1);
  };
  //

  if (totalPages === 1) return null;

  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        onClick={handleNext}
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
