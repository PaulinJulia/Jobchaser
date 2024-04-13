import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  jobs: string[];
  isLoading: boolean;
}
const initialState: CategoryState = {
  jobs: [],
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filterByLocation: (state, action) => {
      state.jobs.filter((job) => job === action.payload);
    },
  },
});

export const { filterByLocation } = categorySlice.actions;

export default categorySlice.reducer;
