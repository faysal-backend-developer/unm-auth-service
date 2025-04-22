export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
    title: IAcademicSemesterTitle;
    year: number;
    code: IAcademicSemesterCode;
    startMonth: string;
    endMonth: string;
}