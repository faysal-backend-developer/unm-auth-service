import { User } from "./User.model"


export const findLastUser = async () => {
    const user = await User.findOne({}, { id: 1, _id: 0 }, { sort: { createdAt: -1 } })
    return user
};



export const generateUserId = async () => {
    const lastUser = await findLastUser();
    if (!lastUser) {
        return "0001";
    }
    const lastUserId = lastUser?.id;
    const newUserId = parseInt(lastUserId) + 1;
    return newUserId.toString().padStart(4, "0");
}