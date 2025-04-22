import { NextFunction, Request, Response } from "express";
import { UserService } from "./User.service";
import { ApiError } from "../../../Error/ApiError";
import { CatchAsync } from "../../utils/CatchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { IUser } from "./User.interface";

const create = CatchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { ...user } = req.body;
    const createdUser = await UserService.createUser(user);
    if (!createdUser) {
        throw new ApiError(404, 'Failed to create user');
    }
    sendResponse<IUser | null>(res, {
        statusCode: 200,
        success: true,
        message: 'User created successfully',
        data: createdUser
    })

})

const getAllUser = CatchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const users = await UserService.getAllUser();
    if (!users) {
        throw new ApiError(404, 'Failed to get users');
    }
    sendResponse<IUser[] | null>(res, {
        success: true,
        statusCode: 200,
        message: 'Users retrieved successfully',
        data: users
    })


})

const getUserById = CatchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
        throw new ApiError(404, 'Failed to get user');
    }
    sendResponse<IUser | null>(res, {
        statusCode: 200,
        success: true,
        message: 'User fetched successfully',
        data: user
    })


})


const updateUser = CatchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { id } = req.params;

    const user = await UserService.getUserById(id);

    if (!user) {
        throw new ApiError(404, 'Failed to get user');
    }
    const { ...payload } = req.body;
    const updatedUser = await UserService.updateUser(id, payload);
    if (!updatedUser) {
        throw new ApiError(404, 'Failed to update user');
    }
    sendResponse<IUser | null>(res, {
        statusCode: 200,
        success: true,
        message: 'User updated successfully',
        data: updatedUser
    })


})

const deleteUser = CatchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { id } = req.params;
    const deletedUser = await UserService.deleteUser(id);
    if (!deletedUser) {
        throw new ApiError(404, 'Failed to delete user');
    }

    sendResponse<IUser | null>(res, {
        statusCode: 200,
        success: true,
        message: 'User deleted successfully',
        data: deletedUser
    })
})

export const UserController = {
    create,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}