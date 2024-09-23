import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Arrow from "@/shared/assets/svg/arrow.svg";
import * as classes from "./classes.module.scss";
var Card = function (_a) {
    var img = _a.img, name = _a.name;
    return (_jsxs("div", { className: classes.card, children: [_jsx("img", { src: img, alt: "genre", className: classes.image }), _jsxs("div", { className: classes.text, children: [_jsx("span", { className: classes.span, children: name }), _jsx(Arrow, { width: 30, height: 30 })] })] }));
};
export default Card;
