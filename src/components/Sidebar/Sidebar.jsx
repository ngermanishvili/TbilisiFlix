import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  ListItem,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import redLogo from "../../assets/tbilisired.png";
import blueLogo from "../../assets/tbilisiblue.png";

const categories = [
  { label: "პოპულარული ფილმები", value: "popular" },
  { label: "TBILISIFIX რეიტინგი", value: "top_rated" },
  { label: "მალე ქართულად", value: "upcoming" },
];

const demoCategories = [
  { label: "ანიმაცია", value: "animation" },
  { label: "დოკუმენტური", value: "documentary" },
  { label: "ისტორიული", value: "history" },
  { label: "სათავგადასავლო", value: "action" },
  { label: "ტრილერი", value: "triler" },
  { label: "საომარი", value: "war" },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "dark" ? redLogo : blueLogo}
          alt="Tbilisifix logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>კატეგორიები</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                /> 
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>ჟანრი</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                /> 
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
