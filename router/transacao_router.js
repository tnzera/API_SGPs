// router/transacao_router.js
const express = require('express');
const router = express.Router();
const transacaoController = require('../controller/transacao_controller');

// POST /api/transacoes
router.post('/', transacaoController.inserir);

// GET /api/transacoes/listarPorUsuario/1
router.get('/listarPorUsuario/:idUsuario', transacaoController.listarPorUsuario);

module.exports = router;