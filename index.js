require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .create_upload_preset({
    name: 'vuejs-portfolio-video',
    resource_type: 'video',
    use_filename: true,
    unique_filename: false,
    folder: 'vuejs-portfolio',
    unsigned: false,
    eager: {
      height: 500,
      width: 1200,
      crop: 'pad',
      background: 'blurred'
    }
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
