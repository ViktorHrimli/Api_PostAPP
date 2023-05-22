const cloudinary = require("cloudinary").v2;

const { API_CLOUD_KEY, CLOUD_NAME, API_CLOUD_SECRET_KEY } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_CLOUD_KEY,
  api_secret: API_CLOUD_SECRET_KEY,
});

const uploadPhotoOnCloud = async (photo: any, name: string) => {
  await cloudinary.uploader
    .upload(photo, {
      public_id: name,
    })
    .then((data: any) => {
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err: any) => {
      console.log(err);
    });

  const url = cloudinary.url(name, {
    width: 100,
    height: 150,
    Crop: "fill",
  });

  return url;
};

export { uploadPhotoOnCloud };
