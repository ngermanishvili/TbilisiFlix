import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName: '',
        page: 1,
        searcQuery: '',
    },
    reducers: {
        selectGenreOrCategory: (state, action) => {
            state.genreOrCategoryName = action.payload;
        }
    }
})

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;