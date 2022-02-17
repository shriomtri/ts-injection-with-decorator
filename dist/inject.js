"use strict";
exports.__esModule = true;
exports.Inject = void 0;
var container_1 = require("./container");
function Inject(token) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return container_1.container.resolve(token); },
            enumerable: true,
            configurable: true
        });
    };
}
exports.Inject = Inject;
