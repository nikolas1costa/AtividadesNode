const express = require('express')
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        nome: req.query.nome
    };
    res.render('home', obj)
});

router.get('/rota2', (req, res) => {
    fs.readFile('horarios.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('paginaSecundaria', obj)
    });
});

router.get('/rota3', (req, res) => {
    fs.readFile('historico.json', 'utf8', (err, data) => {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.render('paginaTerciaria', obj)
    });
});
module.exports = router;