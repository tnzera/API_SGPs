// service/token_service.js
const jwt = require('jsonwebtoken');

const SECRET = "Sen@c2025";

// Função para CRIAR o token 
function criarToken(payload) {
    // O payload são os dados que vão dentro do token (ex: id e email)
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

// Função para VALIDAR o token (usada no Middleware)
function validarToken(token) {
    return jwt.verify(token, SECRET);
}

module.exports = {
    criarToken,
    validarToken
}