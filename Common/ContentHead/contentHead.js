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
exports.ContentHead = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var contentHead_module_scss_1 = __importDefault(require("./contentHead.module.scss"));
require("antd/dist/antd.css");
var antd_1 = require("antd");
var ContentHead = function (props) {
    var contentHead = props.contentHead;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: contentHead_module_scss_1.default.contentHead }, { children: [contentHead, (0, jsx_runtime_1.jsx)(antd_1.Divider, { className: "contentHead-divider" }, void 0)] }), void 0));
};
exports.ContentHead = ContentHead;
