import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreIdOrCategoryName: '',
        page: 1,
        searcQuery: '',
    },
    reducers: {
        selectGenreOrCategory: (state, action) => {
            state.genreIdOrCategoryName = action.payload;
        }
    }
})

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;