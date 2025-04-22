import { model, Model, Schema } from "mongoose";
import { IAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemesterCodes, AcademicSemesterTitles } from "./AcademicSemester.constants";
import { ApiError } from "../../../Error/ApiError";

const academicSemesterSchema = new Schema<IAcademicSemester>({
    title: {
        type: String,
        required: true,
        enum: AcademicSemesterTitles,
    },
    year: {
        type: Number,
        required: true,
        min: 2024
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemesterCodes
    },
    startMonth: {
        type: String,
        required: true,
    },
    endMonth: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
}).pre("save", async function (next) {
    const isExist = await AcademicSemester.findOne({
        title: this.title,
        year: this.year,
    });

    if (isExist) {
        return next(new ApiError(409, "Academic semester already exists"));

    }
    next();
});

type IAcademicSemesterModel = Model<IAcademicSemester, object>;

export const AcademicSemester = model<IAcademicSemester, IAcademicSemesterModel>("AcademicSemester", academicSemesterSchema);