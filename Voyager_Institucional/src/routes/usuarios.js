var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/login", function (req, res) {
    usuarioController.login(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/consultarDados", function(req, res){
    usuarioController.consultarDados(req, res)
})

module.exports = router;