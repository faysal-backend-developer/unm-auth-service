import { IAcademicSemester } from "./AcademicSemester.interface";
import { AcademicSemester } from "./AcademicSemester.model";


const create = async (payload: IAcademicSemester): Promise<IAcademicSemester | null> => {
    const result = await AcademicSemester.create(payload);

    if (!result) {
        return null;
    }
    return result;
}

const getAll = async (): Promise<IAcademicSemester[] | null> => {
    const result = await AcademicSemester.find();

    if (!result) {
        return null;
    }
    return result;
}

export const AcademicSemesterService = {
    create,
    getAll
}