import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/CurrentGenreOrCategory';
import userReducer from '../features/auth';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    CurrentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;





