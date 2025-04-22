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


const getSingle = async (id: string): Promise<IAcademicSemester | null> => {
    const result = await AcademicSemester.findById(id);
    if (!result) {
        return null;
    }
    return result;
};


const updateData = async (id: string, payload: Partial<IAcademicSemester>): Promise<IAcademicSemester | null> => {
    const result = await AcademicSemester.findByIdAndUpdate(id, payload, {
        new: true
    });
    if (!result) {
        return null;
    }
    return result;
};


const deleteAcademicSemester = async (id: string): Promise<IAcademicSemester | null> => {
    const result = await AcademicSemester.findByIdAndDelete(id);
    if (!result) {
        return null;
    }
    return result;
}

export const AcademicSemesterService = {
    create,
    getAll,
    getSingle,
    updateData,
    deleteAcademicSemester
}