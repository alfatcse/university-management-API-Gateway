import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
// const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await AcademicSemesterService.getAllFromDB(req);
//     sendResponse(res, result);
//   } catch (err) {
//     next(err);
//   }
// };
// const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await AcademicSemesterService.updateOneIntoDB(req);
//     sendResponse(res, result);
//   } catch (err) {
//     next(err);
//   }
// };
// const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     console.log('req', req.params.id);
//     const result = await AcademicSemesterService.deleteByIdFromDB(req);
//     sendResponse(res, result);
//   } catch (error) {
//     next(error);
//   }
// };
export const AcademicDepartmentController = {
  insertIntoDB
  //   getAllFromDB,
  //   updateOneIntoDB,
  //   deleteByIdFromDB
};
