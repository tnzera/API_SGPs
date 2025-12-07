// controller/usuario_controller.js
const usuarioService = require('../service/usuario_service');

// 1. Inserir (CADASTRO) - Essencial para criar conta
async function inserir(req, res) {
    try {
        const usuario = req.body;
        const usuarioSalvo = await usuarioService.inserir(usuario);
        res.status(201).json(usuarioSalvo);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

// 2. Listar Usuários (Geralmente rota protegida ou pública, depende do seu app.js)
async function listar(req, res) {
    try {
        const lista = await usuarioService.listar();
        res.status(200).json(lista);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

// 3. Buscar por ID
async function buscarPorId(req, res) {
    try {
        const id = +req.params.id;
        const usuario = await usuarioService.buscarPorId(id);
        res.status(200).json(usuario);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

module.exports = {
    inserir,
    listar,
    buscarPorId
}