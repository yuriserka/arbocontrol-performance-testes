const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: Number(process.env.PORT) || 3334,
  HOST: process.env.HOST || '0.0.0.0',
};