import { createBrowserRouter } from "react-router-dom";
import App from "@/index";
import MoviesPage from "@/pages/Movies/MoviesPage";
import HomePage from "@/pages/Home/HomePage";
import SupportPage from "@/pages/Support Page/SupportPage";

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
        path: "/Movies",
        element: <MoviesPage />,
      },
      {
        path: "/Support",
        element: <SupportPage />,
      },
    ],
  },
]);
