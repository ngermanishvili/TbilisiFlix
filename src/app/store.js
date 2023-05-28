import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/CurrentGenreOrCategory'

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    CurrentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;