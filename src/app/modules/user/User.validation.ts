import { string, z } from "zod";
import { roleEnum } from "./User.constants";

const userCreateZodValidation = z.object({
    body: z.object({
        role: z.string({
            required_error: "Role is required",
        }).refine((value) => roleEnum.includes(value as any)),
        password: z.string().optional()
    })
});

const updateUserZodValidation = z.object({
    body: z.object({
        role: z.string().refine((value) => roleEnum.includes(value as any)).optional(),
        password: z.string().optional()
    })
})


export const UserValidation = {
    userCreateZodValidation,
    updateUserZodValidation
}