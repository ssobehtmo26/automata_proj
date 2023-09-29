import express from "express";
import fs from "fs";

const getImageUrl = async () => {
  const abc = [];
  for (const file of fs.readdirSync("static/images")) {
    abc.push(file);
  }
  return abc;
};

export { getImageUrl };
