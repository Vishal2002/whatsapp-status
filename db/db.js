const mongoose = require('mongoose');
require('dotenv').config();

const userStatusSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  statusContent: { type: String, required: true }, // S3 object URL
  createdAt: { type: Date, required: true, expires: 86400, default: Date.now } // 24 hours in seconds
});

userStatusSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400}); // 24 hours TTL index

const UserStatus = mongoose.model('UserStatus', userStatusSchema);

module.exports = UserStatus;