const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "vehicle-Image");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
        + path.extname(file.originalname))
      },
    
    
});

const fileFilter = (req, file, cb) => {

    const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ];
    
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        return cb(new Error("Invalid file type."), false );
      }

}

const maxSize = 10 * 1024 * 1024;

const fileLimits = {
  fileSize: maxSize,
  files: 2
}

const upload  = multer({ storage: storage, fileFilter: fileFilter, limits: fileLimits });

module.exports = {
  upload
 }