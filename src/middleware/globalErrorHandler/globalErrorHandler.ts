import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { handleZodValidationError } from "../../Error/ZodValidationError";
import { handleMongooseValidationError } from "../../Error/MongooseValidationError";
import { handleMongooseCastError } from "../../Error/MongooseCastError";
import { handleMongooseConnectionError } from "../../Error/MongooseConnectionError";
import { ApiError } from "../../Error/ApiError";
import { sendErrorResponse } from "../../shared/SendErrorResponse";

const globalErrorHandler: ErrorRequestHandler = (error: any | Error, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Something went wrong";
    let errorMessages: { path: number | string; message: string }[] = [];

    if (error instanceof ZodError) {
        const simplifyError = handleZodValidationError(error);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorMessages = simplifyError.errorMessages || [];
    } else if (error?.name === "ValidationError") {
        const simplifyError = handleMongooseValidationError(error);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorMessages = simplifyError.errorMessages || [];
    } else if (error?.name === "CastError") {
        const simplifyError = handleMongooseCastError(error);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorMessages = simplifyError.errorMessages || [];
    } else if (error?.name === "MongooseServerSelectionError") {
        const simplifyError = handleMongooseConnectionError(error);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorMessages = simplifyError.errorMessages || [];
    } else if (error instanceof ApiError) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error?.message ? [{ path: "", message: error.message }] : [];
    } else if (error instanceof Error) {
        statusCode = 500;
        message = error.message;
        errorMessages = error?.message ? [{ path: "", message: error.message }] : [];
    }

    sendErrorResponse(res, {
        success: false,
        statusCode,
        message,
        errorMessages,
        stack: process.env.NODE_ENV === "development" ? error?.stack : undefined,
    })

};

export default globalErrorHandler;