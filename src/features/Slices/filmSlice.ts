import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "@/shared/interfaces";

interface State {
  items: Film[];
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  items: [],
  isLoading: false,
  error: "",
};

const filmSlice = createSlice({
  name: "filmSlice",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Film[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setItems, setLoading, setError } = filmSlice.actions;
export default filmSlice.reducer;
