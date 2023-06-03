var usuarioModel = require("../models/usuarioModel");
var telefoneModel = require("../models/telefoneModel");

function login(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    usuarioModel.login(email, senha)
        .then(
            function (resultado) {

                if (resultado.length == 1) {
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    console.error('Email e/ou senha inválido(s)!')
                } else {
                    console.error('Mais de um usuário com o mesmo login e senha!')
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrarUsuario(req,res) {
    var nome = req.body.nomeServer;
    var ddd = req.body.dddServer;
    var tel = req.body.telServer;
    var dataServer = req.body.dataServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var planeta = req.body.planetaServer;
    var diaNoite = req.body.diaNoiteServer;
    usuarioModel.cadastrar(nome, dataServer, email, senha, planeta, diaNoite)

        .then(
            function (resultado) {
                res.json(resultado);
                cadastrarTelefone(ddd, tel, email)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function consultarDados(req, res) {
    usuarioModel.consultarDados()
        .then(function (resultado) {
            res.json(resultado)
        }).catch(function (erro) {
            console.log('Erro ao consultar os dados!' + erro)
            console.log(
                "\nHouve um erro ao realizar a consulta! Erro: ",
                erro.sqlMessage
            );
        })
}

function cadastrarTelefone(ddd, tel, email) {
    telefoneModel.buscarUsuario(email)
        .then(function (resultado) {
            telefoneModel.cadastrar(ddd, tel, resultado[0].idUsuario)
            .then(function(resultado){
                console.log(resultado)
            }).catch(function(erro){
                console.log("Erro ao cadastrar o telefone: " + erro)
            })
        }).catch(function (erro) {
            console.log('Erro ao consultar os dados!' + erro)
        })
}

module.exports = {
    login,
    consultarDados,
    cadastrarUsuario
}