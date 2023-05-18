import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        
        //* Get movie by type
        getmovies: builder.query({
            query: () => {
                return {
                    url: `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
                }
            }
        })
    })
})

export const { useGetmoviesQuery } = tmdbapi;
