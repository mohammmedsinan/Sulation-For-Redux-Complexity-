import TweetsModal from '../models/TweetsModal.js';

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

export const GitTheTweets = (req, res) => {
  TweetsModal.find((err, Tweet) => {
    if (err) {
      console.log(err);
    } else {
      res.json(Tweet);
    }
  });
};
