const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario_controller');

// /api/usuarios

// Rota de Cadastro (PÚBLICA): Todo mundo precisa conseguir se cadastrar
router.post('/', usuarioController.inserir);

// Rota de Listagem 
router.get('/', usuarioController.listar);

// Busca por ID
router.get('/:id', usuarioController.buscarPorId);

module.exports = router;