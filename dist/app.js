"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config/config");
const error_handler_1 = require("./middlewares/error-handler");
const fill_details_1 = require("./modules/form/routes/fill-details");
require("dotenv").config();
let config = new config_1.AppConfig();
exports.config = config;
config.setPort(process.env.PORT);
const app = (0, express_1.default)();
exports.app = app;
app.get("/", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../static", "index.html"));
});
app.use(express_1.default.static("static/images"));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../static")));
app.use(fill_details_1.fillDetails);
app.use(error_handler_1.errorHandler);
