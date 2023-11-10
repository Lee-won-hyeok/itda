import { createSlice } from "@reduxjs/toolkit";

const categoryKeySlice = createSlice({
    name: "categoryKey",
    initialState: 2,
    reducers: {
        set: (state, action) => (action.payload)
    }
})

export const categoryKeyReducer = categoryKeySlice.reducer;