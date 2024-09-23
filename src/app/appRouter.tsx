import { createBrowserRouter } from "react-router-dom";
import App from "@/index";
import MoviesPage from "@/pages/Movies/MoviesPage";
import HomePage from "@/pages/Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
    ],
  },
]);
