const multer = require('multer');
const multerS3 = require("multer-s3");
const { AWS } = require('../service/service');
require('dotenv').config();
const upload = multer({
  storage: multerS3({
    s3: AWS,
    bucket: process.env.BUCKET,
    key: function (req, file, cb) {
      cb(null, `upload/status/${file.originalname}`);
    },
  }),
  
});

module.exports = {upload};
