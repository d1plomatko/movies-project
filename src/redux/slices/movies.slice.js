import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    totalPages: 1,
    currentPage: 1
};


const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.currentPage = action.payload.page;
            })
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    getMovies
};

export {
    moviesReducer,
    moviesActions
};