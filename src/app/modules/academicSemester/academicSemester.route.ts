import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();
router.post('/', AcademicSemesterController.insertIntoDB);
router.get('/', AcademicSemesterController.getAllFromDB);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);
export const academicSemesterRoutes = router;
