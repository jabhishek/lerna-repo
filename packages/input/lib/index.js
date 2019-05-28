"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Input = ({ value, onChange, type = 'text', name, id }) => {
    return React.createElement("input", { id: id, name: name, value: value, onChange: (e) => onChange(e.target.value), type: type });
};
exports.InputField = (_a) => {
    var { label, id } = _a, props = __rest(_a, ["label", "id"]);
    return React.createElement("div", null,
        React.createElement("label", { htmlFor: id }, label),
        React.createElement(exports.Input, Object.assign({ id: id }, props)));
};
//# sourceMappingURL=index.js.map
