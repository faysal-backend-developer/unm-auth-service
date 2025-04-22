import { IGenericErrorMessage } from "../Interfaces/IGenericErrorMessage";

export const handleMongooseCastError = (error: any): IGenericErrorMessage => {
    const errorMessages = [
        {
            path: error.path,
            message: `Invalid ${error.path}: ${error.value}`,
        },
    ];

    return {
        statusCode: 400,
        message: 'Cast Error',
        errorMessages,
    };
}