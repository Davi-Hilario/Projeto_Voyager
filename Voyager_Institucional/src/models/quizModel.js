var database = require("../database/config")

function enviarDados(acertos, erros, fkUser){
    var instrucao = 
    `
        INSERT INTO quiz (qtdAcertos, qtdErros, fkUsuario, dataQuiz) VALUES 
        (${acertos}, ${erros}, ${fkUser}, now());
    `
    return database.executar(instrucao)
}

module.exports = {
    enviarDados
}