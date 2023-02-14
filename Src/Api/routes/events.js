import express from 'express';
import {
  createEvent,
  getEvents,
  eventDetails,
  eventUpdate,
  eventDelete,
} from '../controllers/eventsControl.js';
const router = express.Router();

router.post('/create', createEvent);
router.post('/all', getEvents);
router.get('/find/:id', eventDetails);
router.put('/update/:id', eventUpdate);
router.delete('/delete/:id', eventDelete);

export default router;
