const rateLimit = require('express-rate-limit');

const { NODE_ENV } = process.env;
const { PORT = 3000 } = process.env;
const { MONGODB = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;
const { SECRET = 'some-secret-key' } = process.env;
const LIMITER = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standartHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  NODE_ENV,
  PORT,
  MONGODB,
  SECRET,
  LIMITER,
};
