// controller/login_controller.js
const usuarioService = require('../service/usuario_service');

async function realizarLogin(req, res) {
    const usuarioLogin = req.body; // Pega { email: "...", senha: "..." }

    try {
        // Chama o serviço que verifica a senha e gera o token
        const resultado = await usuarioService.verificarLogin(usuarioLogin);
        
        // Se der certo, retorna status 200 e o objeto com o token
        res.status(200).json(resultado); 
    } catch (erro) {
        // Se der erro (senha errada ou usuário não encontrado), retorna o status de erro (ex: 401)
        res.status(erro.id || 500).json({ msg: erro.msg || "Erro interno" });
    }
}

module.exports = {
    realizarLogin
}