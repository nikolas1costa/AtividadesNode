const express = require('express')
const router = express.Router();
router.get('/', (req, res) => {

    let obj = {
        'nome': req.query.nome,
        'idade': req.query.idade,
        mostrar: true,
        disciplinas: [
            {nome: 'materia1', qt: "20aulas"},
            {nome: 'materia2', qt: "10aulas"},
            {nome: 'materia3', qt: "5aulas"},
            {nome: 'materia4', qt: "1aulas"}
        ],
        //frutas: ['banana', 'maça', 'melancia'],
        teste: '<strong> testando negrito </strong>'
    };
    

    res.render('home', obj)
});
 
module.exports = router;