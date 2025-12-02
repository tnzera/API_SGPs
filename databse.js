// database.js
const { Pool } = require('pg');

// Conexão direta (Substitua pelos dados do seu banco)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'trabalho_sgp',
  password: 'sua_senha_postgres',
  port: 5432,
});

module.exports = pool;