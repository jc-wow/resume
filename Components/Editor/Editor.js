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
exports.LeftEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./editor.scss");
var react_ace_1 = __importDefault(require("react-ace"));
require("ace-builds/src-noconflict/mode-json");
require("ace-builds/src-noconflict/theme-monokai");
var LeftEditor = function (props) {
    var editResult = props.editResult, setEditResult = props.setEditResult;
    var changeInput = function (value) {
        setEditResult(value);
    };
    var changeSelection = function (selection, e) {
        console.log(selection, e);
        // console.log(jsonlint);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "left-editor" }, { children: (0, jsx_runtime_1.jsx)(react_ace_1.default, { value: editResult, onSelectionChange: changeSelection, mode: "json", theme: "monokai", showPrintMargin: false, fontSize: 16, focus: true, enableLiveAutocompletion: true, style: {
                height: "80vh",
                width: "100%",
            }, onChange: changeInput }, void 0) }), void 0));
};
exports.LeftEditor = LeftEditor;
