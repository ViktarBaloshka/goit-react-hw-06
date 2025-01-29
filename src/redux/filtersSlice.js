import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.filter;
