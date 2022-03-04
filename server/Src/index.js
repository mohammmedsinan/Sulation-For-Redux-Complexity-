import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Tweets from './Api/routes/Tweets.js';
import Profile from './Api/routes/Profile.js';

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_SECRETE_CODE;

app.get('/', (req, res) => {
  res.status(201).send('<h1 style="text-align:center">This is Home of Tweeter API</h1>');
});
app.use('/Tweets', Tweets);
app.use('/Profile', Profile);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  app.listen(PORT, () => console.log(`Server Running on the Port ${PORT}`)),
);
