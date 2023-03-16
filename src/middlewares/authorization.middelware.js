import { expressjwt } from 'express-jwt';
import { config } from '../config/config.js';

const authMiddleware = expressjwt({ secret: config.SECRET_KEY, algorithms: ['HS256'] });

export default authMiddleware;