import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
  Icon,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            style={{ outline: "none" }}
            onClick={() => {}}
            className={classes.menu}
          >
            <Menu />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
