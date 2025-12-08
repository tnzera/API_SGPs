// repository/usuario_repository.js
const pool = require('../database'); // Importa a conexão que você já tem

async function buscarPorEmail(email) {
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const res = await pool.query(query, [email]);
    return res.rows[0]; // Retorna o usuário ou undefined
}

async function inserir(usuario) {
    const query = "INSERT INTO usuarios (nome, email, senha, saldo) VALUES ($1, $2, $3, 0) RETURNING *";
    const res = await pool.query(query, [usuario.nome, usuario.email, usuario.senha]);
    return res.rows[0];
}

async function listar() {
    const query = "SELECT * FROM usuarios";
    const res = await pool.query(query);
    return res.rows;
}

async function buscarPorId(id) {
    const query = "SELECT * FROM usuarios WHERE id = $1";
    const res = await pool.query(query, [id]);
    return res.rows[0];
}

async function atualizarSaldo(id, novoSaldo) {
    const query = "UPDATE usuarios SET saldo = $1 WHERE id = $2 RETURNING *";
    const res = await pool.query(query, [novoSaldo, id]);
    return res.rows[0];
}

module.exports = {
    buscarPorEmail,
    inserir,
    buscarPorId,
    atualizarSaldo,
    listar
}