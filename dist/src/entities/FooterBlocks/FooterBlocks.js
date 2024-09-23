import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { footer } from "@/shared/constants";
import * as classes from "./classes.module.scss";
var FooterBlocks = function () {
    return (_jsx("div", { className: classes.block, children: footer.map(function (item) {
            return (_jsxs("div", { className: classes.container, children: [_jsx("h3", { children: item.title }), _jsx("ul", { children: item.text.map(function (link) { return (_jsx("li", { children: link }, link)); }) })] }, item.id));
        }) }));
};
export default FooterBlocks;
