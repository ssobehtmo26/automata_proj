"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../utils/errors/custom-error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.log(err);
    return res.status(500).send({
        errors: [{ message: "Something went wrong", field: "Server Error" }],
    });
};
exports.errorHandler = errorHandler;
