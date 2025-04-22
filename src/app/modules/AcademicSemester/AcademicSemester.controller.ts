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

const getSingle = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSingle(id);
    if (!result) {
        throw new ApiError(404, "Failed to get academic semester");
    }
    sendResponse<IAcademicSemester>(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester retrieved successfully",
        data: result
    })
})


const updateData = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { ...payload } = req.body;

    const findAcademicSemester = await AcademicSemesterService.getSingle(id);
    if (!findAcademicSemester) {
        throw new ApiError(404, "Failed to get academic semester");
    }
    const result = await AcademicSemesterService.updateData(id, payload);
    if (!result) {
        throw new ApiError(404, "Failed to update academic semester");
    }
    sendResponse<IAcademicSemester>(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester updated successfully",
        data: result
    })
});

const deleteAcademicSemester = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const findAcademicSemester = await AcademicSemesterService.getSingle(id);
    if (!findAcademicSemester) {
        throw new ApiError(404, "Failed to get academic semester");
    }
    const result = await AcademicSemesterService.deleteAcademicSemester(id);
    if (!result) {
        throw new ApiError(404, "Failed to delete academic semester");
    }
    sendResponse<IAcademicSemester>(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester deleted successfully",
        data: result
    })
})

export const AcademicSemesterController = {
    create,
    getAll,
    getSingle,
    updateData,
    deleteAcademicSemester
}