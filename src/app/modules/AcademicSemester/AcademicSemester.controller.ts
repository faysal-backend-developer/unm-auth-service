import { ApiError } from "../../../Error/ApiError";
import { CatchAsync } from "../../utils/CatchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { IAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemesterService } from "./AcademicSemester.service";

const create = CatchAsync(async (req, res, next) => {
    const { ...payload } = req.body;
    const result = await AcademicSemesterService.create(payload);
    if (!result) {
        throw new ApiError(404, "Failed to create academic semester");
    }
    sendResponse<IAcademicSemester>(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester created successfully",
        data: result
    })
});


const getAll = CatchAsync(async (req, res, next) => {
    const result = await AcademicSemesterService.getAll();
    if (!result) {
        throw new ApiError(404, "Failed to get academic semester");
    }
    sendResponse<IAcademicSemester[]>(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester retrieved successfully",
        data: result
    })
})


export const AcademicSemesterController = {
    create,
    getAll
}