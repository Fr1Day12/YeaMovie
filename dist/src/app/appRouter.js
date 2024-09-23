import { jsx as _jsx } from "react/jsx-runtime";
import App from "@/index";
import { createBrowserRouter } from "react-router-dom";
export var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        errorElement: _jsx(App, {}),
    },
]);
