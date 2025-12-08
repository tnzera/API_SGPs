// repository/categoria_repository.js
const pool = require('../database');

async function inserir(categoria) {
    const query = "INSERT INTO categorias (nome, usuario_id) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(query, [categoria.nome, categoria.usuarioId]);
    return res.rows[0];
}

async function listarPorUsuario(usuarioId) {
    const query = "SELECT * FROM categorias WHERE usuario_id = $1";
    const res = await pool.query(query, [usuarioId]);
    return res.rows;
}

async function buscarPorId(id) {
    const query = "SELECT * FROM categorias WHERE id = $1";
    const res = await pool.query(query, [id]);
    return res.rows[0];
}

async function atualizar(id, nome) {
    const query = "UPDATE categorias SET nome = $1 WHERE id = $2 RETURNING *";
    const res = await pool.query(query, [nome, id]);
    return res.rows[0];
}

async function deletar(id) {
    const query = "DELETE FROM categorias WHERE id = $1 RETURNING *";
    const res = await pool.query(query, [id]);
    return res.rows[0];
}

module.exports = {
    inserir,
    listarPorUsuario,
    buscarPorId,
    atualizar,
    deletar
}