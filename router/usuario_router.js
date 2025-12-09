const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario_controller');

// Rota de Cadastro 
router.post('/', usuarioController.inserir);

// Rota de Listagem 
router.get('/', usuarioController.listar);

// Busca por ID
router.get('/:id', usuarioController.buscarPorId);

module.exports = router;