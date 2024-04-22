import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
  jobs: [];
  position: string;
  isLoading: boolean;
  error: string | null | undefined;
}
const initialState: CategoryState = {
  jobs: [],
  position: "sverige",
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    city: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAds.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchAds.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const fetchAds = createAsyncThunk("category/fetchAds", async (a) => {
  const response = await fetch(
    `https://links.api.jobtechdev.se/joblinks?q=${a}`
  );
  const jobs = await response.json();
  return jobs.hits;
});

export const { city } = categorySlice.actions;

export default categorySlice.reducer;
