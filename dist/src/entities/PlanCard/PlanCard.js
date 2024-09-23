import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
var PlanCard = function (_a) {
    var title = _a.title, text = _a.text, price = _a.price, calendar = _a.calendar, priceYear = _a.priceYear;
    return (_jsxs("div", { className: classes.container, children: [_jsx("h4", { children: title }), _jsx("p", { children: text }), _jsxs("p", { className: classes.price, children: [_jsx("span", { children: "".concat(calendar ? price : priceYear) }), "/mounth"] }), _jsxs("div", { className: classes.buttonContainer, children: [_jsx(Button, { text: "Start Free Trial", onClick: function () { }, className: classes.button }), _jsx(Button, { text: "Choose Plan", onClick: function () { }, className: classes.buttonRed })] })] }));
};
export default PlanCard;
