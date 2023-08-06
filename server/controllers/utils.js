/* eslint-disable import/prefer-default-export */

export function throwServerError(message, statusCode) {
  const error = Error(message);
  error.status = statusCode;
  throw error;
}
