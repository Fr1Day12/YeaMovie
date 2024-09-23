var _a;
import filmSlice from "@/features/filmSlice";
import { kinopoiskApi } from "@/features/kinopoiskApi";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
export var store = configureStore({
    reducer: (_a = {},
        _a[kinopoiskApi.reducerPath] = kinopoiskApi.reducer,
        _a.filmSlice = filmSlice,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(kinopoiskApi.middleware);
    },
});
export var useAppDispatch = useDispatch.withTypes();
export var useAppSelector = useSelector.withTypes();
