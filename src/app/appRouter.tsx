import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/app/layouts/appLayout";

const MoviesPage = lazy(() => import("@/pages/Movies/ui/MoviesPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage/ui/SupportPage"));
const Subscribe = lazy(() => import("@/pages/SubscriptionPage/ui/Subscribe"));
const SearchPage = lazy(() => import("@/pages/SearchPage/ui/SearchPage"));
const HomePage = lazy(() => import("@/pages/Home/ui/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <HomePage />
          </Suspense>
        ),
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
