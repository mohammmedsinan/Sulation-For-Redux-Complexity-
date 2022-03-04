import express from 'express';
import { createUser, GetAllUsers, GetOneUser } from '../controllers/Profile.js';

const router = express.Router();
router.post('/create', createUser);
router.post('/all', GetAllUsers);
router.get('/:username', GetOneUser);

export default router;
