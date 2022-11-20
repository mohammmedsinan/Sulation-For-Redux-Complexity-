import express from 'express';
import { createUser, GetAllUsers, GetOneUser, UpdateUser } from '../controllers/usersControl.js';

const router = express.Router();
router.post('/create', createUser);
router.post('/all', GetAllUsers);
router.get('/:username', GetOneUser);
router.put('/:id', UpdateUser);

export default router;
