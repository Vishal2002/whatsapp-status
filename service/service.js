const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();
const AWS = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

async function deleteFromS3(url) {
  const urlParts = new URL(url);
  const bucket = urlParts.hostname.split('.')[0];
  let key = urlParts.pathname.substring(1);
  key = decodeURIComponent(key);

  const params = {
    Bucket: bucket,
    Key: key,
  };

  await AWS.send(new DeleteObjectCommand(params));
}

module.exports = {
  AWS,
  deleteFromS3
};
