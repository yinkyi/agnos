import { createSlice } from "@reduxjs/toolkit";
import { PainInitialState } from "../libs/interface";

export const initialState: PainInitialState = {
  abdominal: {
    top: false,
    "top-left": false,
    "top-right": false,
    center: false,
    bottom: false,
    "bottom-left": false,
    "bottom-right": false,
  },
  finger: {
    dip: false,
    pip: false,
    mcp: false,
  },
};

const painSlice = createSlice({
  name: "pain",
  initialState: initialState,
  reducers: {
    setAbdominalPain(state, action) {
      state.abdominal = action.payload.abdominal;
    },

    setFingerPain(state, action) {
      state.finger = action.payload.finger;
    },

    reset(state) {
      state.abdominal = initialState.abdominal;
      state.finger = initialState.finger;
    },
  },
});

export const painActions = painSlice.actions;
export default painSlice.reducer;
