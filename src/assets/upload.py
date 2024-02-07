import cloudinary
import cloudinary.uploader
import cloudinary.api
          
cloudinary.config( 
  cloud_name = "dun267qn1", 
  api_key = "253591764536224", 
  api_secret = "VEF90GI60SZLdiq156OD4sAD90k" 
)


response = cloudinary.uploader.upload(
  "AkinkunmiJosephAKANMUCV.pdf",
  public_id = "AkinkunmiJosephAKANMUCV.pdf",
  tags = ["CV", "CV"],
)
print(response)
