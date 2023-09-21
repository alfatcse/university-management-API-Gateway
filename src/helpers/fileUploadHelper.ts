import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';

cloudinary.config({
  cloud_name: 'dmsgdonea',
  api_key: '391324688223571',
  api_secret: 'erpoZ9Ltg5g0yMxNed6eL63KSVA'
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
const uploadToCloudinary = async (file: any): Promise<any | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: any) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
