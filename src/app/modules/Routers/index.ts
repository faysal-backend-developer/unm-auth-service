
import { Router } from "express";
import { UserRouter } from "../user/User.router";
import { AcademicSemesterRouter } from "../AcademicSemester/AcademicSemester.router";

const routers = Router();



const routes = [
    {
        path: "/user",
        route: UserRouter
    },
    {
        path: "/academic-semester",
        route: AcademicSemesterRouter
    }
];

routes.forEach((route) => routers.use(route.path, route.route));

export default routers;
