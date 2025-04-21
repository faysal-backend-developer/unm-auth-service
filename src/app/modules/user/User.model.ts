import { Model, model, Schema } from "mongoose";
import { IUser } from "./User.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "student", "faculty", "librarian", "superAdmin", "superFaculty"],
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