import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, moviesReducer} from "./slices";

const rootReducer = combineReducers({
    moviesReducer,
    genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};