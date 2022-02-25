import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Tweets from './routes/Tweets.js';
// import Profile from './routes/Profile.js';

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));

const PORT = process.env.PORT || 5000;
app.use(cors());
const MONGO_URI =
  'mongodb+srv://train:train@cluster0.rqgrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.status(201).send('<h1 style="text-align:center">This is Home of Api</h1>');
});
//
//
app.use('/Tweets', Tweets);
// app.use('/Profile', Profile);
//
//
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  app.listen(PORT, () => console.log(`Server Running on the Port ${PORT}`)),
);
