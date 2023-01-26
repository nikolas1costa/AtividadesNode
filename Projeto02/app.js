//fazendo importacao do express
const express = require ("express");
const router = require ("./routes/index")
const mustache = require ("mustache-express")
app = express();
app.use('/', router); 

app.use(express.json())
app.engine("mst", mustache(__dirname + '/views/', 'mst'))
app.set("view engine", 'mst')

app.set('views', __dirname + '/views/');

module.exports = app; 