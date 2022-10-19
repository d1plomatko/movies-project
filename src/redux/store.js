import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, moviesReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    themeReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};