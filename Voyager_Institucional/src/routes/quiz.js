var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/enviarDados", function(req, res){
    quizController.enviarDados(req, res);
});

module.exports = router;

