import mongoose from 'mongoose';

const Profile = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  current_cart: {
    type: String,
    require: true,
  },
  current_cart: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'products',
    require: true,
  },
  cart: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'products',
    require: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const ProfileData = mongoose.model('users', Profile);
export default ProfileData;
