import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    themes: {
        header: 'header_light',
        navbar: 'navbar_light',
        main: 'main_light',
        card: 'card_light',
        body: 'body_light',
        details: 'details_light',
        form: 'form_light',
        genres: 'genres_light'
    }
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.themes = action.payload;
        }
    }
});

const {reducer: themeReducer, actions: {setTheme}} = themeSlice;

const themeActions = {
    setTheme
};

export {
    themeReducer,
    themeActions
};