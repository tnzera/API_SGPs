const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'trabalho_sgp',
  password: 'admin',
  port: 5432,
});

module.exports = pool;