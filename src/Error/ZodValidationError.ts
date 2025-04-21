import { IGenericErrorMessage } from "../Interfaces/IGenericErrorMessage";
import { ZodError } from "zod";

export const handleZodValidationError = (error: ZodError): IGenericErrorMessage => {
    const errorMessages = error.errors.map(err => {
        return {
            path: err.path[0],
            message: err.message,
        };
    });

    return {
        statusCode: 400,
        message: "Validation Error",
        errorMessages
    }
};