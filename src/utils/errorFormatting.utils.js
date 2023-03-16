import { logger } from '../services/logger.service.js';

/**
  Formats the error message returned from an API response where error message
  has msg instead of message
  @param {object} error - The error object returned from the API
  @return {object} - The formatted error object
*/
export const errorMessageFormatter  = (error) => {
  const { body } = error;
  if(body) {
    try {
      let { msg } = JSON.parse(body);
      error.message = msg;
      if (msg) {
        error.message = msg;
      }
    return error;
    } catch(e) {
      logger.error(`Error Forrmating Utils has an error: ${e}`)
    }
  } 
  return error; 
}