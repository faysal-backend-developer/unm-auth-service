import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";

const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = req.body;
        const createdUser = await UserService.createUser(user);
        if (!createdUser) {
            res.status(400).json({
                success: false,
                message: 'Failed to create user'
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: createdUser
            })
        }
    } catch (error) {
        next(error);
    }
};


export const UserController = {
    create
}