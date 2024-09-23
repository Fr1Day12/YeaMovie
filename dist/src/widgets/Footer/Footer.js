import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FooterBlocks from "@/entities/FooterBlocks/FooterBlocks";
import * as classes from "./classes.module.scss";
import Facebook from "@/shared/assets/svg/social/facebook.svg";
import Twitter from "@/shared/assets/svg/social/twitter.svg";
import LinkedIn from "@/shared/assets/svg/social/linkedIn.svg";
var Footer = function () {
    return (_jsxs("footer", { className: classes.container, children: [_jsxs("div", { className: classes.box, children: [_jsx(FooterBlocks, {}), _jsxs("div", { children: [_jsx("h5", { className: classes.title, children: "Connect With Us" }), _jsxs("div", { className: classes.icons, children: [_jsx(Facebook, { width: 24, height: 24, className: classes.image }), _jsx(Twitter, { width: 24, height: 24, className: classes.image }), _jsx(LinkedIn, { width: 24, height: 24, className: classes.image })] })] })] }), _jsxs("div", { className: classes.footer, children: [_jsx("p", { children: "\u00A92023 streamvib, All Rights Reserved" }), _jsxs("div", { className: classes.text, children: [_jsx("span", { children: "Terms of Use" }), _jsx("span", { children: "Privacy Policy" }), _jsx("span", { children: "Cookie Policy" })] })] })] }));
};
export default Footer;
