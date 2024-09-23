import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as classes from "./classes.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Сarousel from "@/features/Сarousel/Сarousel";
import { filmsCategory } from "@/shared/constants";
import { useRef, useState } from "react";
import Arrow from "@/shared/assets/svg/arrow.svg";
import Line from "@/shared/assets/svg/line.svg";
import useMovieQuery from "@/shared/hooks/useMovieQuery";
var Categories = function (_a) {
    var text = _a.text, title = _a.title;
    var _b = useMovieQuery(), isLoading = _b.isLoading, hasError = _b.hasError, responceAction = _b.responceAction, responceComedy = _b.responceComedy, responceHorror = _b.responceHorror, responceCartoon = _b.responceCartoon, responceMusical = _b.responceMusical, responceMystery = _b.responceMystery, responceHistory = _b.responceHistory, responceDrama = _b.responceDrama;
    var responce = responceAction;
    console.log(responce);
    var sliderRef = useRef(null);
    var _c = useState(0), currentSlide = _c[0], setCurrentSlide = _c[1];
    var handlePrev = function () {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setCurrentSlide(function (prev) {
                return prev === 0 ? filmsCategory.length - 1 : prev - 1;
            });
        }
    };
    var handleNext = function () {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setCurrentSlide(function (prev) {
                return prev === filmsCategory.length - 1 ? 0 : prev + 1;
            });
        }
    };
    return (_jsxs("section", { className: classes.container, children: [_jsxs("div", { className: classes.box, children: [_jsxs("div", { className: classes.containerText, children: [_jsx("h2", { className: classes.title, children: title }), text && _jsx("p", { className: classes.text, children: text })] }), _jsxs("div", { className: classes.containerSvg, children: [_jsx("div", { className: classes.arrow, onClick: handlePrev, children: _jsx(Arrow, { transform: "rotate(180)" }) }), _jsx("div", { className: classes.line, children: Array.from({ length: 4 }, function (_, index) { return (_jsx(Line, { className: currentSlide % 4 === index ? classes.lineActive : "" }, index)); }) }), _jsx("div", { className: classes.arrow, onClick: handleNext, children: _jsx(Arrow, {}) })] })] }), _jsx(Сarousel, { sliderRef: sliderRef })] }));
};
export default Categories;
