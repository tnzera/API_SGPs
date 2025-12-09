// service/categoria_service.js
const categoriaRepository = require('../repository/categoria_repository');
const usuarioRepository = require('../repository/usuario_repository'); 

async function inserir(categoria) {
    // Validação
    if (!categoria || !categoria.nome || !categoria.usuarioId) {
        throw { id: 400, msg: "Dados incompletos" };
    }
    // Verifica se usuário existe
    const usuario = await usuarioRepository.buscarPorId(categoria.usuarioId);
    if (!usuario) {
        throw { id: 404, msg: "Usuário não encontrado" };
    }
    
    return await categoriaRepository.inserir(categoria);
}

async function listarPorUsuario(usuarioId) {
    if (!usuarioId) {
        throw { id: 400, msg: "UsuarioId é obrigatório" };
    }
    return await categoriaRepository.listarPorUsuario(usuarioId);
}

async function atualizar(id, categoriaUpdate) {
    //Busca no banco
    const categoriaBanco = await categoriaRepository.buscarPorId(id);
    if (!categoriaBanco) {
        throw { id: 404, msg: "Categoria não encontrada" };
    }

    // Verifica o usuarioId 
    if (categoriaBanco.usuario_id !== categoriaUpdate.usuarioId) {
        throw { id: 403, msg: "Operação não permitida" };
    }

    return await categoriaRepository.atualizar(id, categoriaUpdate.nome);
}

async function deletar(id, usuarioId) {
    const categoriaBanco = await categoriaRepository.buscarPorId(id);
    if (!categoriaBanco) {
        throw { id: 404, msg: "Categoria não encontrada" };
    }

    // Segurança
    if (categoriaBanco.usuario_id !== usuarioId) {
        throw { id: 403, msg: "Operação não permitida" };
    }

    return await categoriaRepository.deletar(id);
}

module.exports = {
    inserir,
    listarPorUsuario,
    atualizar,
    deletar
}