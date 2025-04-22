import { Router } from "express";
import { AcademicSemesterController } from "./AcademicSemester.controller";
import { validateRequest } from "../../utils/validateReuest";
import { AcademicSemesterValidation } from "./AcademicSemester.validation";

const router = Router();

router.post("/", validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema), AcademicSemesterController.create);
router.get("/", AcademicSemesterController.getAll);
export const AcademicSemesterRouter = router;