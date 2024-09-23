import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as classes from "./classes.module.scss";
var Question = function (_a) {
    var question = _a.question, text = _a.text, number = _a.number, ImgComponent = _a.svg, onClick = _a.onClick, showQuestion = _a.showQuestion;
    return (_jsxs("div", { onClick: onClick, className: "".concat(classes.container, " ").concat(showQuestion ? classes.showAnswer : ""), children: [_jsx("div", { className: classes.box, children: number }), _jsxs("div", { className: classes.text, children: [_jsx("h3", { children: question }), showQuestion && (_jsx("div", { className: classes.answer, children: _jsx("p", { children: text }) }))] }), _jsxs("div", { className: classes.iconContainer, children: [_jsx(ImgComponent, { className: "".concat(classes.image, " ").concat(showQuestion ? "" : classes.rotateImage) }), _jsx("span", { className: classes.verticalLine })] })] }));
};
export default Question;
