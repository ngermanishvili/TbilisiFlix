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
import redLogo from '../../assets/tbilisired.png'
import blueLogo from '../../assets/tbilisiblue.png'


const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "UpComing", value: "upcoming" },
];
// const demoCategories = [
//   "ანიმაცია",
//   "დოკუმენტური",
//   "ისტორიული",
//   "სათავგადასავლო",
//   "საშინელება",
//   "ტრილერი",
//   "საომარი",
// ];
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
        <ListSubheader>ფილმები</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
