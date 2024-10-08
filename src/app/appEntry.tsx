import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/layouts/styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "@/app/appStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouter";
import "bear-react-carousel/dist/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
