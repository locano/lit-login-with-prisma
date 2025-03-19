import { Response } from "express";

function sendResponse<T>(data: {
  res: Response;
  statusCode?: number;
  message?: string;
  code?: string;
  data?: T;
}) {
  if (!data.code && data.data) {
    return data.res.status(data.statusCode || 200).json(data.data);
  }

  return data.res.status(data.statusCode || 200).json({
    message: data.message,
    code: data.code,
    data: data.data,
  });
}

export default sendResponse;
