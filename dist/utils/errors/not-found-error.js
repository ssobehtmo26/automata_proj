"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor(m) {
        super(m);
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
                field: "not-found",
            },
        ];
    }
}
exports.NotFoundError = NotFoundError;
