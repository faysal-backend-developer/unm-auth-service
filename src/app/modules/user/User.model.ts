import { Model, model, Schema } from "mongoose";
import { IUser } from "./User.interface";
import { roleEnum } from "./User.constants";

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: roleEnum,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

type UserModel = Model<IUser, object>;

export const User = model<IUser, UserModel>("User", userSchema);