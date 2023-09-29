import { app, config } from "./app";

const start = async () => {
  if (!config.port) {
    throw new Error("[CONFIG] PORT NOT FOUND!!");
  }

  app.listen(config.port, () => {
    console.log("[listening] SERVER ON", config.port);
  });
};
start();
