import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";

const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { ...user } = req.body;
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

const getAllUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const users = await UserService.getAllUser();
        if (!users) {
            res.status(400).json({
                success: false,
                message: 'Failed to get users'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Users fetched successfully',
                data: users
            })
        }
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await UserService.getUserById(id);
        if (!user) {
            res.status(400).json({
                success: false,
                message: 'Failed to get user'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'User fetched successfully',
                data: user
            })
        }
    } catch (error) {
        next(error);
    }
};


const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const { ...user } = req.body;
        const updatedUser = await UserService.updateUser(id, user);
        if (!updatedUser) {
            res.status(400).json({
                success: false,
                message: 'Failed to update user'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: updatedUser
            })
        }
    } catch (error) {
        next(error);

    }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedUser = await UserService.deleteUser(id);
        if (!deletedUser) {
            res.status(400).json({
                success: false,
                message: 'Failed to delete user'
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully',
                data: deletedUser
            })
        }
    } catch (error) {
        next(error);
    }
}

export const UserController = {
    create,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}