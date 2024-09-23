import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as classes from "./classes.module.scss";
var ToggleSwitch = function (_a) {
    var calendar = _a.calendar, handleClick = _a.handleClick;
    return (_jsxs("div", { className: classes.toggleContainer, onClick: handleClick, children: [_jsx("span", { className: calendar ? classes.active : "", children: "Monthly" }), _jsx("span", { className: !calendar ? classes.active : "", children: "Yearly" })] }));
};
export default ToggleSwitch;
