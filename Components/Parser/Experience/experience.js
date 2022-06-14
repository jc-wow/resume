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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expericence = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var experience_module_scss_1 = __importDefault(require("./experience.module.scss"));
var Expericence = function (props) {
    var _a = props.experience, title = _a.title, occupation = _a.occupation, time = _a.time, _b = _a.content, content = _b === void 0 ? {} : _b;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: experience_module_scss_1.default.experience }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: experience_module_scss_1.default.title }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: experience_module_scss_1.default.position }, { children: title }), void 0), " ", (0, jsx_runtime_1.jsx)("span", { children: time }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { children: occupation }, void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ className: experience_module_scss_1.default.contentList }, { children: Object.keys(content)
                    .map(function (ele) { return content[ele]; })
                    .map(function (ele, index) { return ((0, jsx_runtime_1.jsx)("li", { children: ele }, ele + index)); }) }), void 0)] }), void 0));
};
exports.Expericence = Expericence;
