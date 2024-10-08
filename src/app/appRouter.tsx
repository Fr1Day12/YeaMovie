import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/app/layouts/appLayout";
import HomePage from "@/pages/Home/ui/HomePage";

const MoviesPage = lazy(() => import("@/pages/MoviesPage/ui/MoviesPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage/ui/SupportPage"));
const Subscribe = lazy(
  () => import("@/pages/SubscriptionPage/ui/SubscriptionPage")
);
const SearchPage = lazy(() => import("@/pages/MovieInfoPage/ui/MovieInfoPage"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MoviesPage />
          </Suspense>
        ),
      },
      {
        path: "/Support",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SupportPage />
          </Suspense>
        ),
      },
      {
        path: "/Subscribe",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Subscribe />
          </Suspense>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);
