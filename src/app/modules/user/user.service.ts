import { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const createStudent = async (req: Request, res?: Response, next?: NextFunction) => {
  const file = req.file;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  console.log('Upload Iamge', uploadedImage);
};
export const UserService = {
  createStudent
};
