import { IOverrideRequest } from "./apiReponse.interface";
import { Response } from "express";
import * as http from "http";
import Logger from "../../config/lib/logger";

const result = (
  res: Response,
  status: number = 200,
  message: string,
  data: Object,
  cookie?: any
): void => {
  res.status(status).json({ message, data, success: true });
  Logger.info(`status: ${status} message: ${message}`); //data: ${JSON.stringify(data)}
};
const error = (
  res: Response,
  status: number = 404,
  error: Error,
  message: string = error.message,
  override?: IOverrideRequest
): void => {
  const data = {
    code: http.STATUS_CODES[status],
    message: message,
    success: false,
    override,
  };
  res.status(status).json(data);
  Logger.error(
    `code: ${data.code} message: ${data.message} success: ${data.success}`
  );
};

export default {
  result,
  error,
};
/* export default class ApiResponse {
  static result = (res: Response, data: object,
                   status: number = 200,
                   cookie: ICookie = null) => {
    res.status(status);
    if (cookie) {
      res.cookie(cookie.key, cookie.value);
    }
    res.json({
      data,
      success: true,
    });
  }

  static error = (res: Response,
                  status: number = 400,
                  error: string = httpStatusCodes.getStatusText(status),
                  override: IOverrideRequest = null) => {
    res.status(status).json({
      override,
      error: {
        message: error,
      },
      success: false,
    });
  }

  static setCookie = (res: Response, key: string, value: string) => {
    res.cookie(key, value);
  }
} */
