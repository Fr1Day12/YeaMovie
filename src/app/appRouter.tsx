import { createBrowserRouter } from "react-router-dom";
import MoviesPage from "@/pages/Movies/MoviesPage";
import HomePage from "@/pages/Home/HomePage";
import SupportPage from "@/pages/Support Page/SupportPage";
import App from "@/app/layouts/appLayout";
import Subscribe from "@/pages/Subscription Page/Subscribe";

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
      {
        path: "/Subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);
