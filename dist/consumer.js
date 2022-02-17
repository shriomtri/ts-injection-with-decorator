"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Consumer = exports.TimeService = void 0;
var inject_1 = require("./inject");
var injectable_1 = require("./injectable");
var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.getCurrentDate = function () {
        return new Date(Date.now());
    };
    TimeService = __decorate([
        (0, injectable_1.Injectable)('timeService')
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
var Consumer = /** @class */ (function () {
    function Consumer() {
        this.currentDate = this.timeService.getCurrentDate().toISOString();
    }
    __decorate([
        (0, inject_1.Inject)('timeService'),
        __metadata("design:type", TimeService)
    ], Consumer.prototype, "timeService");
    Consumer = __decorate([
        (0, injectable_1.Injectable)('consumer'),
        __metadata("design:paramtypes", [])
    ], Consumer);
    return Consumer;
}());
exports.Consumer = Consumer;
