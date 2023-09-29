"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
const givenUrl = "https://forms.gle/BhmfbHytE7oZAWYCA";
const fillForm = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: "new" });
    const page = yield browser.newPage();
    yield page.goto(givenUrl);
    // await page.waitForSelector("#i12");
    // await page.click("#i12");
    //  await page.click("#i9", "Yes");
    yield page.waitForSelector(
      "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div"
    );
    const numElements = yield page.evaluate(() => {
      return document.querySelectorAll(
        "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div"
      ).length;
    });
    const titles = yield page.evaluate(() => {
      let abc = [];
      for (let i = 1; i <= 3; i++) {
        abc.push(
          "hello " +
            document.querySelector(
              `#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${i}) > div > div > div.z12JJ > div`
            ).textContent
        );
      }
      return abc;
    });
    console.log(titles);
    //
    // #mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input
    console.log(numElements);
    for (let x = 0; x < numElements; x++) {
      const input_selector = `#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(${
        x + 1
      }) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input`;
      // #mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input
      const element = yield page.$(input_selector);
      if (element) {
        yield page.waitForSelector(input_selector);
        yield delay(500);
        yield page.type(input_selector, titles[x]);
      } else {
        console.log(titles[x] + "djdj");
        const selector = "#i10";
        yield page.waitForSelector(selector);
        yield delay(500);
        yield page.click(selector);
      }
      yield page.screenshot({ path: `screen${x + 1}.jpg` });
    }
    yield delay(500);
    yield delay(500);
    yield page.screenshot({
      path: "after.jpg",
    });
    // await page.waitForSelector("#i9");
    yield delay(500);
    yield page.screenshot({
      path: "before1.jpg",
    });
    // await page.click("#i9");
    yield delay(500);
    yield delay(500);
    yield page.screenshot({
      path: "after1.jpg",
    });
    yield page.waitForSelector(
      "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div"
    );
    yield delay(500);
    yield page.click(
      "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div"
    );
    yield delay(500);
    yield page.screenshot({
      path: "superafter.jpg",
    });
    yield browser.close();
  });
fillForm();
