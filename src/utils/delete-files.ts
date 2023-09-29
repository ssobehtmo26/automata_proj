import fs from "fs";
import path from "path";
import { app } from "../app";

const deleteFiles = async () => {
  fs.readdir("static/images", (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      const filePath = path.join("static/images", file);

      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`${file} was deleted`);
      });
    });
  });
};

export { deleteFiles };
