var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@/shared/button/Button";
import * as classes from "./classes.module.scss";
import { questions } from "@/shared/constants";
import Question from "@/entities/Question/Question";
import svg from "@/shared/assets/svg/stick.svg";
import { useState } from "react";
var Questions = function () {
    var _a = useState({}), showQuestion = _a[0], setShowQuestion = _a[1];
    var toggleQuestion = function (id) {
        setShowQuestion(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = !prev[id], _a)));
        });
    };
    return (_jsxs("section", { children: [_jsx("div", { className: classes.container, children: _jsxs("div", { className: classes.headline, children: [_jsxs("div", { className: classes.textContainer, children: [_jsx("h2", { children: "Frequently Asked Questions" }), _jsx("p", { children: "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe." })] }), _jsx(Button, { text: "Ask a Question", onClick: function () { }, className: classes.button })] }) }), _jsx("div", { className: classes.containerQuestions, children: questions.map(function (question) { return (_jsx(Question, { number: question.number, question: question.question, text: question.text, svg: svg, onClick: function () { return toggleQuestion(question.id); }, showQuestion: !!showQuestion[question.id] }, question.id)); }) })] }));
};
export default Questions;
