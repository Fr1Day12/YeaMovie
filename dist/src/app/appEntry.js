import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/layouts/styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "@/app/appStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouter";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(RouterProvider, { router: router }) }) }));
