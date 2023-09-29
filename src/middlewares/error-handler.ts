import { CustomError } from "../utils/errors/custom-error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  console.log(err);
  return res.status(500).send({
    errors: [{ message: "Something went wrong", field: "Server Error" }],
  });
};
