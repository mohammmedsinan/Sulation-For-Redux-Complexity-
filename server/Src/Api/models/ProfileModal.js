import mongoose from 'mongoose';

const Profile = mongoose.Schema({
  username: {
    type: String,
  },
  Avatar: {
    type: String,
  },
  RealName: {
    type: String,
  },
  Followers: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Profile' },
  Following: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Profile' },
  YourTweets: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Tweets' },
  NumberOfLikedTWeets: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Profile' },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    default: Date.now(),
  },
});

const ProfileData = mongoose.model('Profile', Profile);
export default ProfileData;
