"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return factorial(num - 1) * num;
}
exports.factorial = factorial;
//# sourceMappingURL=utils.js.map