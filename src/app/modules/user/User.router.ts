import { Router } from "express";
import { UserController } from "./User.controller";


const router = Router();


router.post("/create", UserController.create);

export const UserRouter = router;