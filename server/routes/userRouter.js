import express from 'express';
import { authorize } from '../middlewares/authHandler.js';
import { authenticateUser, getUserDetails, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login/', authenticateUser);
userRouter.post('/register', registerUser);
userRouter
  .route('/profile')
  .get(authorize, getUserDetails);

export default userRouter;
