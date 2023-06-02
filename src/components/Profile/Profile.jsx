import React, { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { ExitToApp } from "@mui/icons-material";
import { useGetListQuery } from "../../services/TMDB";
import { RatedCards } from "..";

const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

const Profile = () => {
  // Get user from redux store
  const { user } = useSelector(userSelector);
  const [open, setOpen] = useState(false);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlisted } =
    useGetListQuery({
      listName: "watchlist/movies",
      accountId: user.id,
      sessionId: localStorage.getItem("session_id"),
      page: 1,
    });

  useEffect(() => {
    refetchFavorites();
    refetchWatchlisted();
  }, [favoriteMovies, watchlistMovies]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favourite or watchlist same movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" movies={favoriteMovies} />
          <RatedCards title="Watchlist" movies={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
