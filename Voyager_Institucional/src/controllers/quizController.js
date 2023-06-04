var quizModel = require("../models/quizModel");

function enviarDados(req, res) {
    var acertos = req.body.qtdAcertos
    var erros = req.body.qtdErros
    var fkUser = req.body.idUser
    quizModel.enviarDados(acertos, erros, fkUser)
        .then(function (resultado) {
            console.log('Dados enviados! ' + JSON.stringify(resultado))
            res.json(resultado)
        }).catch(function (erro) {
            console.log('Erro no envio dos dados: ' + erro)
            res.status(500).json(erro.sqlMessage);
        })
}

function receberDados(req, res) {
    var fkUser = req.body.fkUser;
    quizModel.receberDados(fkUser)
        .then(function (resultado) {
            if(resultado.length == 0){
                console.error('Nenhum registro encontrado!')
            }
            console.log('Dados recebidos! ' + JSON.stringify(resultado))
            res.json(resultado)
        }).catch(function(erro){
            console.log('Erro ao receber os dados: ' + erro)
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    enviarDados,
    receberDados
}