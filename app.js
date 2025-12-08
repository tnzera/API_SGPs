// app.js
const express = require('express');
const app = express();
const port = 3000;

// 1. Imports dos Controllers e Middlewares
const authMiddleware = require('./middleware/auth.middleware');
const loginController = require('./controller/login_controller');


// 2. Imports dos Roteadores
const usuarioRouter = require('./router/usuario_router');
const categoriaRouter = require('./router/categoria_router');
//const transacaoRouter = require('./router/transacao_router'); // Faltava importar


app.use(express.json());

// --- ROTAS PÚBLICAS (Antes do Middleware) ---
// Login e Cadastro de Usuário devem ser acessíveis sem token
app.post('/api/login', loginController.realizarLogin);


// --- BARREIRA DE SEGURANÇA ---
// O comando abaixo "trava" tudo que vem depois dele.
// Se não tiver token válido, o código para aqui.
app.use(authMiddleware.verificarAcesso);

// --- ROTAS PRIVADAS (Depois do Middleware) ---
// Só chega aqui se o token for válido
app.use('/api/usuarios', usuarioRouter);
app.use('/api/categorias', categoriaRouter);
//app.use('/api/transacoes', transacaoRouter);
//app.use('/api/categorias', categoriaRouter);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});