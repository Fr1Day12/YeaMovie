import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as classes from "./classes.module.scss";
var StreamCard = function (_a) {
    var ImgComponent = _a.img, name = _a.name, text = _a.text;
    return (_jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.card, children: [_jsx(ImgComponent, { className: classes.image }), _jsx("h3", { children: name })] }), _jsx("p", { className: classes.text, children: text })] }));
};
export default StreamCard;
