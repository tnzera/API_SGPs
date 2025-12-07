// database.js
const { Pool } = require('pg');

// Conexão direta (Substitua pelos dados do seu banco)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'trabalho_sgp',
  password: 'admin',
  port: 5432,
});

module.exports = pool;