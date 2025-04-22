import { z } from "zod";
import { AcademicSemesterCodes, AcademicSemesterMonths, AcademicSemesterTitles } from "./AcademicSemester.constants";

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
        code: z.string({
            required_error: "Code is required",
        }).refine((value) => AcademicSemesterCodes.includes(value as any), {
            message: "Code must be 2 digits",
        }),
        startMonth: z.string({
            required_error: "Start month is required",
        }).refine((value) => AcademicSemesterMonths.includes(value as any), {
            message: "Invalid start month",
        }),
        endMonth: z.string({
            required_error: "Start month is required",
        }).refine((value) => AcademicSemesterMonths.includes(value as any), {
            message: "Invalid start month",
        })

    })
});


const updateAcademicSemesterZodSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
        }).refine((value) => AcademicSemesterTitles.includes(value as any), {
            message: "Invalid title",
        }).optional(),
        year: z.number({
            required_error: "Year is required",
        }).min(2024, {
            message: "Year must be greater than or equal to 2024",
        }).optional(),
        code: z.string({
            required_error: "Code is required",
        }).refine((value) => AcademicSemesterCodes.includes(value as any), {
            message: "Code must be 2 digits",
        }).optional(),
        startMonth: z.string({
            required_error: "Start month is required",
        }).optional(),
        endMonth: z.string({
            required_error: "End month is required",
        }).optional()

    })
});

export const AcademicSemesterValidation = {
    createAcademicSemesterZodSchema,
    updateAcademicSemesterZodSchema
}