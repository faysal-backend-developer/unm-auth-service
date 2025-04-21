export interface IGenericApiResponse<T> {
    statusCode: number;
    message: string;
    success: boolean;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
    data?: T | null
}