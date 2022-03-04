import TweetsModal from '../models/TweetsModal.js';

//Create Post on Tweeter
export const PostTheTweets = async (req, res) => {
  const TweetsInfo = new TweetsModal(req.body);
  try {
    await TweetsInfo.save().then((Tweet) => {
      res.status(201).json(Tweet);
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

//Get Post For One user
export const GitTheTweetsByName = (req, res) => {
  const username = req.params.username;
  TweetsModal.find({ username }).then((Tweets) => {
    res.status(201).json({
      Message: `Get Tweets for ${username} successfully`,
      data: Tweets,
    });
  });
};

//Get Post the whole Tweets in database
export const GitTweetsFromDB = (req, res) => {
  TweetsModal.find((err, Tweets) => {
    if (err) {
      res.status(404).json({
        message: 'Something went wrong',
        Error: err,
      });
    } else {
      res.status(201).json({
        message: 'Successfully Get all tweets',
        data: Tweets,
      });
    }
  });
};

//delete one post for user depend on id
export const DeleteTweetById = async (req, res) => {
  const id = req.body.id;
  try {
    await TweetsModal.deleteOne({ _id: id }).then((e) => {
      res.status(201).json({
        message: 'deleted this tweet successfully',
        dataForPostDeleted: e,
      });
    });
  } catch (err) {
    res.status(404).json({
      message: "This id isn't found there sorry!",
      ErrorData: err,
    });
  }
};
