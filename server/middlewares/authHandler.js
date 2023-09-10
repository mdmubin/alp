import jwt from 'jsonwebtoken';
import * as config from '../config/config.js';
import { throwServerError } from '../controllers/utils.js';

// eslint-disable-next-line import/prefer-default-export
export function authorize(req, _res, next) {
  const token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    const { _id } = jwt.decode(token.split(' ')[1], config.JWT_SECRET);
    req.user = { _id };
  } else {
    throwServerError('unauthorized access attempt', 401);
  }

  next();
}
