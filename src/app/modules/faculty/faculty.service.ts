import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  console.log(id);
  const response: IGenericResponse = await AuthService.patch(`/faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const FacultyService = {
  updateOneInDB
};
