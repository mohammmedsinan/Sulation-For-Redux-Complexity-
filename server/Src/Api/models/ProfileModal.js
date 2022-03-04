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
  Followers: [mongoose.SchemaTypes.ObjectId],
  Following: [mongoose.SchemaTypes.ObjectId],
  NumberOfTweets: [mongoose.SchemaTypes.ObjectId],
  NumberOfLikedTWeets: [mongoose.SchemaTypes.ObjectId],
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
