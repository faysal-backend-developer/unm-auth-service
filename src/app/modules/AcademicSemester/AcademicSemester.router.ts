import { Router } from "express";
import { AcademicSemesterController } from "./AcademicSemester.controller";
import { validateRequest } from "../../utils/validateRequest";
import { AcademicSemesterValidation } from "./AcademicSemester.validation";

const router = Router();

router.post("/", validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema), AcademicSemesterController.create);
router.get("/", AcademicSemesterController.getAll);
router.get("/:id", AcademicSemesterController.getSingle);
router.patch("/:id", validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema), AcademicSemesterController.updateData);
router.delete("/:id", AcademicSemesterController.deleteAcademicSemester);
export const AcademicSemesterRouter = router;