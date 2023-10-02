"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillDetails = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const puppeteer_1 = __importDefault(require("puppeteer"));
const constants_1 = require("../utils/constants");
const delay_1 = require("../utils/delay");
const validate_request_1 = require("../../../middlewares/validate-request");
const delete_files_1 = require("../../../utils/delete-files");
const attach_url_1 = require("../utils/attach-url");
const router = express_1.default.Router();
exports.fillDetails = router;
router.post("/api/fill-details", [
    (0, express_validator_1.body)("link")
        .notEmpty()
        .withMessage("Field link must be specified")
        .isURL()
        .withMessage("Please enter a valid URL"),
    validate_request_1.validateRequest,
], (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { link } = req.body;
        yield (0, delete_files_1.deleteFiles)(); // deleting old images
        const browser = yield puppeteer_1.default.launch({ headless: "new" });
        const page = yield browser.newPage();
        yield page.goto(link);
        yield page.setViewport({ width: 1920, height: 1080 });
        yield (0, delay_1.delay)(500);
        yield page.waitForSelector(constants_1.Constants.divSelector);
        const numElements = yield page.evaluate((divSelector) => {
            return document.querySelectorAll(divSelector).length;
        }, constants_1.Constants.divSelector);
        const titles = yield page.evaluate((titleSelector, numElements) => {
            let titles = [];
            for (let i = 1; i <= numElements; i++) {
                titles.push(document.querySelector(titleSelector.replace("$", i.toString()))
                    .textContent);
            }
            return titles;
        }, constants_1.Constants.titleSelector, numElements);
        for (let x = 0; x < numElements; x++) {
            let inputSelector = constants_1.Constants.inputSelector.replace("$", (x + 1).toString());
            const element = yield page.$(inputSelector);
            yield (0, delay_1.delay)(500);
            if (element) {
                yield page.waitForSelector(inputSelector);
                yield page.type(inputSelector, `hello ${titles[x]}`, { delay: 10 });
            }
            else {
                inputSelector = constants_1.Constants.checkBoxSelector.replace("$", (x + 1).toString());
                yield page.waitForSelector(inputSelector);
                yield page.click(inputSelector);
            }
            yield page.screenshot({ path: `static/images/fields${x + 1}.jpg` });
        }
        yield page.waitForSelector(constants_1.Constants.submitSelector);
        yield page.click(constants_1.Constants.submitSelector);
        yield (0, delay_1.delay)(500);
        yield page.screenshot({
            path: "static/images/finalSubmission.jpg",
        });
        yield page.close();
        yield browser.close();
        let images = yield (0, attach_url_1.getImageUrl)();
        res.json({
            message: "success",
            data: images,
        });
    }
    catch (error) {
        next(error);
    }
}));
