import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
});

const {reducer: authReducer, actions: {setUser}} = authSlice;

const authActions = {
    setUser
};

export {
    authActions,
    authReducer
}

