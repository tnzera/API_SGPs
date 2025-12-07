// service/usuario_service.js
const usuarioRepository = require('../repository/usuario_repository');
const tokenService = require('./token_service'); // <--- Importamos o serviço de token

async function inserir(usuario) {
    if (usuario && usuario.nome && usuario.email && usuario.senha) {
        return await usuarioRepository.inserir(usuario);
    } else {
        throw { id: 400, msg: "Dados incorretos" };
    }
}

async function verificarLogin(usuarioLogin) {
    // 1. Busca o usuário no banco pelo email
    const usuarioBanco = await usuarioRepository.buscarPorEmail(usuarioLogin.email);
    
    // 2. Verifica se achou e se a senha bate
    if (usuarioBanco && usuarioBanco.senha === usuarioLogin.senha) {
        
        // 3. Gera o Token USANDO O TOKEN_SERVICE (Muito mais limpo!)
        const token = tokenService.criarToken({
            id: usuarioBanco.id,
            email: usuarioBanco.email
        });

        return { token: token, usuario: usuarioBanco };
    } else {
        throw { id: 401, msg: "Email ou senha inválidos" };
    }
}

async function listar() {
    return await usuarioRepository.listar(); // Supondo que você tenha criado essa função no repository
}

async function buscarPorId(id) {
    const usuario = await usuarioRepository.buscarPorId(id);
    if(usuario) return usuario;
    throw { id: 404, msg: "Usuário não encontrado" };
}

module.exports = {
    inserir,
    verificarLogin,
    listar,
    buscarPorId
}