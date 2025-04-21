
import { Router } from "express";
import { UserRouter } from "../user/User.router";

const routers = Router();



const routes = [
    {
        path: "/user",
        route: UserRouter
    }
];

routes.forEach((route) => routers.use(route.path, route.route));

export default routers;
