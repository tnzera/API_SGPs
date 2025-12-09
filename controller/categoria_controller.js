const categoriaService = require('../service/categoria_service');

async function inserir(req, res) {
    try {
        const categoria = req.body;
        const categoriaSalva = await categoriaService.inserir(categoria);
        res.status(201).json(categoriaSalva);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

async function listarPorUsuario(req, res) {
    try {
        const idUsuario = +req.params.idUsuario;
        const lista = await categoriaService.listarPorUsuario(idUsuario);
        res.status(200).json(lista);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

async function atualizar(req, res) {
    try {
        const id = +req.params.id;
        const categoria = req.body; 
        const atualizado = await categoriaService.atualizar(id, categoria);
        res.status(200).json(atualizado);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

async function deletar(req, res) {
    try {
        const id = +req.params.id;
        const usuarioId = +req.query.usuarioId; 
        const deletado = await categoriaService.deletar(id, usuarioId);
        res.status(200).json(deletado);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

module.exports = {
    inserir,
    listarPorUsuario,
    atualizar,
    deletar
}