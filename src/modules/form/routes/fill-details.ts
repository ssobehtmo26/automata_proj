import express, { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import puppeteer from "puppeteer";
import { Constants } from "../utils/constants";
import { delay } from "../utils/delay";
import { validateRequest } from "../../../middlewares/validate-request";
import { deleteFiles } from "../../../utils/delete-files";
import { getImageUrl } from "../utils/attach-url";

const router = express.Router();

router.post(
  "/api/fill-details",
  [
    body("link")
      .notEmpty()
      .withMessage("Field link must be specified")
      .isURL()
      .withMessage("Please enter a valid URL"),

    validateRequest,
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { link } = req.body;

      await deleteFiles(); // deleting old images

      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      await page.goto(link);
      await page.setViewport({ width: 1920, height: 1080 });

      await delay(500);

      await page.waitForSelector(Constants.divSelector);
      const numElements = await page.evaluate((divSelector: string) => {
        return document.querySelectorAll(divSelector).length;
      }, Constants.divSelector);

      const titles = await page.evaluate(
        (titleSelector, numElements) => {
          let titles: any[] = [];

          for (let i = 1; i <= numElements; i++) {
            titles.push(
              document.querySelector(titleSelector.replace("$", i.toString()))!
                .textContent
            );
          }
          return titles;
        },
        Constants.titleSelector,
        numElements
      );

      for (let x = 0; x < numElements; x++) {
        let inputSelector: string = Constants.inputSelector.replace(
          "$",
          (x + 1).toString()
        );

        const element = await page.$(inputSelector);
        await delay(500);

        if (element) {
          await page.waitForSelector(inputSelector);
          await page.type(inputSelector, `hello ${titles[x]}`, { delay: 10 });
        } else {
          inputSelector = Constants.checkBoxSelector.replace(
            "$",
            (x + 1).toString()
          );
          await page.waitForSelector(inputSelector);

          await page.click(inputSelector);
        }

        await page.screenshot({ path: `static/images/fields${x + 1}.jpg` });
      }

      await page.waitForSelector(Constants.submitSelector);
      await page.click(Constants.submitSelector);

      await delay(500);

      await page.screenshot({
        path: "static/images/finalSubmission.jpg",
      });
      await page.close();
      await browser.close();

      let images = await getImageUrl();

      res.json({
        message: "success",
        data: images,
      });
    } catch (error) {
      next(error);
    }
  }
);

export { router as fillDetails };
