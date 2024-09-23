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
import { jsx as _jsx } from "react/jsx-runtime";
import Card from "@/entities/Card/Card";
import { filmsCategory } from "@/shared/constants";
import Slider from "react-slick";
import * as classes from "./classes.module.scss";
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
};
var Сarousel = function (_a) {
    var sliderRef = _a.sliderRef;
    return (_jsx("div", { className: classes.containerCards, children: _jsx(Slider, __assign({ className: classes.slider, adaptiveHeight: true, arrows: false, ref: sliderRef }, settings, { children: filmsCategory.map(function (category) { return (_jsx(Card, { onClick: function () { }, img: category.url, name: category.name }, category.id)); }) })) }));
};
export default Сarousel;
