const transacaoRepository = require('../repository/transacao_repository');
const usuarioRepository = require('../repository/usuario_repository'); 
const categoriaRepository = require('../repository/categoria_repository');

async function inserir(transacao) {
    //Validações 
    if (!transacao || !transacao.usuarioId || !transacao.valor || !transacao.tipo || !transacao.categoriaId) {
        throw { id: 400, msg: "Dados incompletos" };
    }
    if (transacao.valor <= 0) {
        throw { id: 400, msg: "Valor deve ser positivo" };
    }
    if (transacao.tipo !== 'receita' && transacao.tipo !== 'despesa') {
        throw { id: 400, msg: "Tipo inválido (receita ou despesa)" };
    }

    //Verifica Usuário
    const usuario = await usuarioRepository.buscarPorId(transacao.usuarioId);
    if (!usuario) {
        throw { id: 404, msg: "Usuário não encontrado" };
    }

    //Verifica Categoria 
    const categoria = await categoriaRepository.buscarPorId(transacao.categoriaId);
    if (!categoria) {
        throw { id: 404, msg: "Categoria não encontrada" };
    }

    if (categoria.usuario_id !== transacao.usuarioId) {
        throw { id: 403, msg: "A categoria não pertence a este usuário" };
    }

    //INSERE a transação
    const transacaoInserida = await transacaoRepository.inserir(transacao);

    //ATUALIZA O SALDO 
    let novoSaldo = parseFloat(usuario.saldo); 
    if (transacao.tipo === 'receita') {
        novoSaldo += parseFloat(transacao.valor);
    } else { // despesa
        novoSaldo -= parseFloat(transacao.valor);
    }

    await usuarioRepository.atualizarSaldo(usuario.id, novoSaldo);

    return transacaoInserida;
}

async function listarPorUsuario(usuarioId) {
    if(!usuarioId) throw { id: 400, msg: "ID do usuário obrigatório" };
    return await transacaoRepository.listarPorUsuario(usuarioId);
}

module.exports = {
    inserir,
    listarPorUsuario
}