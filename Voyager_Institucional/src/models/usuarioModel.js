var database = require("../database/config")

function login(email, senha) {
    var instrucao = `
        SELECT * FROM Usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    login,
    cadastrar,
};