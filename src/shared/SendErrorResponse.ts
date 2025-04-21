import { Response } from "express";
import { IGenericErrorResponse } from "../Interfaces/IGenericErrorResponse";

export const sendErrorResponse = (
    res: Response,
    { success, statusCode, message, errorMessages, stack }: IGenericErrorResponse
) => {
    res.status(statusCode).json({
        success,
        message,
        errorMessages,
        ...(stack && { stack }),
    });
};