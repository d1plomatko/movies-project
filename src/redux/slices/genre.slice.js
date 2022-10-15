import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenres();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
});

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    getGenres
};

export {
    genreActions,
    genreReducer
};