const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  yearJoined: { type: Date, required: true }, // or simply use the timestamp from the user model
  biography: { type: String, required: false },
  interests: [{ type: String }], // array of strings to store multiple interests
  funFacts: [{ type: String }], // array of strings to store multiple fun facts
  profilePicture: { type: String, required: false }, // URL or path to the image
  socialMediaAccounts: {
    twitter: { username: String, followers: Number, following: Number, likes: Number, comments: Number },
    facebook: { username: String, followers: Number, following: Number, likes: Number, comments: Number },
    instagram: { username: String, followers: Number, following: Number, likes: Number, comments: Number },
    tiktok: { username: String, followers: Number, following: Number, likes: Number, comments: Number },
    // ... any other social media platforms
  },
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
