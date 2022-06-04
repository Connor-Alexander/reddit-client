import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
  "dashboard/loadSearchResults",
  async (term) => {
    const count = 10;
    const timeframe = "all";
    const jsonAddress = `http://www.reddit.com/search.json?q=${term}&limit=${count}&t=${timeframe}`;
    const data = await fetch(jsonAddress);
    const json = await data.json();
    console.log(json);
  }
);

const dashboard = {
  name: "dashboard",
  initialState: {
    searchResults: { 0: { topic: "My initial state", author: "Camilo" } },
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [loadSearchResults.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSearchResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      // Here, we need to update the state searchREsults
    },
    [loadSearchResults.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const dashboardSlice = createSlice(dashboard);
export const dashboardReducer = dashboardSlice.reducer;
export const searchResults = (state) => state;
