import Event from '../models/eventsModel.js';

//======================Event Create============================
export const createEvent = async (req, res) => {
  const eventData = req.body;
  const newEvent = new Event(eventData);
  try {
    await newEvent.save().then((eventData) => {
      res.status(201).json({
        message: 'Event Created Successfully',
        data: eventData,
      });
    });
  } catch (err) {
    res.status(401).json({
      message: 'create Event failed',
      error: err,
    });
  }
};

//======================Get all Events============================

export const getEvents = async (req, res) => {
  const BodyReq = req.body.name;
  try {
    //search if the user didn't send any filter
    if (BodyReq === undefined) {
      //return all the Users
      await Event.find({}).then((event) => {
        res.status(201).json({
          message: 'Get all events work successfully',
          data: event,
          pageSize: 6,
          total: event.length,
        });
      });
    } else {
      //return users by the filter that sent from front-end
      console.log(BodyReq);
    }
  } catch (err) {
    res.status(401).json({
      message: "Get events didn't work, something went wrong",
      err: err,
    });
  }
};

//======================Get Single Event============================

export const eventDetails = (req, res) => {
  const id = req.params.id;
  Event.find({ _id: id }).then((data) => {
    res.status(201).json({
      Message: `Get this ${id} Product successfully`,
      data: data[0],
    });
  });
};

//======================Update an Event============================

export const eventUpdate = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const event = await Event.findOneAndUpdate({ _id: id }, { ...data });
    await event.save((err, u) => {
      if (err) res.json(err);
      res.json(data);
    });
  } catch (err) {
    res.status(401).json({
      message: 'failed update Event',
      err,
    });
  }
};

//======================delete an Event============================
export const eventDelete = async (req, res) => {
  const id = req.params.id;
  try {
    await Event.deleteOne({ _id: id }).then((e) => {
      res.status(201).json({
        message: 'deleted this Event successfully',
        data: e,
      });
    });
  } catch (err) {
    res.status(404).json({
      message: "This id isn't found there sorry!",
      ErrorData: err,
    });
  }
};
