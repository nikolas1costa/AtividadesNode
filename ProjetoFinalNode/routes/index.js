const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        nome: req.query.nome
    };
    res.render('home', obj)
});

router.get('/rota2', (req, res) => {
    let horarios = {
        segunda: {
            disciplina: "Gestão Agil de Proj.",
            hora: "7:40 até 11:20"
        },
        terca: {
            disciplina: "BD não relacional",
            hora: "7:40 até 11:20"
        },
        quarta: {
            disciplina: "Dev. Web III",
            hora: "7:40 até 11:20"
        },
        quinta: {
            disciplina: "Álgebra Linear",
            hora: "7:40 até 11:20"
        },
        sexta: {
            disciplina: "Técnicas de Programação II",
            hora: "7:40 até 11:20"
        },
    }
    res.render('paginaSecundaria', horarios)
});

router.get('/rota3', (req, res) => {

    res.render('home2')
});
module.exports = router;