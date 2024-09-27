import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "@/shared/interfaces";

interface State {
  items?: Film;
}

const initialState: State = {
  items: {
    items: [],
  },
};

const filmSlice = createSlice({
  name: "filmSlice",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Film>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = filmSlice.actions;
export default filmSlice.reducer;
