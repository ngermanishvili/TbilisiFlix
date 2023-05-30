import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { ExitToApp } from "@mui/icons-material";

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

const Profile = () => {
  // Get user from redux store
  const { user } = useSelector(userSelector);

  const favoriteMovies = ''

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">My Profile</Typography>
        <Button color="inherit" onClick={logout} disabled={!user}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {favoriteMovies.length ? (
        <Box variant="h6">
          Your favorite movies:
          {favoriteMovies.map((movie) => (
            <Typography key={movie.id} variant="body1">
              {movie.title}
            </Typography>
          ))}
        </Box>
      ) : (
        <Typography variant="h6">
          Add favorites or watchlist items to see them here!
        </Typography>
      )}
    </Box>
  );
};

export default Profile;
