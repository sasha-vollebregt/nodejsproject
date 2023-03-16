import express from 'express';
const router = express.Router();
import tradingController from '../controllers/trading.controller.js';

// GET request handler for the root trading endpoint
router.get('/', tradingController.get)

export default router;