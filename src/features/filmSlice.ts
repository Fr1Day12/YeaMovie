import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmData } from "@/shared/interfaces";

interface State {
  items: FilmData[];
}

const initialState: State = {
  items: [],
};

export const filmSlice = createSlice({
  name: "filmSlice",
  initialState,
  reducers: {
    // setItems: (state, action: PayloadAction<FilmData[]>) => {
    // state.items = action.payload;
    // },
  },
});

// export const { setItems } = filmSlice.actions;
export default filmSlice.reducer;
