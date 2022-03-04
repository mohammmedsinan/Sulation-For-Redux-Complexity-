import Profile from '../models/ProfileModal.js';

//Create User
export const createUser = async (req, res) => {
  const ProfileData = req.body;
  const newProfile = new Profile(ProfileData);
  try {
    await newProfile.save().then((profileData) => {
      res.status(201).json({
        message: 'User Created Successfully',
        data: profileData,
      });
    });
  } catch (err) {
    res.status(401).json({
      message: 'create user failed',
      error: er,
    });
  }
};

//Get All the Users
export const GetAllUsers = async (req, res) => {
  try {
    const Users = await Profile.find({}).then((users) => {
      res.status(201).json({
        message: 'Get all users work successfully',
        data: users,
      });
    });
  } catch (err) {
    res.status(401).json({
      message: "Get user didn't work, something went wrong",
      err: err,
    });
  }
};

//Get only one user
export const GetOneUser = async (req, res) => {
  const username = req.params.username;

  try {
    await Profile.find({ username }).then((User) => {
      res.status(201).json({
        message: 'Get one user successfully',
        data: User,
      });
    });
  } catch (err) {
    res.status(401).json({
      message: "Get one user didn't work",
      err: err,
    });
  }
};
