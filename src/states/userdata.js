import { createSlice } from "@reduxjs/toolkit";

const userdataSlice = createSlice({
    name: "userdata",
    initialState: {ID: undefined, name: undefined},
    reducers: {
        setId: (state, action) => ({ ...state, ID: action.payload.ID }),
        setName: (state, action) => ({ ...state, name: action.payload.name })
    }
})

// export const { setId, setName } = userdataSlice.actions;
export const userdataReducer = userdataSlice.reducer;