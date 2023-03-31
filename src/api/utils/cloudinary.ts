const cloudinary = require("cloudinary").v2;

const { API_CLOUD_KEY, CLOUD_NAME, API_CLOUD_SECRET_KEY } = process.env;

cloudinary.config({
  cloud_name: "djoprd9i4",
  api_key: "147198124453578",
  api_secret: "D8yVv2i7e2JOmho2r-Hu5vA_6OA",
});

// cloud_name: "djoprd9i4",
//   api_key: "147198124453578",
//   api_secret: "D8yVv2i7e2JOmho2r-Hu5vA_6OA"

const uploadPhotoOnCloud = async (photo: any, name: string) => {
  await cloudinary.uploader
    .upload(photo, {
      public_id: "olympic_flag",
    })
    .then((data: any) => {
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err: any) => {
      console.log(err);
    });

  const url = cloudinary.url("olympic_flag", {
    width: 100,
    height: 150,
    Crop: "fill",
  });

  return url;
};

export { uploadPhotoOnCloud };
