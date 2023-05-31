import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        //* Get Genres
        getgenres: builder.query({
            query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
        }),

        //* Get movie by [Type]
        getmovies: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                //* Get Movies by Search

                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
                }

                //*Get Movies by Categoeries
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return {
                        url: `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`,
                    }
                }
                //*Get Movies by Genres
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return {
                        url: `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`,
                    }
                }
                //* Get Popular Movies
                return {
                    url: `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
                }
            }
        }),
        // * Get Movie
        getmovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        }),

        //* Get user specific list
        getRecommendations: builder.query({
            query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`
        })
    })
})

export const { useGetmoviesQuery, useGetgenresQuery, useGetmovieQuery, useGetRecommendationsQuery } = tmdbApi;