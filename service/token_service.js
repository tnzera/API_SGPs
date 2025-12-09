const jwt = require('jsonwebtoken');

const SECRET = "Sen@c2025";

// Função para CRIAR o token 
function criarToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

// Função para VALIDAR o token 
function validarToken(token) {
    return jwt.verify(token, SECRET);
}

module.exports = {
    criarToken,
    validarToken
}