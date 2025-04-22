import { model, Model, Schema } from "mongoose";
import { IAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemesterCodes, AcademicSemesterMonths, AcademicSemesterTitles } from "./AcademicSemester.constants";
import { ApiError } from "../../../Error/ApiError";
import { titleCodeMapper } from "./AcademicSemester.utils";

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
        enum: AcademicSemesterMonths
    },
    endMonth: {
        type: String,
        required: true,
        enum: AcademicSemesterMonths
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

    const expectedCode = titleCodeMapper[this.title as keyof typeof titleCodeMapper];

    if (this.code !== expectedCode) {
        return next(new ApiError(400, `Code is not valid for ${this.title}`));
    }

    next();
});




type IAcademicSemesterModel = Model<IAcademicSemester, object>;

export const AcademicSemester = model<IAcademicSemester, IAcademicSemesterModel>("AcademicSemester", academicSemesterSchema);