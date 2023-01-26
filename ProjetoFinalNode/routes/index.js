const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        nome: req.query.nome
    };
    res.render('home', obj)
});

router.get('/rota1', (req, res) => {
    let obj = {
        nome: req.query.nome
    };
    res.render('home2', obj)
});
module.exports = router;