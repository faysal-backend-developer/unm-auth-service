import { IUser } from "./User.interface";
import { User } from "./User.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);

    if (!createdUser) {
        return null;
    };

    return createdUser;
};


const getAllUser = async (): Promise<IUser[] | null> => {
    const users = await User.find();

    if (!users) {
        return null;
    };

    return users;
}


const getUserById = async (id: string): Promise<IUser | null> => {
    const user = await User.findById(id);
    if (!user) {
        return null;
    } else {
        return user;
    }
}

const updateUser = async (id: string, user: Partial<IUser>): Promise<IUser | null> => {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) {
        return null;
    } else {
        return updatedUser;
    }
}

const deleteUser = async (id: string): Promise<IUser | null> => {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        return null;
    } else {
        return deletedUser;
    }
}

export const UserService = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}