const usuarioRepository = require('../repository/usuario_repository');
const tokenService = require('./token_service'); 

async function inserir(usuario) {
    if (usuario && usuario.nome && usuario.email && usuario.senha) {
        return await usuarioRepository.inserir(usuario);
    } else {
        throw { id: 400, msg: "Dados incorretos" };
    }
}

async function verificarLogin(usuarioLogin) {
    //Busca o usuário no banco
    const usuarioBanco = await usuarioRepository.buscarPorEmail(usuarioLogin.email);
    
    //Verifica senha 
    if (usuarioBanco && usuarioBanco.senha === usuarioLogin.senha) {
        
        //Gera o Token 
        const token = tokenService.criarToken({
            id: usuarioBanco.id,
            email: usuarioBanco.email
        });

        return { token: token, usuario: usuarioBanco };
    } else {
        throw { id: 401, msg: "Email ou senha inválidos" };
    }
}

//http://localhost:3000/api/usuarios
async function listar() {
    return await usuarioRepository.listar(); 
}

//http://localhost:3000/api/usuarios/1
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