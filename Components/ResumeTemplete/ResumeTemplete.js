"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeTemplete = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./resumeTemplete.scss");
var Index_1 = require("@/Components/Parser/Index");
var contentHead_1 = require("@/Common/ContentHead/contentHead");
var getExperienceJsx = function (experience) {
    return Object.keys(experience).map(function (ele) { return experience[ele]; });
};
var ResumeTemplete = function (props) {
    var editResult = props.editResult;
    var formatEditResult;
    try {
        formatEditResult = JSON.parse(editResult);
    }
    catch (e) {
        console.log(formatEditResult);
    }
    var _a = formatEditResult.name, name = _a === void 0 ? "" : _a, _b = formatEditResult.phone, phone = _b === void 0 ? "" : _b, _c = formatEditResult.email, email = _c === void 0 ? "" : _c, _d = formatEditResult.workExperience, workExperience = _d === void 0 ? {} : _d, _e = formatEditResult.education, education = _e === void 0 ? {} : _e, _f = formatEditResult.project, project = _f === void 0 ? {} : _f;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "resume-templete" }, { children: [(0, jsx_runtime_1.jsx)(Index_1.Name, { name: name }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "subtitle" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "subtitle-left" }, { children: (0, jsx_runtime_1.jsx)(Index_1.Phone, { phone: phone }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "subtitle-right" }, { children: (0, jsx_runtime_1.jsx)(Index_1.Email, { email: email }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(contentHead_1.ContentHead, { contentHead: "教育经历" }, void 0), getExperienceJsx(education).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Index_1.Expericence, { experience: ele }, ele.title + index)); }), (0, jsx_runtime_1.jsx)(contentHead_1.ContentHead, { contentHead: "工作经历" }, void 0), getExperienceJsx(workExperience).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Index_1.Expericence, { experience: ele }, ele.title + index)); }), (0, jsx_runtime_1.jsx)(contentHead_1.ContentHead, { contentHead: "工作以外经历" }, void 0), getExperienceJsx(project).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Index_1.Expericence, { experience: ele }, ele.title + index)); })] }), void 0));
};
exports.ResumeTemplete = ResumeTemplete;
