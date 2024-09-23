import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
import { useState } from "react";
var Nav = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () {
        setIsOpen(function (prev) { return !prev; });
    };
    return (_jsxs("nav", { className: classes.navigation, children: [_jsx(Button, { text: "Home", onClick: toggleMenu }), _jsx(Button, { text: "Movie & Shows", onClick: toggleMenu }), _jsx(Button, { text: "Support", onClick: toggleMenu }), _jsx(Button, { text: "Subscribe", onClick: toggleMenu })] }));
};
export default Nav;
