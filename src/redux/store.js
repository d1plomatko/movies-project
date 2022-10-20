import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, moviesReducer, themeReducer} from "./slices";
import {authReducer} from "./slices/auth.slice";

const rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    themeReducer,
    authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};