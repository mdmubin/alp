/* eslint-disable no-unused-vars */

import * as config from '../config/config.js';

export default function defaultErrorHandler(err, req, res, next) {
  const statusCode = err.status ?? 500;
  const errorMsg = (config.NODE_ENV === 'development')
    && err.message ? err.message : 'Unexpected server error!';

  if (statusCode === 500) {
    console.log(`AN UNEXPECTED ERROR OCCURRED: ${err.message}`);
    console.log(err.stack);
  }

  res
    .status(statusCode)
    .json({
      error: statusCode,
      message: errorMsg,
    });
}
