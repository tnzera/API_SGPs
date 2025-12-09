// controller/usuario_controller.js
const usuarioService = require('../service/usuario_service');

//Inserir 
async function inserir(req, res) {
    try {
        const usuario = req.body;
        const usuarioSalvo = await usuarioService.inserir(usuario);
        res.status(201).json(usuarioSalvo);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

//Listar Usuários 
async function listar(req, res) {
    try {
        const lista = await usuarioService.listar();
        res.status(200).json(lista);
    } catch (err) {
        res.status(err.id || 500).json(err);
    }
}

//Buscar por ID
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