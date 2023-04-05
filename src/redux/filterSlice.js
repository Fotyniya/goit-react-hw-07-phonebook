import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filterQuery',
    initialState: {
      filter: '',
    },
    reducers: {
      setFilter(state, action){
        state.filter = action.payload;
      },
    }
});

export const { setFilter } = filterSlice.actions;
//export const filterReducer = filterSlice.reducer;