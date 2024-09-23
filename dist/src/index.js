import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Trial from "@/entities/Trial/Trial";
import Categories from "@/pages/Home/Categories/Categories";
import Plan from "@/pages/Home/Plan/Plan";
import Questions from "@/pages/Home/Questions/Questions";
import SectionHeader from "@/pages/Home/SectionHeader/SectionHeader";
import StreamSection from "@/pages/Home/Stream/StreamSection";
import { textCategories, titleCategories } from "@/shared/constants";
import Footer from "@/widgets/Footer/Footer";
var App = function () {
    return (_jsxs(_Fragment, { children: [_jsx(SectionHeader, {}), _jsx(Categories, { text: textCategories, title: titleCategories }), _jsx(StreamSection, {}), _jsx(Questions, {}), _jsx(Plan, {}), _jsx(Trial, {}), _jsx(Footer, {})] }));
};
export default App;
