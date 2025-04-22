import { Router } from "express";
import { UserController } from "./User.controller";
import { validateRequest } from "../../utils/validateReuest";
import { UserValidation } from "./User.validation";


const router = Router();


router.post("/", validateRequest(UserValidation.userCreateZodValidation), UserController.create);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.patch("/:id", validateRequest(UserValidation.updateUserZodValidation), UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRouter = router;