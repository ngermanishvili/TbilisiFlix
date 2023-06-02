import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="md" style={{ height: "50px" }}>
      <Typography
        variant="h6"
        color="textPrimary"
        style={{ display: "flex", position: "absolute", right: "20px" }}
      >
        © 2023 Nika Germanishvili
      </Typography>
    </Container>
  );
};

export default Footer;
