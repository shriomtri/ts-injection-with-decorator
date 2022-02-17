"use strict";
exports.__esModule = true;
exports.container = exports.Container = void 0;
var lodash_1 = require("lodash");
var Container = /** @class */ (function () {
    function Container() {
        this._providers = {};
    }
    Container.prototype.resolve = function (token) {
        var matchedProvider = (0, lodash_1.find)(this._providers, function (_provider, key) { return key === token; });
        if (matchedProvider) {
            return matchedProvider;
        }
        else {
            throw new Error("No provider found for ".concat(token));
        }
    };
    Container.prototype.reserve = function (token, target) {
        exports.container._providers[token] = new target();
    };
    Container.prototype.provider = function (details) {
        this._providers[details.token] = details.userValue;
    };
    return Container;
}());
exports.Container = Container;
exports.container = new Container();
