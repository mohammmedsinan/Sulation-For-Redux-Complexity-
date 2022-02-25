import express from 'express';
import { PostTheTweets, GitTheTweets } from '../cotrolerRoutes/Tweets.js';

const router = express.Router();
router.post('/', PostTheTweets);
router.get('/', GitTheTweets);

export default router;
