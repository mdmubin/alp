import express from 'express';
import { authorize } from '../middlewares/authHandler.js';
import { authenticateUser, getUserDetails } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login/', authenticateUser);
userRouter
  .route('/profile')
  .get(authorize, getUserDetails);

export default userRouter;
