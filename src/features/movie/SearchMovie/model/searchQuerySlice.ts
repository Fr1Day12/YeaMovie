import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchQueryState {
  keyword: string;
}

const initialState: SearchQueryState = {
  keyword: "",
};

export const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<{ keyword: string }>) => {
      state.keyword = action.payload.keyword;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
