import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { ColorModeContext } from "../../utils/ToggleColorMode";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useTheme } from "@mui/material/styles";
import { Sidebar, Search } from "../../components";
import { fetchToken, createSessionId, moviesApi } from "../../utils";
import { setUser, userSelector } from "../../features/auth";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const dispatch = useDispatch();

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        let sessionId = sessionIdFromLocalStorage;

        if (!sessionIdFromLocalStorage) {
          sessionId = await createSessionId();
          localStorage.setItem("session_id", sessionId);
        }

        const { data: userData } = await moviesApi.get(
          `/account?session_id=${sessionId}`
        );
        console.log("User data after dispatch:", userData); // Add this console.log
        dispatch(setUser(userData));
      }
    };

    logInUser();
  }, [token, sessionIdFromLocalStorage]);

  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);

  return (
    <>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          style={{ outline: 'none' }}
          onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        )}
        <IconButton
          color="inherit"
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {!isMobile && <Search />}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={fetchToken}>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to={`/profile/${user.id}`}
              className={classes.linkButton}
            >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt="Profile"
                src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar?.avatar_path}`}
              />
            </Button>
          )}
        </div>
        {isMobile && <Search />}
      </Toolbar>
    </AppBar>
    <div>
      <nav className={classes.drawer}>
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </div>
  </>
  );
};

//
export default NavBar;
