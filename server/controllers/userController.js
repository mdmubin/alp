/* eslint-disable no-underscore-dangle */

import User from '../models/user.js';
import { throwServerError } from './utils.js';

export function authenticateUser(req, res, next) {
  const authenticate = async (rq, rs) => {
    const { email, password } = rq.body;
    const user = await User.findOne({ email });

    if (user && (await user.verifyPassword(password))) {
      rs.json({
        _id: user._id,
        isAdmin: user.isAdmin,
        token: null,
      });
    } else {
      throwServerError('invalid username / password', 401);
    }
  };

  Promise.resolve(authenticate(req, res))
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
