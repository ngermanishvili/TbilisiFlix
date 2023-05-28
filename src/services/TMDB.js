import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

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
            query: ({ genreIdOrCategoryName, page }) => {

                //*Get movies by Categoeries
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return {
                        url: `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`,
                    }
                }
                //*Get movies by Genres
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return {
                        url: `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`,
                    }
                }

                return {
                    url: `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
                }
            }
        })
    })
})

export const { useGetmoviesQuery, useGetgenresQuery } = tmdbApi;