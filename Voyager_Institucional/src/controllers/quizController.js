var quizModel = require("../models/quizModel");

function enviarDados(req,res){
    var acertos  = req.body.qtdAcertos
    var erros = req.body.qtdErros
    var fkUser = req.body.idUser
    quizModel.enviarDados(acertos, erros, fkUser)
    .then(function(resultado){
        console.log('Dados enviados! ' + resultado)
    }).catch(function(erro){
        console.log('Erro no envio dos dados: ' + erro)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    enviarDados
}