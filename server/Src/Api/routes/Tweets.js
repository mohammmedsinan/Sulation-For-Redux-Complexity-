import express from 'express';
import {
  PostTheTweets,
  GitTheTweetsByName,
  GitTweetsFromDB,
  DeleteTweetById,
} from '../controllers/Tweets.js';

const router = express.Router();
router.post('/create', PostTheTweets);
router.get('/:username', GitTheTweetsByName);
router.post('/all', GitTweetsFromDB);
router.delete('/delete', DeleteTweetById);

export default router;
