import { z } from "zod";
import { AcademicSemesterCodes, AcademicSemesterTitles } from "./AcademicSemester.constants";

const createAcademicSemesterZodSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
        }).refine((value) => AcademicSemesterTitles.includes(value as any), {
            message: "Invalid title",
        }),
        year: z.number({
            required_error: "Year is required",
        }).min(2024, {
            message: "Year must be greater than or equal to 2024",
        }),
        code: z.number({
            required_error: "Code is required",
        }).refine((value) => AcademicSemesterCodes.includes(value as any), {
            message: "Code must be 2 digits",
        }),
        startMonth: z.string({
            required_error: "Start month is required",
        }),
        endMonth: z.string({
            required_error: "End month is required",
        })

    })
});

export const AcademicSemesterValidation = {
    createAcademicSemesterZodSchema
}