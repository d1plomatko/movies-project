import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    error: null,
    totalPages: 1,
    currentPage: 1,
    movieDetails: {},
    loafing: false
};


const getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async ({page, genre}, {rejectWithValue}) => {

        try {
            const {data} = await moviesService.getMovies(page, genre);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query, page}, {rejectWithValue}) => {

        try {
            const {data} = await moviesService.searchMovies(query, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, {rejectWithValue}) => {

        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
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
                state.error = null;
                state.loading = false;
                state.currentPage = action.payload.page;
                if (action.payload.total_pages > 500) {
                    state.totalPages = 500;
                } else {
                    state.totalPages = action.payload.total_pages;
                }
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.currentPage = action.payload.page;
                state.loading = false;
            })
            .addCase(search.pending, (state) => {
                state.loading = true;
            })
            .addCase(search.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload
                state.loading = false;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getMovies,
    search,
    getById
};

export {
    moviesReducer,
    moviesActions
};