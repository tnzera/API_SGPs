const transacaoService = require('../service/transacao_service');

async function inserir(req, res) {
    try {
        const transacao = req.body;
        const transacaoSalva = await transacaoService.inserir(transacao);
        res.status(201).json(transacaoSalva);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

async function listarPorUsuario(req, res) {
    try {
        const idUsuario = +req.params.idUsuario;
        const lista = await transacaoService.listarPorUsuario(idUsuario);
        res.status(200).json(lista);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

module.exports = {
    inserir,
    listarPorUsuario
}