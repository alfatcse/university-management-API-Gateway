import { string, z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles
} from './academicSemester.constants';
const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is Required‚'
    }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is Required'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is Required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is Required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is Required'
    })
  })
});
const update = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    year: z.number().optional(),
    startMonth: z.string().optional(),
    endMonth: z.string().optional()
  })
});
export const AcademicSemesterValidation = {
  create,
  update
};
