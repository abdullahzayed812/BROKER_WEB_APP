import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface InitialState {
  scrollEnabled: boolean;
}

const initialState: InitialState = {
  scrollEnabled: true,
};

const mainScrollableSlice = createSlice({
  name: "mainScrollable",
  initialState,
  reducers: {
    toggleScroll: (state, action) => {
      state.scrollEnabled = action.payload;
    },
  },
});

export const { toggleScroll } = mainScrollableSlice.actions;

export const getScrollEnabled = (state: RootState) =>
  state.mainScrollable.scrollEnabled;

export default mainScrollableSlice.reducer;
