const usuarioService = require('../service/usuario_service');

async function realizarLogin(req, res) {
    const usuarioLogin = req.body; 

    try {
        // Chama o serviço que verifica a senha e gera o token
        const resultado = await usuarioService.verificarLogin(usuarioLogin);
        res.status(200).json(resultado); 
    } catch (erro) {
        //retorna o status de erro
        res.status(erro.id || 500).json({ msg: erro.msg || "Erro interno" });
    }
}

module.exports = {
    realizarLogin
}