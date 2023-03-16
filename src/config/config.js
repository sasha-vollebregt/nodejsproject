// Import the necessary modules
import * as dotenv from 'dotenv';
import * as path from  'path'; 
import { fileURLToPath } from 'url';

// Get the filename and directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file based on current NODE_ENV value
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

// Export a configuration object with values from environment variables
export const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  BINANCE_KEY: process.env.BINANCE_KEY,
  BINANCE_SECRET: process.env.BINANCE_SECRET
}