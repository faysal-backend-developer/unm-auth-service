export interface IGenericErrorResponse {
    success: false
    statusCode: number;
    message: string;
    errorMessages: {
        path: number | string;
        message: string;
    }[]
    stack?: string | undefined;
}