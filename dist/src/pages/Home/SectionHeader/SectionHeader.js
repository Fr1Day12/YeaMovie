import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "@/widgets/Header/Header";
import * as classes from "./classes.module.scss";
import Button from "@/shared/button/Button";
import Play from "@/shared/assets/svg/play.svg";
import { useEffect, useState } from "react";
var SectionHeader = function () {
    var _a = useState(window.innerWidth <= 871), isSmallScreen = _a[0], setIsSmallScreen = _a[1];
    useEffect(function () {
        var handleResize = function () {
            setIsSmallScreen(window.innerWidth <= 871);
        };
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return (_jsxs("section", { className: classes.container, children: [_jsxs("div", { className: classes.background, children: [_jsx(Header, {}), _jsx("div", { className: classes.containerText, children: _jsx("h1", { className: classes.title, children: "The Best Streaming Experience" }) })] }), _jsx("div", { className: classes.buttonContainer, children: isSmallScreen ? (_jsx("p", { className: classes.textPhone, children: "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere." })) : (_jsx("div", { children: _jsx("p", { className: classes.text, children: "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch." }) })) }), _jsx("div", { className: classes.buttonContainer, children: _jsx(Button, { text: "Start Watching Now", onClick: function () { }, className: classes.button, children: _jsx(Play, {}) }) })] }));
};
export default SectionHeader;
