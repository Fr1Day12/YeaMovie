import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Nav from "@/shared/nav/Nav";
import * as classes from "./classes.module.scss";
import Search from "@/shared/assets/svg/search.svg";
import Notification from "@/shared/assets/svg/notifications.svg";
import Logo from "@/shared/assets/svg/Logo.svg";
import { Link } from "react-router-dom";
var Header = function () {
    return (_jsxs("header", { className: classes.container, children: [_jsx("div", { className: classes.logo, children: _jsx(Link, { to: "/", children: _jsx(Logo, { width: 200, height: 60 }) }) }), _jsx("div", { className: classes.nav, children: _jsx(Nav, {}) }), _jsxs("div", { className: classes.icons, children: [_jsx(Search, { width: 24, height: 26 }), _jsx(Notification, { width: 24, height: 26 })] })] }));
};
export default Header;
