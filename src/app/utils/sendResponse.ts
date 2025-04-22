import { Response } from "express"
import { IGenericApiResponse } from "../interfaces/IApiResponse"


export const sendResponse = <T>(res: Response, payload: IGenericApiResponse<T>): void => {
    const { statusCode, success, message, data, meta } = payload;

    res.status(statusCode).json({
        statusCode,
        success,
        message,
        meta,
        data
    })
}