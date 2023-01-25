//fazendo importacao do express
const express = require ("express");
const { default: mongoose } = require("mongoose");

//rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/', (req, res) => {res.send("Ola Mundo!")}); 

app = express();
app.use('/', router); 
module.exports = app;