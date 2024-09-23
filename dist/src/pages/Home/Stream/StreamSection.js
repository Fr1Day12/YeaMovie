import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StreamCard from "@/entities/StreamCard/StreamCard";
import { streamingDevices } from "@/shared/constants";
import * as classes from "./classes.module.scss";
var StreamSection = function () {
    return (_jsxs("section", { children: [_jsxs("div", { className: classes.text, children: [_jsx("h2", { children: "We Provide you streaming experience across various devices." }), _jsx("p", { children: "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment." })] }), _jsx("div", { className: classes.containerCard, children: streamingDevices.map(function (device) { return (_jsx(StreamCard, { name: device.name, img: device.img, text: device.text }, device.id)); }) })] }));
};
export default StreamSection;
