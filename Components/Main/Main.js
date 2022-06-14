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
exports.MainPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./main.scss");
var Editor_1 = require("../Editor/Editor");
var ResumeTemplete_1 = require("../ResumeTemplete/ResumeTemplete");
var resume_config_1 = require("@/Constants/Config/resume-config");
var MainPage = function () {
    var _a = (0, react_1.useState)(JSON.stringify(resume_config_1.template, null, 2)), editResult = _a[0], setEditResult = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "resume-main" }, { children: [(0, jsx_runtime_1.jsx)(Editor_1.LeftEditor, { editResult: editResult, setEditResult: setEditResult }, void 0), (0, jsx_runtime_1.jsx)(ResumeTemplete_1.ResumeTemplete, { editResult: editResult }, void 0)] }), void 0));
};
exports.MainPage = MainPage;
