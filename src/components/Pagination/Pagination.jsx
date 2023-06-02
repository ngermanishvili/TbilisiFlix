import React from "react";
import { Typography, Button } from "@mui/material";

import useStyles from "./styles";

const Pagination = ({currentpage, totalPages, setPage}) => {
  const classes = useStyles();


  const handleNext = () => {
    
  }

  const handlePrev = () => {
 
  }

  if(totalPages === 1) return null;


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
