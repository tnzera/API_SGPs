const pool = require('../database');

async function inserir(transacao) {

    const query = `
        INSERT INTO transacoes (descricao, valor, tipo, usuario_id, categoria_id, data)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
    `;
    const values = [
        transacao.descricao,
        transacao.valor,
        transacao.tipo,
        transacao.usuarioId,
        transacao.categoriaId,
        transacao.data || new Date()
    ];
    
    const res = await pool.query(query, values);
    return res.rows[0];
}

async function listarPorUsuario(usuarioId) {
    const query = "SELECT * FROM transacoes WHERE usuario_id = $1";
    const res = await pool.query(query, [usuarioId]);
    return res.rows;
}

async function buscarPorId(id) {
    const query = "SELECT * FROM transacoes WHERE id = $1";
    const res = await pool.query(query, [id]);
    return res.rows[0];
}

module.exports = {
    inserir,
    listarPorUsuario,
    buscarPorId
}