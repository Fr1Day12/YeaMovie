import { createSlice } from "@reduxjs/toolkit";

export const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: {
    keyword: "",
  },
  reducers: {
    setQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
