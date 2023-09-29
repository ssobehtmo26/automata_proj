import express from "express";
import path from "path";
import { AppConfig } from "./config/config";
import { errorHandler } from "./middlewares/error-handler";
import { fillDetails } from "./modules/form/routes/fill-details";

require("dotenv").config();

let config = new AppConfig();
config.setPort(process.env.PORT);

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../static", "index.html"));
});

app.use(express.static("static/images"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../static")));
app.use(fillDetails);
app.use(errorHandler);

export { app, config };
