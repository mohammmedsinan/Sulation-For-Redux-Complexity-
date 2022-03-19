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
      error: err,
    });
  }
};
//Get All the Users
export const GetAllUsers = async (req, res) => {
  const BodyReq = req.body.username;
  try {
    //search if the user didn't send any filter
    if (BodyReq === undefined) {
      //return all the Users
      await Profile.find({})
        .populate('YourTweets')
        .then((users) => {
          res.status(201).json({
            message: 'Get all users work successfully',
            data: users,
          });
        });
    } else {
      //return users by the filter that sent from front-end
      console.log(BodyReq);
    }
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
    await Profile.find({ username })
      .populate('YourTweets Following Followers')
      .then((User) => {
        res.status(202).json({
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
export const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await Profile.findOneAndUpdate({ _id: id }, { ...data });
    await user.save((err, u) => {
      if (err) res.json(err);
      res.json(data);
    });
  } catch (err) {
    res.status(401).json({
      message: 'failed update user',
      err,
    });
  }
};
