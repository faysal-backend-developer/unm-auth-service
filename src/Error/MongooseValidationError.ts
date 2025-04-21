import { IGenericErrorMessage } from "../Interfaces/IGenericErrorMessage";

export const handleMongooseValidationError = (error: any): IGenericErrorMessage => {
    const errors = Object.values(error.errors).map((value: any) => {
        return {
            path: value?.path,
            message: value?.message,
        }
    })

    return {
        statusCode: 400,
        message: "Validation Error",
        errorMessages: errors
    }
}