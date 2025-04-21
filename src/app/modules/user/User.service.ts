import { IUser } from "./User.interface";
import { User } from "./User.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
    const createdUser = await User.create(user);

    if (!createdUser) {
        return null;
    };

    return createdUser;
};


export const UserService = {
    createUser
}