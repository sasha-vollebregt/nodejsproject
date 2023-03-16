import { logger } from '../services/logger.service.js';

/**
 * Error middleware function to handle errors and send appropriate responses
 * @function
 * @param {Error} err - The error object
 * @param {Object} req - The Express request object
 * @param {Object} res - The Express response object
 * @param {Function} next - The Express next function
 * @returns {Object} - The Express response object with error message and status code
 */
const errorMiddleware = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  logger.error(`error middleware :: ${err}`);
  logger.error(`error middleware :: ${err.message}`)
  res.status(statusCode).json({'message': err.message});
}

export default errorMiddleware;