
import BinanceService from '../services/binance.service.js';
import { logger } from '../services/logger.service.js';

/**
* Handles GET requests to the trading endpoint, fetching candlestick data for a specified symbol and interval.
*
* @async
* @function get
* @param {object} req - The request object.
* @param {object} res - The response object.
* @param {function} next - The next middleware function.
* @returns {object}  Object of arrays from candlestick data
*/
async function get(req, res, next) {
  try {
      const binanceService = new BinanceService();
      res.send(await binanceService.getCandlesticks("BNBUSDT", "5m"));
  } catch (err) {
      logger.error(`Trading Controller error: ${err.message}`);
      next(err);
  }
}

export default { get }; 