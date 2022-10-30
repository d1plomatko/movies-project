import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, genreReducer, moviesReducer, trendingReducer} from "./slices";


const rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    authReducer,
    trendingReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};