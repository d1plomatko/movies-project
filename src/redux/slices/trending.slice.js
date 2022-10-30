import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {trendingService} from "../../services";


const initialState = {
    trending: []
};

const getAll = createAsyncThunk(
    'trendingSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await trendingService.getAll();
            return data.results;
        } catch (e) {
            return rejectWithValue(e.response.date);
        }
    }
);

const trendingSlice = createSlice({
    name: 'trendingSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.trending = action.payload
            })
});

const trendingActions = {
    getAll
};

const {reducer: trendingReducer} = trendingSlice;

export {
    trendingActions,
    trendingReducer
};