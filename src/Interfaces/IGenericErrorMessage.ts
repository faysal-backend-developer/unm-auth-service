export interface IGenericErrorMessage {
    statusCode: number;
    message: string;
    errorMessages?: {
        path: number | string;
        message: string;
    }[]
} 