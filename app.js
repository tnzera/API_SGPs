const express = require('express');
const app = express();
const port = 3000;

//Imports Controllers/Middlewares
const authMiddleware = require('./middleware/auth.middleware');
const loginController = require('./controller/login_controller');


//Imports routers
const usuarioRouter = require('./router/usuario_router');
const categoriaRouter = require('./router/categoria_router');
const transacaoRouter = require('./router/transacao_router');


app.use(express.json());

//ROTAS PÚBLICAS
app.post('/api/login', loginController.realizarLogin);
app.use('/api/usuarios', usuarioRouter);


app.use(authMiddleware.verificarAcesso);
//ROTAS PRIVADAS
app.use('/api/categorias', categoriaRouter);
app.use('/api/transacoes', transacaoRouter);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});