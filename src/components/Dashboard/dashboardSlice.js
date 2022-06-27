import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSearchResults = createAsyncThunk(
  "dashboard/loadSearchResults",
  async (term) => {
    const count = 10;
    const timeframe = "all";
    const jsonAddress = `http://www.reddit.com/search.json?q=${term}&limit=${count}&t=${timeframe}`;
    const data = await fetch(jsonAddress);
    const json = await data.json();
    return json.data.children;
  }
);

export const initialLoad = createAsyncThunk(
  "dashboard/initialLoad",
  async () => {
    const count = 10;
    const jsonAddress = `http://www.reddit.com/r/popular.json?limit=${count}`;
    const data = await fetch(jsonAddress);
    const json = await data.json();
    return json.data.children;
  }
);

const dashboard = {
  name: "dashboard",
  initialState: {
    searchResults: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: {
    [initialLoad.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [initialLoad.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.searchResults = action.payload;
    },
    [initialLoad.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [loadSearchResults.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadSearchResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.searchResults = action.payload;
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
