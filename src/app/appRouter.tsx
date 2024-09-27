import { createBrowserRouter } from "react-router-dom";
import MoviesPage from "@/pages/Movies/ui/MoviesPage";
import SupportPage from "@/pages/Support Page/ui/SupportPage";
import App from "@/app/layouts/appLayout";
import Subscribe from "@/pages/Subscription Page/ui/Subscribe";
import SearchPage from "@/pages/SearchPage/ui/SearchPage";
import HomePage from "@/pages/Home/ui/HomePage";

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
      {
        path: "/movie/:id",
        element: <SearchPage />,
      },
    ],
  },
]);
