import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";

    cloudinary.config({ 
        cloud_name: 'da6jeifvv', 
        api_key: '837637323199564', 
        api_secret: 'FC08ROx_mE6qN1ihDHEJG3vHvlw' 
    });
    
 const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

export { cloudinary, storage };