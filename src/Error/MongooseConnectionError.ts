import { IGenericErrorMessage } from "../Interfaces/IGenericErrorMessage";


export const handleMongooseConnectionError = (error: any): IGenericErrorMessage => {
    const errorMessages = [
        {
            path: "",
            message: "Failed to connect to database"
        }
    ];

    return {
        statusCode: 500,
        message: "Failed to connect to database",
        errorMessages
    }
}