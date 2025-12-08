// router/categoria_router.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoria_controller');

// POST /api/categorias
router.post('/', categoriaController.inserir);

// GET /api/categorias/listarPorUsuario/1
router.get('/listarPorUsuario/:idUsuario', categoriaController.listarPorUsuario);

// PUT /api/categorias/5
router.put('/:id', categoriaController.atualizar);

// DELETE /api/categorias/5?usuarioId=1
router.delete('/:id', categoriaController.deletar);

module.exports = router;