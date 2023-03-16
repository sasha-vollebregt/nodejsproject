
import { config } from './src/config/config.js';
import express from 'express';
import { logger } from './src/services/logger.service.js';
import authMiddleware from './src/middlewares/authorization.middelware.js';
import errorMiddleware from './src/middlewares/error.middelware.js';
import trading from "./src/routes/trading.routes.js";

// Create the Express server
const server = express();

// Use the authorization middleware for all routes
server.use(authMiddleware);

// Define a route for the root URL
server.get("/", (req, res) => {
  logger.info("Hello World");
  res.status(200).send("Logging Hello World..");
});

// Mount the trading routes under the /trading path
server.use('/trading', trading);

// Use the error middleware for all routes
server.use(errorMiddleware);

// Start the server and listen for incoming requests
server.listen(config.PORT, config.HOST, () => {
  logger.info(`Server Listening On Port ${config.PORT} at ${config.HOST}`);
});