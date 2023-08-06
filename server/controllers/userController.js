/* eslint-disable no-underscore-dangle */

import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import * as config from '../config/config.js';
import { throwServerError } from './utils.js';

export function authenticateUser(req, res, next) {
  const authenticate = async () => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.verifyPassword(password))) {
      res.json({
        _id: user._id,
        isAdmin: user.isAdmin,
        token: jwt.sign({ _id: user._id }, config.JWT_SECRET, { expiresIn: '30d' }),
      });
    } else {
      throwServerError('invalid username / password', 401);
    }
  };

  Promise.resolve(authenticate())
    .catch((error) => next(error));
}

export function getUserDetails(req, res, next) {
  Promise.resolve((
    () => User.findById(req.user._id).select('-password').exec()
  )())
    .then((queryRes) => {
      if (queryRes) {
        res.json({
          _id: queryRes._id,
          name: queryRes.name,
          username: queryRes.username,
          email: queryRes.email,
          isAdmin: queryRes.isAdmin,
        });
      } else {
        throwServerError('', 500);
      }
    })
    .catch((error) => next(error));
}

export function registerUser(req, res, next) {
  const {
    name, username, email, password,
  } = req.body;

  Promise.resolve((
    () => User.find({ username }).exec()
  )())
    .then((queryRes) => {
      if (!queryRes || queryRes.length !== 0) {
        throwServerError('username already exists', 409);
      }
    })
    .then(() => User.create({
      name, username, email, password,
    }))
    .then((user) => {
      if (!user) {
        throwServerError('failed to register', 500);
      }
      res.status(201);
      res.json({
        _id: user._id,
        isAdmin: user.isAdmin,
        token: jwt.sign({ _id: user._id }, config.JWT_SECRET, { expiresIn: '30d' }),
      });
    })
    .catch((error) => next(error));
}
