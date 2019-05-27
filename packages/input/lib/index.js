"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Input = ({ value, onChange, type = 'text' }) => {
    return React.createElement("input", { value: value, onChange: (e) => onChange(e.target.value), type: type });
};
//# sourceMappingURL=index.js.map