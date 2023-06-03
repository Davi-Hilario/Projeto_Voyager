var database = require("../database/config")

function login(email, senha) {
    var instrucao = `
        SELECT * FROM Usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    return database.executar(instrucao);
}

function cadastrar(nome, dataServer, email, senha, planeta, diaNoite) {
    var instrucao = `
        INSERT INTO usuario (nomeUsuario, dataNasc, planetaFavorito, diaOuNoite, emailUsuario, senhaUsuario)
        VALUES ('${nome}', '${dataServer}', '${planeta}', '${diaNoite}', '${email}', '${senha}');
    `;
    return database.executar(instrucao);
}

function consultarDados(){
    var instrucao = 
    `
        select (select count(planetaFavorito) from usuario where planetaFavorito = 'Mercúrio') Mercurio,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Vênus') Venus,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Terra') Terra,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Marte') Marte,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Júpiter') Jupiter,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Saturno') Saturno,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Urano') Urano,
            (select count(planetaFavorito) from usuario where planetaFavorito = 'Netuno') Netuno,
            (select count(diaOuNoite) from usuario where diaOuNoite = 'Dia') Dia,
            (select count(diaOuNoite) from usuario where diaOuNoite = 'Noite') Noite
        from usuario limit 1;
    `
    return database.executar(instrucao)
}

module.exports = {
    login,
    cadastrar,
    consultarDados
};