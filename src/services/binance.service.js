import Binance from 'node-binance-api';
import { config } from '../config/config.js';
import { logger } from '../services/logger.service.js';
import { errorMessageFormatter } from '../utils/errorFormatting.utils.js';

class BinanceService {
  /**
  Creates a new instance of the BinanceService class.
  @constructor
  */
  constructor() {
    this.binance = new Binance();
    // Set the API key and secret for the Binance instance.
    this.binance.options({
      APIKEY: config.BINANCE_KEY,
      APISECRET: config.BINANCE_SECRET
    });
  }

  /**
  Gets the candlestick data for a given symbol and period.
  @async
  @param {string} symbol - The symbol of the asset to get candlestick data for.
  @param {string} period - The time period to get the candlestick data for.
  @returns {Promise} - A promise that resolves with the requested candlestick data, or rejects with an error message.
  */
  async getCandlesticks(symbol, period) {
    return new Promise((resolve, reject) => {
      this.binance.candlesticks(symbol, period, (err, ticks) => {
        if (err) {
          logger.error(`Binance services error: ${JSON.stringify(err)}`)
          reject(errorMessageFormatter(err));
        } else {
          resolve(ticks);
        }
      }, { limit: 500, endTime: 1514764800000 });
    });
  }
}

export default BinanceService;