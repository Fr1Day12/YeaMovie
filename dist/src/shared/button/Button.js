import { jsxs as _jsxs } from "react/jsx-runtime";
import * as classes from "./classes.module.scss";
import cn from "classnames";
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, className = _a.className, children = _a.children;
    return (_jsxs("button", { onClick: onClick, className: cn(classes.button, className), children: [children, text] }));
};
export default Button;
