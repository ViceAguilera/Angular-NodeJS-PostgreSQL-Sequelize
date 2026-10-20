const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

if (!process.env.TOKEN_SECRET) {
  throw new Error('Falta la variable de entorno TOKEN_SECRET (ver Backend/.env.example)');
}

const db = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'galeria-fotografias',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  dialect: 'postgres'
};

module.exports = {
  development: db,
  test: db,
  production: db,
  token_secret: process.env.TOKEN_SECRET
};
