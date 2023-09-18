import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmsgdonea',
  api_key: '391324688223571',
  api_secret: 'erpoZ9Ltg5g0yMxNed6eL63KSVA'
});
const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};
export const FileUploadHelper = {
  uploadToCloudinary
};
