import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    items: [],
};
export var filmSlice = createSlice({
    name: "filmSlice",
    initialState: initialState,
    reducers: {
        setItems: function (state, action) {
            state.items = action.payload;
        },
    },
});
export var setItems = filmSlice.actions.setItems;
export default filmSlice.reducer;
