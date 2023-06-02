import React from "react";
import { useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import { useGetActorsDetailsQuery } from "../../services/TMDB";

const Actors = () => {
  const {id} = useParams();

  const {data, isFetching, error} = useGetActorsDetailsQuery(id);

  return <div>Actor- {id} </div>;
};

export default Actors;
