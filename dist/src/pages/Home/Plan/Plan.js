import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PlanCard from "@/entities/PlanCard/PlanCard";
import * as classes from "./classes.module.scss";
import { useState } from "react";
import { plans } from "@/shared/constants";
import ToggleSwitch from "@/shared/toggleSwitch/ToggleSwitch";
var Plan = function () {
    var _a = useState(true), calendar = _a[0], setСalendar = _a[1];
    var handleClick = function () {
        setСalendar(function (prev) { return !prev; });
    };
    return (_jsxs("section", { className: classes.container, children: [_jsxs("div", { className: classes.box, children: [_jsxs("div", { className: classes.containerText, children: [_jsx("h2", { className: classes.title, children: "Explore our wide variety of categories" }), _jsx("p", { className: classes.text, children: "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" })] }), _jsx("div", { children: _jsx(ToggleSwitch, { calendar: calendar, handleClick: handleClick }) })] }), _jsx("div", { className: classes.containerCard, children: plans.map(function (plan) { return (_jsx(PlanCard, { priceYear: plan.priceYear, calendar: calendar, title: plan.title, text: plan.text, price: plan.price }, plan.id)); }) })] }));
};
export default Plan;
