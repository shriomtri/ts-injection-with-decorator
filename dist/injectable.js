"use strict";
exports.__esModule = true;
exports.Injectable = void 0;
var container_1 = require("./container");
function Injectable(token) {
    return function (target) {
        container_1.container.reserve(token, target);
    };
}
exports.Injectable = Injectable;
