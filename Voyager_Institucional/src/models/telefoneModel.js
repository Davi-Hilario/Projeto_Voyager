var database = require("../database/config")

function buscarUsuario(email) {
    var instrucao = `
        SELECT idUsuario FROM Usuario WHERE emailUsuario = '${email}';
    `;
    return database.executar(instrucao);
}

function cadastrar(ddd, numero, fkUser){
    var instrucao = 
    `
        INSERT INTO telefone values (null, '${ddd}', '${numero}', '${fkUser}');
    `
    return database.executar(instrucao);
}
module.exports = {
    buscarUsuario,
    cadastrar
};