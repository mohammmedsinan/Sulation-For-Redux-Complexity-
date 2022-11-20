import mongoose from 'mongoose';

const Events = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  updatedDate: {
    type: Date,
    default: Date.now(),
  },
});

const EventData = mongoose.model('events', Events);
export default EventData;
