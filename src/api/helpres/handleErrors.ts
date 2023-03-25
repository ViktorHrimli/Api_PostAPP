const messages: any = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const HttpError = (status: number, message = messages[status]) => {
  const error: any = new Error(message);
  error.status = status;
  console.log(error);

  return error;
};

export { HttpError };
