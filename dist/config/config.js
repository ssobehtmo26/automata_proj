"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
class AppConfig {
    constructor() {
        Object.setPrototypeOf(this, AppConfig.prototype);
        this._is_production = false;
    }
    setPort(p) {
        this._port = p;
    }
    get port() {
        return this._port;
    }
}
exports.AppConfig = AppConfig;
