import { CustomError } from "./custom-error";

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [
      {
        message: this.message,
        field: "not-found",
      },
    ];
  }
}

export { NotFoundError };
