import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

//creating a function that will allow use to change the mode from dark to light
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : "light";
        }
    }
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;