import { NextFunction, Request, RequestHandler, Response } from "express"

export const CatchAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler => (req, res, next) => {
    try {
        return fn(req, res, next)
    } catch (error) {
        next(error)
    }
}