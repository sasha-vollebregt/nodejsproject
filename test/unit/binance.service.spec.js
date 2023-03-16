import BinanceService from '../../src/services/binance.service.js';
import { binanceMock } from '../mocks/binanceMock.js';

describe('BinanceService', () => {
  describe('getCandlesticks', () => {
    let binanceService;

    beforeEach(() => {
      // Create a new instance of BinanceService for each test
      binanceService = new BinanceService();
    });

    it('should return candlestick data for a given symbol and period', async () => {
      // Set up the test data
      const symbol = 'BNBUSDT';
      const period = '5m';
    
      // Create a new instance of the BinanceService class
      binanceService.binance = binanceMock;

      // Call the getCandlesticks method with the test data
      const candlesticks = await binanceService.getCandlesticks(symbol, period);
    
      // Assert that the candlesticks were returned successfully
      expect(candlesticks).toBeDefined();
      expect(Array.isArray(candlesticks)).toBe(true);
    });

    it('should reject with an error message if there is an error', async () => {
       // Define the mock data
       const symbol = 'INVALID_SYMBOL';
       const period = '5m';
       const error = new Error('Invalid symbol.');
 
       // Replace the real Binance instance with a mock
       spyOn(binanceService.binance, 'candlesticks').and.callFake((symbol, period, callback, params) => {
         callback(error, null);
       });
 
       // Call the method and assert that it rejects with the expected error message
       binanceService.getCandlesticks(symbol, period)
         .then(() => {
           fail('Expected method to reject.');
         })
         .catch((err) => {
           // not reading any files, databases, network so acceptable to directly call in the test
           expect(err).toEqual(errorMessageFormatter(error));
           done();
         });
    });
  });
});