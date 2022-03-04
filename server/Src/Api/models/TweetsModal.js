import mongoose from 'mongoose';

const Tweeting = mongoose.Schema({
  TweetText: {
    type: String,
    required: true,
  },
  username: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', require: true },
  Date: {
    type: Date,
    default: Date.now(),
    require: true,
  },
});

const tweetIng = mongoose.model('Tweets', Tweeting);
export default tweetIng;
