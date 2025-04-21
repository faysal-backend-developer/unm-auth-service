import { Router } from "express";
import { UserController } from "./User.controller";


const router = Router();


router.post("/", UserController.create);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRouter = router;